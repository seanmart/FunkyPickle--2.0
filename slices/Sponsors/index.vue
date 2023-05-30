<template>
  <Section v-if="sponsors.length > 0" :header="primary.noHeader ? null : primary.section" :data-section="primary.section">
    <div :class="classes.container">
      <template v-for="sponsor,i in sponsors">
      <div v-if="sponsor.logo.url" :key="i" :class="classes.wrapper">
        <img :src="sponsor.logo.url" :alt="sponsor.logo.alt" :class="classes.image">
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
  const sponsors = items.filter(i => i.logo.url)
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>