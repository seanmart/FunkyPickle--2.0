export default async function(base, baseURL){
	
	const res = await $fetch(`${baseURL}/.netlify/functions/get-forms`,{
		method:'POST',
		headers:{ "Content-Type": "application/json" },
		body:JSON.stringify({base})
	 })
	 
	let forms = {}
	
	if(res){
		res.forEach(item =>{

			const form = []
			
			item.fields.forEach(field => {
				if(field.type == 'autoNumber') return  
		        let type = 'text' 
		        let required = false
		        let options = []
		        let name = field.name
		        let label = field.name
		        if(field.type == 'email') (type = 'email', required = true)
		        if(field.type == 'phoneNumber') (type = 'tel', required = true)
		        if(field.type == 'multilineText') type = 'textarea'
		        if(field.type == 'singleSelect')(type = 'select', options = field.options.choices.map(o => o.name))
		        if(field.type == 'checkbox')(type = 'checkbox', options.push(field.description || field.name), label = null)
		        
		        form.push({type,required,options,name,label})
			})
			
			if(form.length) forms[item.id] = form
		})
	}
	
	return forms

}