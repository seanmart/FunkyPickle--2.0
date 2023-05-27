import { useStore } from '@/stores'

export default defineNuxtPlugin( async ( {$prismic} )=>{
	
	const store = useStore()
	const orderings = ['event.start']
	const fetch = ['event.logo','event.background','event.name','event.start','event.end']
	
	const res = await $prismic.client.getAllByType('event',{fetch, orderings})
	
	if (res){
		store.previews = res.map(event => ({
			...event.data,
			route:`/events/${event.uid}`,
			uid:event.uid
		}))
	}
})