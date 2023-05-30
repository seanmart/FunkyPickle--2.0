<template>
  <Section v-if="form" :header="primary.noHeader ? null : primary.section" :data-section="primary.section">
    <div :class="classes.container">
      <div :class="classes.wrapper">
        
        <div :class="classes.content">
          
          <RichText v-if="primary.description.length" :class="classes.description"  :text="primary.description"/>
          
          <FormKit type="form" #default="{ disabled }" @submit="handleSubmit" :submit-attrs="{inputClass:`${classes.submit} ${busy ? 'busy' : ''}`}">
            <div :class="classes.form">
              
              <FormKit 
                v-for="field in form" 
                :type="field.type"
                :classes="classes[field.type]"
                :name="field.name" 
                :label="field.label" 
                :required="field.required"
                :options="field.options"
              />
      
            </div>
          </FormKit>
          
        </div>
        
      </div>
    </div>
  </Section>
</template>

<script setup>
  import { useStore } from '@/stores'
  import { storeToRefs } from 'pinia'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,id} = props.slice
  const busy = ref(false)
  const status = ref(null)
  const params = primary.airtable.replace('https://airtable.com/','').split('/')
  const base = params.length > 0 ? params[0] : null 
  const table = params.length > 1 ? params[1] : null 
  const form = computed(()=> store.forms ? store.forms[table] : null)
  
  store.LOADING(true)
  
  if(!store.forms){
    store.forms = {}
    const config = useRuntimeConfig()
    const url = `${config.public.baseURL}/.netlify/functions/get-forms`
    const method = 'POST'
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify({base})
    const {data} = await useAsyncData('forms',()=>$fetch(url,{method,headers,body}))
    if (data.value){
      if(!Array.isArray(data.value)) data.value = JSON.parse(data.value)
      store.FORMS(data.value)
    }
  }
  
  async function handleSubmit(data){
    busy.value = true
    const fields = Object.keys(data).reduce((a,c)=>({...a,[c]: Array.isArray(data) ? data[c][0] : data[c]}),{})
    const res = await $fetch(`${config.public.baseURL}/.netlify/functions/post-form`,{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({fields,base,table})
    })
    status.value = res ? 'success' : 'error'
    busy.value = false
  }
  
  onMounted(()=>store.LOADING(false))
  
</script>