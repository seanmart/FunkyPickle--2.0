<template>
  <Section :id="id" class="s-text-header">
    <div ref="container" class="text-center s:text-left">
      <h1 ref="header" class="font-header inline-block tracking-tight overflow-hidden">
        <span data-enter="" v-for="l in primary.header.split('')">{{l || ' '}}</span>
      </h1>
    </div>
  </Section>
</template>

<script setup>
  import {useStore} from '@/stores'
  import {storeToRefs} from 'pinia'
  import config from '@/tailwind.config.js'
  
  const props = defineProps(['slice','index'])
  const {primary,id} = props.slice
  const store = useStore()
  const{ready} = storeToRefs(store)
  const header = ref()
  const container = ref()
  
  let ratio = 0
  let width = parseInt(config.theme.screens.s)
  let size = 0
  
  store.LOADING(true)
  
  function resize(){
    let percent = window.innerWidth < width ? 1 : .5
    let offset = container.value.offsetWidth * percent - header.value.offsetWidth
    size += offset * ratio
    header.value.style.fontSize = `${size}px`;
  }
  
  watch(ready,()=>{
    gsap.to(header.value.children,{duration: 1, stagger: .05, y: 0, ease:'expo.out'})
  })
  
  onMounted(()=>{
    ratio = header.value.offsetHeight / header.value.offsetWidth
    window.addEventListener('resize',resize)
    
    function initResize(count){
      window.requestAnimationFrame(()=>{
        resize()
        count 
        ? initResize(count - 1)
        : store.LOADING(false)
      })
    }
    
    initResize(5)
    
  })
</script>

<style>
  .s-text-header h1{
    line-height: .75;
    white-space: nowrap;
  }
  .s-text-header h1 span{
    display: inline-block;
    transform: translateY(101%);
  }
</style>