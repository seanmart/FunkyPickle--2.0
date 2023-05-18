<template>
  <div id="app" class="relative">
    <Navigation/>
    <NuxtPage/>
    <Footer/>
    <Columns/>
    <Modal/>
    <section id="transition" class="hidden fixed inset-0 z-9 bg-fp-lime"/>
  </div>
</template>

<script setup>
  import {checkClipPath} from '@/helpers'
  import {usePagesStore} from '@/stores/pages'
  import {getParams} from '@/helpers'
  
  const store = usePagesStore()
  await store.FETCH()

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
  
  #__nuxt{
    position: relative;
  }
  
  @media screen and (min-width:theme('screens.m')){
    #__nuxt{
      padding-left: theme('spacing.nav-x')
    }
  }
  
  @media screen and (max-width:theme('screens.m-max')){
    #__nuxt{
      padding-top: theme('spacing.nav-y')
    }
  }
</style>