import { defineStore } from 'pinia'
import config from '@/tailwind.config.js'

export const useStore = defineStore('main',()=>{
	
	let pending = 0 
	
	//STATE
	const pages = ref({})
	const data = ref({})
	const ready = ref(false)
	const loaded = ref(false)
	const units = {
		navY: parseInt(config.theme.height['nav-y']),
		navX: parseInt(config.theme.width['nav-x']),
		mobile: parseInt(config.theme.screens.m),
		tablet: parseInt(config.theme.screens.t),
		desktop: parseInt(config.theme.screens.d),
		wide: parseInt(config.theme.screens.w)
	}
	
	//ACTIONS
	function PAGE(data,path){
		
		if(data.slices) data.slices = data.slices.filter(s => !s.primary.hide)
		pages.value[path] = data
		
		
		if(data.slices){
			let slices = []
			data.slices.forEach(slice => {
				let {label,hide} = slice.primary
				if (label) slice.id = label.replace(/\s+/g, '-').toLowerCase()
				!hide && slices.push(slice)
			})
			data.slices = slices
		}
		pages.value[path] = data
	}
	
	function LOADING(loading){
		pending += loading ? 1 : -1
		if(!pending) loaded.value = Date.now()
	}

	return {pages,data,ready,loaded,units,PAGE,LOADING}
})