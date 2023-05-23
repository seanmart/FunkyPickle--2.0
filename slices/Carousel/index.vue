<template>
  <Section :id="id" :header="primary.label" class="s-carousel" :data-section="primary.label">
    <Splide :options="options" class="bg-outline bordered border-outline shadowed" :has-track="false">
      
      <SplideTrack>
        <SplideSlide v-for="slide,i in items" :key="i" class="bg-white min-h-10">
          <Media v-if="slide.media.url" :src="slide.media.url" class="h-25 s:h-14 bg-slate-100" :distance="index % 2 == 0 ? 60 : 40"/>
          <div v-if="hasContent(slide)" class="splide__content select-none">
            <h3 v-if="slide.title" class="font-header text-1.8">{{ slide.title }}</h3>
            <h5 v-if="slide.subtitle" class="text-slate-500 text-0.9 italic mt-0.7">{{ slide.subtitle }}</h5>
            <PrismicRichText v-if="slide.body.length" :field="slide.body" class="mt-1 text-0.8"/>
          </div>
        </SplideSlide>
      </SplideTrack>
      
    </Splide>
  </Section>
</template>

<script setup>
  import { Splide,SplideSlide,SplideTrack } from '@splidejs/vue-splide';
  import config from '@/tailwind.config.js'
  import {useStore} from '@/stores'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  const breakpoint = parseInt(config.theme.screens.d)
  const options = {
      perPage: items.length > 1 ? 2 : 1,
      perMove: 1,
      gap:1,
      breakpoints:{
        [breakpoint]:{
          perPage:1,
          type: 'loop', 
          drag: items.length > 1
        }
      },
      resetProgress:false,
      autoplay: true,
      rewind:true,
      type: 'slide',
      drag: items.length > 2
  }
  
  function hasContent(s){
    if(s.title) return true 
    if(s.subtitle) return true 
    if(s.body.length > 0) return true
    if(s.link.url) return true
    return false 
  }
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>

<style lang="css">

</style>