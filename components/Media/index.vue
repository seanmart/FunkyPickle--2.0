<template>
   
   <div v-if="isImage(src) && background" :class="classes.image" :style="{backgroundImage:`url(${src})`}"/>
   <img v-else-if="isImage(src) && !background" :src="src">
   
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
    import {useStore} from '@/stores'
    import {storeToRefs} from 'pinia'
    
    const store = useStore()
    const video = ref(null)
    const {loaded} = storeToRefs(store)
    
    const props = defineProps({
        src:{type:String,default:null},
        autoplay:{type:Boolean,default:false},
        loop:{type:Boolean,default:false},
        muted:{type:Boolean,default:false},
        playsinline:{type:Boolean,default:false},
        controls:{type:Boolean,default:false},
        background:{type:Boolean,default:false}
    })
    
    let trigger = null
    
    store.LOADING(true)
    
    watch(loaded,toggleVideo)
    
    onMounted(()=>{
       if(video.value){
          video.value.readyState >= 3
          ? store.LOADING(false)
          : video.value.addEventListener('loadeddata',handleVideo)
       } else {
          store.LOADING(false)
       }
    })
    
    onUnmounted(()=>{
       trigger && trigger.kill()
    })
    
    function handleVideo(){
       store.LOADING(false)
       video.value.removeEventListener('loadeddata',handleVideo)
    }
    
    function toggleVideo(){
       if(video.value && (props.background || props.autoplay)){
           trigger = ScrollTrigger.create({
              trigger: video.value,
              start: 'top bottom',
              end: 'bottom top',
              onToggle:({isActive})=> isActive ? video.value.play() : video.value.pause()
           })
        }
    }
    

</script>

<style lang="css">

</style>