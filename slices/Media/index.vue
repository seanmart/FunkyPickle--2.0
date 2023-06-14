<template>
  <div class="margins gutters">
    <div :class="[classes.container,{
      'h-35': slice.primary.height == 'Large',
      'h-25': slice.primary.height == 'Medium',
      'h-15': slice.primary.height == 'Small',
      'pt-full': slice.primary.height == 'Square',
      'pt-[56.25%]': slice.primary.height == '16/9'
    }]">
      <Media v-if="!slice.primary.autoplay" :class="classes.media" :src="slice.primary.media.url" controls/>
      <MediaParallax v-else :class="classes.media" :src="slice.primary.media.url"/>
    </div>
  </div>
</template>

<script setup>
  import {useStore} from '@/stores'
  import classes from './classes'
  
  const store = useStore()
  const props = defineProps(['slice'])
  
  store.LOADING(true)
  onMounted(()=> store.LOADING(false))

</script>
