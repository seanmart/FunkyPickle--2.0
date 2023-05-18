<template>
  <Section class="s-text-header">
    <div ref="container">
      <h1 ref="header" class="font-header inline-block tracking-tight">{{primary.header}}</h1>
    </div>
  </Section>
</template>

<script setup>
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  import config from '@/tailwind.config.js'
  
  const header = ref()
  const container = ref()
  let ratio = 0
  let width = parseInt(config.theme.screens.s)
  
  function handleResize(){
    let percent = window.innerWidth < width ? 1 : .5
    let size = (container.value.offsetWidth * percent) * ratio
    header.value.style.fontSize = `${size}px`;
  }
  
  onMounted(()=>{
    ratio = header.value.offsetHeight / header.value.offsetWidth
    window.addEventListener('resize',handleResize)
    handleResize()
  })
</script>
