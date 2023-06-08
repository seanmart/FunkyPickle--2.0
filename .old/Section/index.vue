<template>
    <section :class="classes.container(header)">
        <div :class="classes.wrapper(header)">
            
            <div :class="classes.header.container" v-if="header">
                <div :class="classes.header.wrapper">
                    <h3 :class="classes.header.label">{{header}}</h3>
                </div>
            </div>
            
            <div :class="[contentClass,classes.content(header)]">
                <slot/>
            </div>
            
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


</style>