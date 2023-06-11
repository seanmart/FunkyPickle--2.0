import { defineStore } from 'pinia'
import config from '@/tailwind.config.js'
import {arrayHasEmptyObject} from '@/helpers'

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
		wide: parseInt(config.theme.screens.w),
		margins: {
			wide: parseInt(config.theme.width.wide),
			narrow: parseInt(config.theme.width.narrow)
		}
	}
	
	//ACTIONS
	
	function LOADING(loading){
		pending += loading ? 1 : -1
		if(!pending) loaded.value = Date.now()
	}
	
	function PAGE(data,path){
		let margins = data.margins ? 'wide' : 'narrow'
		let section = null
		let slices = []
		let navbar = []

		data.slices.forEach(slice => {
			let {primary,slice_type,items} = slice
			
			if(primary.hide) return
			if(arrayHasEmptyObject(items)) items = []
			
			if(slice_type == 'section'){
				section && slices.push(section)
				let id = primary.label.replace(/\s+/g, '-').toLowerCase()
				let label = primary.label
				navbar.push({id:`#${id}`,label})
				section = {id,label,slices:[]}
			}
			
			if(section) section.slices.push({primary,items,slice_type})
			if(!section) slices.push({primary,items,slice_type})
		})
		
		section && slices.push(section)
		pages.value[path] = {...data,slices,margins,navbar}
		console.log(path,pages.value[path])
	}
	
	function PREVIEWS(events){
		events.forEach(event => {
			previews.value.push({
				...event.data,
				link:`/events/${event.uid}`,
			    uid: event.uid
			})
		})
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
  				if(field.type != 'checkbox') field.label = f.name
				field.name = f.name

  				fields.push(field)
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
		PREVIEWS,
		FORMS
	}
})