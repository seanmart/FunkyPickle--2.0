<template>
  <section class="content-s section" :data-section="primary.section">
      <RichText :text="primary.text" class="max-w-40"/>
  </section>
</template>

<script setup>
  import { useStore } from '@/stores'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary} = props.slice
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>

<style>
  .content-s .rich-text h2 strong,
  .content-s .rich-text h3 strong{
    display: inline;
    background: theme('colors.fp-lime');
  }
</style>