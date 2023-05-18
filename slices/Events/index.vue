<template>
  <Section :id="id" class="s-events">
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
  import { usePreviewsStore } from '@/stores/previews'
  
  const store = usePreviewsStore()
  const props = defineProps(['slice','index'])
  const {id,primary,items} = props.slice
  const events = ref([])

  if(!store.previews) await useAsyncData(store.FETCH)
  events.value = items.length ? getFilteredPreviews() : store.previews
  
  function getFilteredPreviews(){
    return items.reduce((a,i) => {
      let item = store.previews.find(p => p.uid == i.event.uid)
      return item ? [...a,item] : a
    },[])
  }
  
</script>

<style lang="css">
  
</style>