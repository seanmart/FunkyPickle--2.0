import { useStore } from '@/stores'

export default defineNuxtPlugin( async ( {$prismic} )=>{
	
	const navigation = []
	const store = useStore()
	const res = await $prismic.client.getSingle('settings')	
	
	if(res.data){
		res.data.links.forEach( item =>{
			if(!item.link.url && !item.link.uid) return
			navigation.push({
				link: item.link.url || item.link.uid == 'home' ? '/' : `/${item.link.uid}`,
				label: item.label, 
				target: item.link.url ? '_blank' : null
			})
		})
		store.settings = {navigation,airtable: res.data.airtable}
	}
})