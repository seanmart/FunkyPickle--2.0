<template>
  <Section v-if="sponsors.length > 0" :header="primary.noHeader ? null : primary.section" :data-section="primary.section">
    <div :class="classes.container">
      <template v-for="sponsor,i in sponsors">
      
      <div v-if="sponsor.logo.url" :key="i" :class="classes.box.container(primary.noHeader)">
        <div :class="classes.box.wrapper">
          <div :class="classes.logo.wrapper">
            <img :src="sponsor.logo.url" :alt="sponsor.logo.alt" :class="classes.logo.image">
          </div>
        </div>
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