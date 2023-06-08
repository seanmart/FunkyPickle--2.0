<template>
  <div ref="container" class="overflow-auto snap-x pb-2 no-scrollbar scroll-smooth gutters-scroll">
    <div ref="wrapper" class="gutters-x inline-flex flex-row gap-1 m:gap-2 min-w-full">
      
      <template v-for="item in slice.items">
      
        <div class="flex-auto w-23 m:w-20 min-h-25 border border-slate-200 dark:border-slate-700 snap-start snap-always snap-mandatory flex flex-col">
          <Media :src="item.media.url" class="flex-none h-8" background/>
          <div class="flex-auto p-2 flex flex-col">
            <h5 class="flex-none" :class="[headingClasses.small,headingClasses.bar]" >{{item.header}}</h5>
            <nuxt-link class="block mt-1 flex-auto" v-if="item.link.url" :to="item.link.url">{{item.text}}</nuxt-link>
            <h3 v-else class="block mt-1 flex-auto">{{item.text}}</h3>
            <h5 class="mt-1 flex-none" :class="headingClasses.small" >{{item.footer}}</h5>
          </div>
        </div>
      
      </template>
      
    </div>
  </div>
</template>

<script setup>
  import {headingClasses,units} from '@/globalClasses'
  import {useStore} from '@/stores'
  
  const {path} = useRoute()
  const props = defineProps(['slice'])
  const store = useStore()
  
  const margins = store.pages[path].margins
  const container = ref(null)
  const wrapper = ref(null)
  let busy = false
  
  function handleResize(){
    if (busy) return
    busy = true 
    window.requestAnimationFrame(()=>{
      let size = parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'))
      let offset = (container.value.offsetWidth - store.units.margins[margins] * size) / 2
      
      if(offset > 0){
        offset += units.px * size
        gsap.set(container.value,{scrollPaddingLeft:offset,scrollPaddingRight:offset})
        gsap.set(wrapper.value,{paddingLeft:offset,paddingRight:offset})
      } else {
        gsap.set([container.value, wrapper.value],{clearProps:'all'})
      }
      
      busy = false
    })
  }
  
  store.LOADING(true)
  
  onMounted(()=>{
    store.LOADING(false)
    window.addEventListener('resize',handleResize)
    handleResize()
  })
  onUnmounted(()=>{
    window.removeEventListener('resize',handleResize)
  })
  
</script>
