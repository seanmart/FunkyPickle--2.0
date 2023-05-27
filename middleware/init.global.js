import {useStore} from '@/stores'

let state = {
	base:null,
	navigation:null,
	previews:null,
	forms:null
}

export default defineNuxtRouteMiddleware(async ()=>{
	if(!process.server) return 
	
	const nuxtApp = useNuxtApp()
	const store = useStore()
	
	//SETTINGS
	if(!state.navigation){
		console.log('fetching settings')
		const res = await nuxtApp.$prismic.client.getSingle('settings')
		state.navigation = []
		if(res.data){
			state.base = res.data.airtable 
			res.data.links.forEach(item => {
				let link = null
				let label = item.label
				let external = !!item.link.url
				if(item.link.url) link = item.link.url
				if(!link && item.link.uid) link = `/${item.link.uid.replace('home','')}`
				link && state.navigation.push({link,label,external})
			})
		}
	}
	
	//PREVIEWS
	if (!state.previews){
		console.log('fetching previews')
		const fetch = ['event.logo','event.background','event.name','event.start','event.end']
		const orderings = ['event.start']
		const res = await nuxtApp.$prismic.client.getAllByType('event',{fetch,orderings})
		state.previews = []
		if(res){
			res.forEach(event => {
				let uid = event.uid
				let data = event.data 
				let route = `/events/${uid}`
				state.previews.push({...data,route,uid})
			})
		}
	}
	
	store.navigation = state.navigation
	store.previews = state.previews 

})
