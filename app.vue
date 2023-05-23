<template>
  <div id="app" class="pt-nav-y m:pt-0 m:pl-nav-x">
    <Navigation/>
    <NuxtPage id="page"/>
    <Footer/>
    <Columns/>
    <section id="transition" class="hidden fixed inset-0 z-9 bg-fp-lime"/>
  </div>
</template>

<script setup>
  import {checkClipPath,has} from '@/helpers'
  
  onMounted(()=>{
    let timeout = null
    let width = window.innerWidth
    
    if(checkClipPath()){
      document.documentElement.classList.add('has-clip-path')
    }
    
    window.addEventListener('resize',()=>{
      if(width == window.innerWidth) return
      timeout && clearTimeout(timeout)
      document.documentElement.classList.add('is-resizing')
      width = window.innerWidth
      timeout = setTimeout(()=>document.documentElement.classList.remove('is-resizing'),250)
    })
  })

</script>
<style>
  .is-resizing * {
    transition: none !important;
  }
  
</style>