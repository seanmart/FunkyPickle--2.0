<template>
  <div id="app" class="pt-nav-y t:pt-0 t:pl-nav-x relative z-1">
    <Navigation/>
    <NuxtPage/>
    <Footer/>
    <section id="transition" class="hidden fixed inset-0 z-9 bg-fp-lime dark:bg-slate-700"/>
  </div>
</template>

<script setup>
  
  const route = useRoute()

  onMounted(()=>{
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
  })

</script>
<style>
  .is-resizing * {
    transition: none !important;
  }
  
</style>