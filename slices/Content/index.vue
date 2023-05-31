<template>
  <section class="section" :data-section="primary.section">
      <RichText :text="primary.text" class="max-w-55"/>
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