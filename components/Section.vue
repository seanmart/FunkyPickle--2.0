<template>
    <section class="c-section px-gutters pt-5" :class="{'has-section-header':header}">

        <div class="c-section-sticky s:w-1/3 sticky z-5 select-none" v-if="header">
            <div class="bg-fp-lime bordered border-outline h-4 s:h-7 flex-center">
                <h3 class="font-header text-2" v-html="header"/>
            </div>
        </div>

        <div class="c-section-content relative" :class="[contentClass,{'s:w-2/3':header}]">
            <slot/>
        </div>

    </section>
</template>

<script setup>
    import { useLoadingStore } from '@/stores/loading'
    const store = useLoadingStore()
    
    const props = defineProps({
      reverse:Boolean,
      header:String,
      contentClass:[String,Object,Array]
    })
    
    store.LOADING(true)
    onMounted(()=>store.LOADING(false))
    
</script>

<style lang="css">
  
  .c-section.has-section-header{
    display: flex;
    flex-direction: column;
  }
  
  .c-section:last-child{
    padding-bottom: theme('spacing.5');
  }
  
  .c-section .c-section-sticky{
    top: 0;
  }
  
  @media screen and (min-width: theme('screens.s')){
    
    .c-section.has-section-header{
      flex-direction: row;
      align-items: flex-start;
    }
    
    .c-section.has-section-header:nth-child(odd){
      flex-direction: row-reverse;
    }
    
  }
  
  @media screen and (max-width: theme('screens.m-max')){
    .c-section .c-section-sticky{
      top: theme('spacing.nav-y');
      transition-property: top;
      transition-duration: var(--nav-duration);
    }
    
    .nav-is-hidden .c-section .c-section-sticky{
      top:0;
    }
  }

</style>