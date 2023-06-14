<template>
  <div id="app" class="relative z-1 pt-nav-y t:pt-0 t:pl-nav-x">
    <Navigation/>
    <NuxtPage class="min-h-screen"/>
    <Footer/> 
    <section id="transition" class="fixed inset-0 z-9 bg-secondary transition-colors duration-200 dark:bg-slate-700"/>
  </div>
</template>

<script setup>
  import {useStore} from '@/stores'
  import {storeToRefs} from 'pinia'

  const route = useRoute()
  
  onBeforeMount(()=>{
    initResize()
    checkMobile()
  })
  
  function initResize(){
    let timeout = null
    let width = window.innerWidth
    window.addEventListener('resize',()=>{
      if(width != window.innerWidth){
        width = window.innerWidth
        timeout && clearTimeout(timeout)
        document.documentElement.classList.add('is-resizing')
        timeout = setTimeout(()=>document.documentElement.classList.remove('is-resizing'),250)
      }
    })
  }
  
  function checkMobile(){
    let { userAgent, maxTouchPoints, platform } = navigator
    let conditional = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    window.isMobile = conditional.test(userAgent) || (platform === "MacIntel" && maxTouchPoints > 1);
    document.documentElement.classList.add(window.isMobile ? 'is-mobile' : 'is-desktop')
  }

</script>
<style>
  .is-resizing * {
    transition: none !important;
  }
  
</style>