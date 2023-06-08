<template>
  <div class="margins gutters">
    
    <!-- CAROUSEL -->
    <div class="flex flex-col m:flex-row select-none" ref="container">
      
      <Splide ref="images" :options="{...options,...imageOptions}" class="flex-none m:w-1/2 relative" :has-track="false">
        <SplideTrack class="h-full">
          <template v-for="item in store.previews">
            <SplideSlide class="relative p-3 flex-center h-full">
              <img v-if="item.logo" class="w-full h-auto relative z-1 max-w-18" :src="item.logo.url" :alt="item.logo.alt">
              <Media v-if="item.background.url" :src="item.background.url" class="absolute h-full w-full" background/>
            </SplideSlide>
          </template>
        </SplideTrack>
        <div class="splide__progress absolute left-0 bottom-0 right-0">
          <div class="splide__progress__bar h-0.5 bg-fp-pink"/>
        </div>
      </Splide>
      
      <Splide ref="info" :options="options" class="flex-none m:w-1/2">
        <template v-for="item in store.previews">
          <SplideSlide class="flex-middle py-3 m:pl-3">
              <div>
                <h5 :class="[headingClasses.small, headingClasses.bar]">{{item.location}}</h5>
                <h2 :class="headlineClasses.noSize" class="my-3 text-2.6 m:text-2.8 l:text-3 d:text-3.4 hover:underline decoration-4 underline-offset-4">
                  <nuxt-link :to="item.link">{{item.name}}</nuxt-link>
                </h2>
                <h5 :class="headingClasses.small">{{date(item.start)}} - {{date(item.end)}}</h5>
              </div>
          </SplideSlide>
        </template>
      </Splide>
      
    </div>
    
    
    <!-- LIST  -->
    
  </div>
</template>

<script setup>
  import { Splide,SplideSlide,SplideTrack } from '@splidejs/vue-splide';
  import {headingClasses,headlineClasses} from '@/globalClasses'
  import {formatDate} from '@/helpers'
  import {useStore} from '@/stores'
  
  const props = defineProps(['slice','margins'])
  const {client} = usePrismic()
  const store = useStore()
  const images = ref(null)
  const info = ref(null)
  const container = ref(null)
  
  if(!store.previews.length){
    const fetch = ['event.logo','event.background','event.name','event.location','event.start','event.end']
    const orderings = ['event.start']
    const {data} = await useAsyncData(()=>client.getAllByType('event',{fetch,orderings}))
    if(data.value) store.PREVIEWS(data.value)
  }
  
  const options = {
    type:'loop',
    gap:1,
    pagination: false,
    arrows: false
  }
  
  const imageOptions = {
    pauseOnFocus: false,
    pauseOnHover: false,
    resetProgress: false,
    autoplay:true,
    interval: 7000
  }
  
  store.LOADING(true)
  onMounted(()=>{
    syncSplides()
    store.LOADING(false)
  })
  
  function syncSplides(){
    images.value.splide.sync(info.value.splide)
    
    container.value.addEventListener('mouseenter',handleMouseEnter)
    container.value.addEventListener('mouseleave',handleMouseLeave)
    
  }
  
  function handleMouseEnter(){
    images.value.splide.Components.Autoplay.pause()
  }
  
  function handleMouseLeave(){
    images.value.splide.Components.Autoplay.play()
  }
  
  function date(d){
    return formatDate(d,'mmmm dd, yyyy')
  }

</script>

<style>
 
</style>