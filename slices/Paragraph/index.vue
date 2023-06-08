<template>
  <PrismicRichText 
  ref="container" 
  class="margins gutters"
  :field="slice.primary.text" 
  :htmlSerializer="htmlSerializer"/>
</template>

<script setup>
  import {paragraphClasses} from '@/globalClasses'
  import {useStore} from '@/stores'
  
  const store = useStore()
  const props = defineProps(['slice'])
  const columnClasses = ref('')
  const container = ref(null)
  const htmlSerializer = {
    'heading1':({children})=>`<p class="${paragraphClasses.heading1}">${children}</p>`,
    'heading2':({children})=>`<p class="${paragraphClasses.heading2}">${children}</p>`,
    'heading3':({children})=>`<p class="${paragraphClasses.heading3}">${children}</p>`,
    'heading4':({children})=>`<p class="${paragraphClasses.heading4}">${children}</p>`,
    'heading5':({children})=>`<p class="${paragraphClasses.heading5}">${children}</p>`,
    'heading6':({children})=>`<p class="${paragraphClasses.heading6}">${children}</p>`,
    'paragraph':({children})=>`<p class="${paragraphClasses.paragraph}">${children}</p>`,
  }
  
  onMounted(()=>{
    window.addEventListener('resize',handleResize)
    handleResize()
  })
  
  onUnmounted(()=>{
    window.removeEventListener('resize',handleResize)
  })
  
  function handleResize(){
    let size = parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'))
    let width = container.value.$el.offsetWidth
    columnClasses.value = Math.floor(width / size) > store.units.margins.narrow ? 'columns-2 gap-2' : ''
  }

</script>
