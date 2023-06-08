<template>
  <PrismicRichText 
  class="mt-2 -mb-0.5 gutters-x margins"
  :field="slice.primary.text" 
  :htmlSerializer="htmlSerializer"/>
</template>

<script setup>
  import {headlineClasses} from '@/globalClasses'
  
  const props = defineProps(['slice'])
  
  const htmlSerializer = {
    'heading1':({children})=>`<h1 class="${headlineClasses.heading1}">${children}</h1>`,
    'heading2':({children})=>`<h2 class="${headlineClasses.heading2}">${children}</h2>`,
    'heading3':({children})=>`<h3 class="${headlineClasses.heading3}">${children}</h3>`,
    'heading4':({children})=>`<h4 class="${headlineClasses.heading4}">${children}</h4>`,
    'heading5':({children})=>`<h5 class="${headlineClasses.heading5}">${children}</h5>`,
    'heading6':({children})=>`<h6 class="${headlineClasses.heading6}">${children}</h6>`,
  }

</script>
