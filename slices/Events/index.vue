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
  import EventsCarousel from './EventsCarousel'
  import EventsList from './EventsList'
  import EventsEmpty from './EventsEmpty'
  import { useStore } from '@/stores'
  
  const store = useStore()
  const {client} = usePrismic()
  
  const props = defineProps(['slice','index'])
  const {id,primary,items} = props.slice
  const events = ref([])

  if(!store.data.previews){
    let orderings = ['event.start']
    let fetch = ['event.logo','event.background','event.name','event.start','event.end']
    const res = await client.getAllByType('event',{fetch, orderings})
    if (res) store.data.previews = res.map(e => ({...e.data,route:`/events/${e.uid}`,uid:e.uid}))
  }
  
  events.value = items.length ? getFilteredPreviews() : store.data.previews
  
  function getFilteredPreviews(){
    return items.reduce((a,i) => {
      let item = store.data.previews.find(p => p.uid == i.event.uid)
      return item ? [...a,item] : a
    },[])
  }
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>

<style lang="css">
  
</style>