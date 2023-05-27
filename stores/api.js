import { defineStore } from 'pinia'
import { useStore } from '../stores'

export const useAPI = defineStore('api',()=>{
	
	const store = useStore()
	const {client} = usePrismic()
	const config = useRuntimeConfig()
	
	
	async function GET_SETTINGS(){
		
		const res = await client.getSingle('settings')
		if(!res.data) return 

		store.base = res.data.airtable 

		res.data.links.forEach(item => {
			let link = null
			let label = item.label
			let external = !!item.link.url
			
			if(item.link.url) link = item.link.url
			if(!link && item.link.uid) link = `/${item.link.uid || 'home'}`
	
			link && store.navigation.push({link,label,external})
		})
	}
	
	
	async function GET_PREVIEWS(){
		console.log('Ran Get Previews')
		
		const params = {
			fetch: ['event.logo','event.background','event.name','event.start','event.end'],
			orderings: ['event.start']
		}
		const res = await client.getAllByType('event',params)
		if(!res) return
		
		res.forEach(event => {
			let uid = event.uid
			let data = event.data 
			let route = `/events/${uid}`
			store.previews.push({...data,route,uid})
		})
	}
	
	
	async function GET_FORMS(){
		return
		if(!store.base) return
		
		let url = `${config.public.baseURL}/.netlify/functions/get-forms`
		let method = 'POST'
		let headers = { "Content-Type": "application/json" }
		let body = JSON.stringify({base:store.base})

		const res = await $fetch(url,{method,headers,body})
		if(!res) return
		 
		res.forEach(item => {
			let fields = []
			item.fields.forEach(f => { 
				
				if(f.type == 'autoNumber') return 
				
				let field = f.type == 'email' ? {type:'email',required:true}
				          : f.type == 'phoneNumber' ? {type:'tel',required:false}
						  : f.type == 'multilineText' ? {type:'textarea',required:false}
						  : f.type == 'singleSelect' ? {type:'select',required:false}
						  : f.type == 'checkbox' ? {type:'checkbox',required:false}
						  : {type:'text',required:false}
				
				if(field.type == 'select') field.options = f.options.choices.map(o => o.name)
				if(field.type == 'checkbox') field.options = [f.description || f.name]
				if(!field.type == 'checkbox') field.label = f.name
				
				fields.push({...field,name:f.name})
			})
			store.forms[item.id] = fields
		})
	}
	
	
	async function GET_PAGE(type,page,path){
		if(store.pages[path]) return store.pages[path]
		
		const res = await client.getByUID(type,page)
		if(!res.data) return new Error('Page Does Not Exist')
		
		const slices = res.data.slices.filter(s => !s.primary.hide).map(s =>{
			let label = s.primary.label
			let id = label ? label.replace(/\s+/g, '-').toLowerCase() : s.primary.id
			return {...s,id}
		})
		
		store.pages[path] = {...res.data,slices}
		return store.pages[path]
	}
	
	
	return{
		GET_SETTINGS,
		GET_PREVIEWS,
		GET_FORMS,
		GET_PAGE
	}
	
})