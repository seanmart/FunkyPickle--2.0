<template>
  <div class="margins gutters">
    <Carousel v-if="store.previews && slice.primary.isCarousel"/>
    <List v-else-if="store.previews && !slice.primary.isCarousel"/>
  </div>
</template>

<script setup>
  import {useStore} from '@/stores'
  import Carousel from './Carousel'
  import List from './List'
  
  const props = defineProps(['slice'])
  const {client} = usePrismic()
  const store = useStore()
  
  if(!store.previews.length){
    const fetch = ['event.logo','event.background','event.name','event.location','event.start','event.end','event.secondaryColor']
    const orderings = ['event.start']
    const {data} = await useAsyncData(()=>client.getAllByType('event',{fetch,orderings}))
    if(data.value) store.PREVIEWS(data.value)
  }
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))

</script>

<style>
 
</style>