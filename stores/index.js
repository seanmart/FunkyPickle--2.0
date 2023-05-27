import { defineStore } from 'pinia'
import config from '@/tailwind.config.js'

export const useStore = defineStore('main',()=>{
	
	let pending = 0 
	
	//STATE
	const pages = ref({})
	const navigation = ref([])
	const previews = ref([])
	const forms = ref(null)
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
	
	function PAGE(data,path){
		const slices = data.slices.filter(s => !s.primary.hide).map(s =>{
			let label = s.primary.label
			let id = label ? label.replace(/\s+/g, '-').toLowerCase() : s.primary.id
			return {...s,id}
		})
		pages.value[path] = {...data,slices}
	}
	
	function FORMS(items){
		items.forEach(item => {
			let fields = []
			item.fields.forEach(f => { 
				let field = {type:'text',required:false}
				
  				if(f.type == 'autoNumber') return 
				if(f.type == 'email') field = {type:'email',required:true}
				if(f.type == 'phoneNumber') field = {type:'tel',required:false}
				if(f.type == 'multilineText') field = {type:'textarea',required:false}
				if(f.type == 'singleSelect') field = {type:'select',required:false}
				if(f.type == 'checkbox') field = {type:'checkbox',required:false}
  				
				if(field.type == 'select') field.options = f.options.choices.map(o => o.name)
  				if(field.type == 'checkbox') field.options = [f.description || f.name]
  				if(!field.type == 'checkbox') field.label = f.name
				  
  				fields.push({...field,name:f.name})
			})
			forms.value[item.id] = fields
		})
	}
	

	return {
		pages,
		navigation,
		previews,
		forms,
		ready,
		loaded,
		units,
		LOADING,
		PAGE,
		FORMS
	}
})