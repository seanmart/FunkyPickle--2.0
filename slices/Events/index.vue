<template>
  <Section :id="id" :data-section="primary.label">
      <template v-if="events.length > 0">
        <EventsCarousel v-if="primary.carousel" :events="events"/>
        <EventsList v-else :events="events"/>
      </template>
      <EventsEmpty v-else/>
  </Section>
</template>

<script setup>
  import { useStore } from '@/stores'
  
  const store = useStore()
  const {client} = usePrismic()
  const props = defineProps(['slice','index'])
  const {id,primary,items} = props.slice
  const events = ref([])
  
  store.LOADING(true)
  
  if (!store.previews.length){
    const fetch = ['event.logo','event.background','event.name','event.start','event.end']
    const orderings = ['event.start']
    const {data} = await useAsyncData(()=>client.getAllByType('event',{fetch,orderings}))
    if(data.value){
	  data.value.forEach(event => {
	    let uid = event.uid
	    let data = event.data 
	    let route = `/events/${uid}`
	    store.previews.push({...data,route,uid})
	  })
    }
  }
  
  if(items.length){
    items.forEach(item => {
      let event = store.previews.find(p => p.uid == item.event.uid)
      event && events.value.push(event)
    })
  } else {
    events.value = store.previews
  }
  
  onMounted(()=>store.LOADING(false))
  
</script>

<style lang="css">
  
</style>