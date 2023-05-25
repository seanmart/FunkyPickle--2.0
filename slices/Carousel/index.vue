<template>
  <Section :id="id" :header="primary.label" :data-section="primary.label">
    <Splide :options="options" :class="classes.container" :has-track="false">
      
      <SplideTrack>
        <SplideSlide v-for="slide,i in items" :key="i" :class="classes.slide.container">
          <Media v-if="slide.media.url" :src="slide.media.url" :class="classes.slide.media" :distance="index % 2 == 0 ? 60 : 40"/>
          <div v-if="hasContent(slide)" :class="classes.slide.content.container">
            <h3 v-if="slide.title" :class="classes.slide.content.h3">{{ slide.title }}</h3>
            <h5 v-if="slide.subtitle" :class="classes.slide.content.h5">{{ slide.subtitle }}</h5>
            <PrismicRichText v-if="slide.body.length" :field="slide.body" :class="classes.slide.content.text"/>
          </div>
        </SplideSlide>
      </SplideTrack>
      
    </Splide>
  </Section>
</template>

<script setup>
  import { Splide,SplideSlide,SplideTrack } from '@splidejs/vue-splide';
  import {useStore} from '@/stores'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  
  const options = {
      perPage: items.length > 2 ? 3 : 1,
      perMove: 1,
      gap:1,
      resetProgress:false,
      autoplay: true,
      rewind:true,
      type: 'slide',
      drag: items.length == 2 || items.length > 3,
      breakpoints:{
        [store.units.wide - 1]:{
          perPage:items.length > 1 ? 2 : 1,
          type: 'loop', 
          drag: items.length > 2
        },
        1200:{
          perPage:1,
          type: 'loop', 
          drag: items.length > 1
        }
      }
  }
  
  console.log(options)
  
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