<template>
  <Section :id="id" :header="primary.label" :data-section="primary.label">
    <div :class="classes.container">
      <template v-for="item,i in items">
      <div v-if="item.logo.url" :key="i" :class="classes.wrapper">
        <img :src="item.logo.url" :alt="item.logo.alt" :class="classes.image">
      </div>
      </template>
    </div>
  </Section>
</template>

<script setup>
  import { useStore } from '@/stores'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>