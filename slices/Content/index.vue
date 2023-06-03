<template>
  <Section class="content-s" :data-section="primary.section">
      <RichText :text="primary.text"/>
  </Section>
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
  .content-s h2 strong,
  .content-s h3 strong{
    display: inline;
    background: theme('colors.fp-lime');
  }
  .content-s h2 ~ p,
  .content-s h3 ~ p,
  .content-s h4 ~ p{
    margin-top:2rem;
  }
  
</style>