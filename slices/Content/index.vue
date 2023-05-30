<template>
  <section class="section" :data-section="primary.section">
    <RichText v-for="item in items" :text="item.text" class="w:max-w-3/4"/>
  </section>
</template>

<script setup>
  import { useStore } from '@/stores'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>