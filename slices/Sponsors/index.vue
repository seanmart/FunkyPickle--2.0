<template>
  <Section :id="id" :header="primary.label" class="s-sponsors">
    <div class="flex flex-wrap">
      <template v-for="item,i in items">
      <div v-if="item.logo.url" :key="i" class="w-1/2 d:w-1/4 h-7 flex-center bordered border-outline bg-white">
        <img :src="item.logo.url" :alt="item.logo.alt" class="max-w-3/5 max-h-3/4 h-auto w-auto">
      </div>
      </template>
    </div>
  </Section>
</template>

<script setup>
  
  const props = defineProps(['slice','index'])
  const {primary,items,id} = props.slice
  
</script>

<style lang="css">

</style>