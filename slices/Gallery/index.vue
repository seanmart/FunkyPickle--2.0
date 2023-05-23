<template>
  <Section :id="id" class="s-gallery relative z-9" :data-section="primary.label">
    <div class="flex flex-wrap" ref="container">
      
      <div v-for="item,i in galleryItems" :key="i" class="gallery-item w-1/2 s:w-1/3 relative bordered border-outline">
        <div class="gallery-item-sizer w-full pb-full bg-slate-900">
          <Media class="gallery-item-media absolute inset-0" :src='item.media' :distance="i % 2 == 0 ? 80 : 60"/>
        </div>
      </div>
      
    </div>
  </Section>
</template>

<script setup>
  import {useStore} from '@/stores'
  
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