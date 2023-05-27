import { defineStore } from 'pinia'
import config from '@/tailwind.config.js'

export const useStore = defineStore('main',()=>{
	
	let pending = 0 
	
	//STATE
	const pages = ref({})
	const base = ref(null)
	const navigation = ref([])
	const previews = ref([])
	const forms = ref({})
	const ready = ref(false)
	const loaded = ref(false)
	const units = {
		navY: parseInt(config.theme.height['nav-y']),
		navX: parseInt(config.theme.width['nav-x']),
		mobile: parseInt(config.theme.screens.m),
		tablet: parseInt(config.theme.screens.t),
		laptop: parseInt(config.theme.screens.l),
		desktop: parseInt(config.theme.screens.d),
		wide: parseInt(config.theme.screens.w)
	}
	
	//ACTIONS
	
	function LOADING(loading){
		pending += loading ? 1 : -1
		if(!pending) loaded.value = Date.now()
	}

	return {
		pages,
		base,
		navigation,
		previews,
		forms,
		ready,
		loaded,
		units,
		LOADING
	}
})