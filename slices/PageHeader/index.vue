<template>
  <header class="page-header" :class="classes.container" style="--page-header-height:25rem">
    <div v-if="primary.background.url" class="page-header--media" :class="classes.media.container">
      <Media :class="classes.media.media" :src="primary.background.url"/>
    </div>
    <div class="page-header--content" :class="classes.content.container">
        <h1 :class="classes.content.h1" v-if="primary.title">
            <PrismicRichText :field="primary.title"/>
        </h1>
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
  
  .page-header{
    --page-header-height: 25rem;
    height: var(--page-header-height)
  }
  .page-header strong{
    color: theme('colors.fp-lime')
  }
  
  .has-clip-path .page-header{
      clip-path: polygon(0 -250px,100% -250px,100% 100%,0 100%)
  }
  .has-clip-path .page-header--content{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: var(--page-header-height);
      z-index: 1;
  }
  
  .has-clip-path .page-header--media{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: calc(var(--page-header-height) + 250px)
      
  }
  
  @media screen and (min-width: theme('screens.t')){
      .has-clip-path .page-header--content,
      .has-clip-path .page-header--media{
          left: theme('spacing.nav-x');
      }
  }
</style>