<template>
    <section :class="classes.container(header)">

        <div :class="classes.header.container" v-if="header">
            <div :class="classes.header.wrapper">
                <h3 :class="classes.header.label">{{header}}</h3>
            </div>
        </div>

        <div :class="[contentClass,classes.content(header)]">
            <slot/>
        </div>

    </section>
</template>

<script setup>
    import classes from './classes'
    
    const props = defineProps({
      reverse:Boolean,
      header:String,
      contentClass:[String,Object,Array]
    })
    
</script>

<style lang="css">
  
  /* .c-section.has-section-header{
    display: flex;
    flex-direction: column;
  } */
  
  /* .c-section:last-child{
    padding-bottom: theme('spacing.5');
  } */
  
  /* .c-section .c-section-sticky{
    top: 0;
  } */
  
  @media screen and (min-width: theme('screens.m')){
    
    /* .c-section.has-section-header{
      flex-direction: row;
      align-items: flex-start;
    } */
    
    /* .c-section.has-section-header:nth-child(odd){
      flex-direction: row-reverse;
    } */
    
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