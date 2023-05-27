<template>
  <Section v-if="inputs" :id="id" :header="primary.label" :data-section="primary.label">
    <div :class="classes.container">
      
      <div v-if="primary.description.length" :class="classes.description" >
        <RichText :text="primary.description"/>
      </div>
      
      <div :class="classes.content">
        
        <FormKit type="form" #default="{ disabled }" @submit="handleSubmit" :submit-attrs="{inputClass:`${classes.submit} ${busy ? 'busy' : ''}`}">
          <div :class="classes.form">
            
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
  import classes from './classes'
  
  const config = useRuntimeConfig()
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,id} = props.slice
  const inputs = ref(null)
  const busy = ref(false)
  const status = ref(null)
  
  store.LOADING(true)
  
  const params = primary.airtable.replace('https://airtable.com/','').split('/')
  const table = params.length > 1 ? params[1] : null 
  if (table) inputs.value = store.forms[table]
  
  async function handleSubmit(data){
    busy.value = true
    const fields = Object.keys(data).reduce((a,c)=>({...a,[c]: Array.isArray(data) ? data[c][0] : data[c]}),{})
    const res = await $fetch(`${config.public.baseURL}/.netlify/functions/post-form`,{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({fields,base,table,view})
    })
    status.value = res ? 'success' : 'error'
    busy.value = false
  }
  
  onMounted(()=>store.LOADING(false))
  
</script>