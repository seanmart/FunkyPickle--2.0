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
  const props = defineProps(['slice','index'])
  const {id,primary,items} = props.slice
  const events = ref([])
  
  if(items.length){
    events.value = items.reduce((a,i) => {
      let item = store.previews.find(p => p.uid == i.event.uid)
      return item ? [...a,item] : a
    },[])
  } else {
    events.value = store.previews
  }
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>

<style lang="css">
  
</style>