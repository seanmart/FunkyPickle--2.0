<template>
  <Section :class="classes.container" :data-section="primary.section">
    <div :class="classes.wrapper" ref="container">
      
      <div v-for="item,i in galleryItems" :key="i" :class="classes.media.container">
        <div :class="classes.media.wrapper">
          <Media absolute :class="classes.media.media" :src='item.media' :distance="i % 2 == 0 ? 80 : 60"/>
        </div>
      </div>
      
    </div>
  </Section>
</template>

<script setup>
  import {useStore} from '@/stores'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  
  const galleryItems = items.map(item => ({
    media: item.media.url,
    text: item.description
  }))
  
  store.LOADING(true)  
  onMounted(()=>store.LOADING(false))
  
</script>

<style>
  
  .gallery-item-media{
    transition: opacity .25s;
  }
  .gallery-item:hover .gallery-item-media{
    opacity: .4;
  }
  
  .gallery-splide-track{
    height: calc(100% - 3rem)
  }
  
  
</style>