import { defineStore } from 'pinia'

export const usePreviewsStore = defineStore('previews',()=>{
	
	const {client} = usePrismic()
	
	//STATE
	const previews = ref(null)
	
	//ACTIONS
	const FETCH = async () => {
		let orderings = ['event.start']
		let fetch = ['event.logo','event.background','event.name','event.start','event.end']
		const res = await client.getAllByType('event',{fetch, orderings})
		if (res) previews.value = res.map(e => ({...e.data,route:`/events/${e.uid}`,uid:e.uid}))
		return res
	}
	
	return{previews,FETCH}
})