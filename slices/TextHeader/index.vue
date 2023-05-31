<template>
  <header :class="classes.container">
    <div ref="container">
      <h1 ref="header" class="font-header font-bold leading-0.72 inline-block overflow-hidden whitespace-nowrap opacity-0">
        <span class="inline-block tracking-tight" v-for="l in primary.header.split('')">{{l || ' '}}</span>
      </h1>
    </div>
  </header>
</template>

<script setup>
  import {useStore} from '@/stores'
  import {storeToRefs} from 'pinia'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const header = ref()
  const container = ref()
  const {primary} = props.slice
  const{ready} = storeToRefs(store)
  
  let ratio = 0
  let size = 0
  
  store.LOADING(true)
  
  watch(ready,()=>{
    gsap.timeline()
    .set(header.value.children,{y:'101%'})
    .set(header.value,{opacity:1})
    .to(header.value.children,{duration: 1, stagger: .05, y: 0, ease:'expo.out'})
    .set(header.value.children,{clearProps:'all'})
  })
  
  function resize(){
    let ww = window.innerWidth
    let percent = ww < store.units.mobile ? .75 : ww < store.units.tablet ? .5 : .333
    let offset = container.value.offsetWidth * percent - header.value.offsetWidth
    size += offset * ratio
    header.value.style.fontSize = `${size}px`;
  }
  
  function initialResize(count){
    window.requestAnimationFrame(()=>{
      resize()
      count ? initialResize(count - 1) : store.LOADING(false)
    })
  }
  
  onMounted(()=>{
    ratio = header.value.offsetHeight / header.value.offsetWidth
    window.addEventListener('resize',resize)
    initialResize(5)
  })
  
  onUnmounted(()=>{
    window.removeEventListener('resize',resize)
  })
</script>

<style>

</style>