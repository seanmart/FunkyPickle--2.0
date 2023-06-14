<template>
  <h2 
    v-if="type != 'Invisible'"
    :class="typeClasses"
    class="mb-2 margins gutters"
    >
    {{slice.primary.label}}
  </h2>
</template>

<script setup>
  import {headingClasses,headlineClasses} from '@/globalClasses'
  import {useStore} from '@/stores'
  
  const store = useStore()
  const props = defineProps(['slice'])
  const type = props.slice.primary.type
  
  let typeClasses = ''
  if(type == 'Small') typeClasses = `${headingClasses.small} ${headingClasses.bar}`
  if(!type || type == 'Large') typeClasses = headlineClasses.heading5 


  store.LOADING(true)
  onMounted(()=> store.LOADING(false))
  
</script>

<style>
  
</style>