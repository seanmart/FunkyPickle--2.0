import { defineStore } from 'pinia'
import {getSlices,getParams} from '@/helpers'
import { useRoute } from 'vue-router'

export const usePagesStore = defineStore('pages',()=>{
	
	const {client} = usePrismic()
	const route = useRoute()
	
	//STATE
	const pages = ref({})
	
	//GETTERS
	const page = computed(()=> pages.value[route.path] || null)
	
	//ACTIONS
	const FETCH = async () => {
		let {type,uid} = getParams(route.params)
		const res = await client.getByUID(type,uid)
		if (res) pages.value[route.path] = {...res.data, slices:getSlices(res.data.slices)}
		return res
	}
	
	return{pages,page,FETCH}
})