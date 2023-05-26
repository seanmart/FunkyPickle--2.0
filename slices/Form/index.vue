<template>
  <Section v-if="inputs" :id="id" :header="primary.label" :data-section="primary.label">
    <div :class="classes.container">
      
      <div :class="classes.content.container">
        
        <div v-if="primary.description.length" :class="classes.content.description" >
          <RichText :text="primary.description"/>
        </div>
        
        <FormKit type="form" #default="{ disabled }" @submit="handleSubmit" :submit-attrs="{inputClass:`${classes.submit} ${busy ? 'busy' : ''}`}">
          <div :class="classes.content.form">
            
            <FormKit 
              v-for="input in inputs" 
              :type="input.type"
              :classes="classes[input.type]"
              :name="input.name" 
              :label="input.label" 
              :required="input.required"
              :options="input.options"
            />
            
          </div>
        </FormKit>
      </div>
      
    </div>
  </Section>
</template>

<script setup>
  import { useStore } from '@/stores'
  import mockData from './mockData'
  import classes from './classes'
  
  const config = useRuntimeConfig()
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  const inputs = ref(null)
  const busy = ref(false)
  const status = ref(null)
  
  store.LOADING(true)
  
  //GET DATA
  const params = primary.airtable.replace('https://airtable.com/','').split('/')
  const base = params.length > 0 ? params[0] : null
  const table = params.length > 1 ? params[1] : null 
  const view = params.length > 2 ? params[2] : null
  
  if(!store.forms[table]){
    
    const {data,error} = await useAsyncData(primary.airtable,()=> {
      return $fetch(`${config.public.baseURL}/.netlify/functions/form-GET`,{
        method:'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({base,table,view})
      })
    })
    
    if (data.value){
      console.log(data.value)
      store.forms[table] = []
      data.value.forEach(i => {
        let type = 'text' 
        let required = false
        let options = []
        let name = i.name
        let label = i.name
        
        if(i.type == 'autoNumber') return
        if(i.type == 'email') (type = 'email', required = true)
        if(i.type == 'phoneNumber') (type = 'tel', required = true)
        if(i.type == 'multilineText') type = 'textarea'
        if(i.type == 'singleSelect')(type = 'select', options = i.options.choices.map(o => o.name))
        if(i.type == 'checkbox')(type = 'checkbox', options.push(i.description || i.name), label = null)
        
        store.forms[table].push({type,required,options,name,label})
      })
    }
  }
  
  inputs.value = store.forms[table]
  
  async function handleSubmit(data){
    busy.value = true
    let fields = {} 
    Object.keys(data).forEach(k => {
      fields[k] = Array.isArray(data[k]) ? !!data[k][0] : data[k]
    })
    const res = await $fetch(`${config.public.baseURL}/.netlify/functions/form-POST`,{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({fields,base,table,view})
    })
    status.value = res ? 'success' : 'error'
    busy.value = false
  }
  
  onMounted(()=>store.LOADING(false))
  
</script>