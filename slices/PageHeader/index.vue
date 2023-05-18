<template>
  <header class="s-page-header px-gutters bg-slate-900 relative">
      <Media class="absolute inset-0" :src="primary.background.url" :class="{'opacity-40':!!primary.title}" :distance="200"/>
      <div class="min-h-25 relative z-1 flex-center">
          <h1 class="font-header uppercase text-3 m:text-4 s:text-5 leading-0.9 text-center max-w-50 text-white" v-if="primary.title">
              <PrismicRichText :field="primary.title"/>
          </h1>
      </div>
  </header>
</template>

<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading'
  
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  const store = useLoadingStore()
  
  store.LOADING(true)
  onMounted(()=>store.LOADING(false))
  
</script>

<style>
  .s-page-header strong{
    color: theme('colors.fp-lime')
  }
</style>