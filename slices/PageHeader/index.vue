<template>
  <header class="page-header" :class="classes.container">
    <div class="page-header--content" :class="classes.wrapper">
      <RichText :text="primary.title" :class="classes.title"/>
      <div class="page-header--media" :class="classes.media.container">
        <Media :class="classes.media.media" :src="primary.background.url" :distance="200" :scale="1.05"/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useStore } from '@/stores'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice','index'])
  const {primary} = props.slice
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>

<style>
  .page-header strong{
    color: theme('colors.fp-lime');
  }
</style>