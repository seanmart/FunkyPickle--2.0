import { useStore } from '@/stores'

export default async function(client){
	
	const res = await client.getSingle('settings')	
	let navigation = []
	let base  = ""
	
	if(res.data){
	 base = res.data.airtable
		res.data.links.forEach( item =>{
			if(!item.link.url && !item.link.uid) return
			navigation.push({
				link: item.link.url || item.link.uid == 'home' ? '/' : `/${item.link.uid}`,
				label: item.label, 
				target: item.link.url ? '_blank' : null
			})
		})
	}
	
	return {navigation,base}
}