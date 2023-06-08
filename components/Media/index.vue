<template>
   
   <div v-if="isImage(src)" :class="classes.image" :style="{backgroundImage:`url(${src})`}"/>
   
   <video 
    v-else-if="isVideo(src)" 
    ref="video" 
    :class="classes.video" 
    :autoplay="autoplay || background" 
    :loop="loop || background" 
    :muted="muted || background" 
    :playsinline="playsinline || background" 
    :controls="controls"
    >
       <source :src="src"/>
   </video>
   
</template>

<script setup>
    import {isVideo,isImage} from '@/helpers'
    import classes from './classes'
    
    const props = defineProps({
        src:{type:String,default:null},
        autoplay:{type:Boolean,default:false},
        loop:{type:Boolean,default:false},
        muted:{type:Boolean,default:false},
        playsinline:{type:Boolean,default:false},
        controls:{type:Boolean,default:false},
        background:{type:Boolean,default:false}
    })

</script>

<style lang="css">

</style>