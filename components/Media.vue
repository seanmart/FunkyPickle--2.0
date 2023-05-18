<template>
    <div class="c-parallax-image">
        <div ref="container" class="h-full relative overflow-hidden">
            <div ref="media" v-if="isImage(src)" class="bg-cover bg-center absolute inset-0" :style="{...styles,backgroundImage:`url(${src})`}"/>
            <div ref="media" v-if="isVideo(src)" class="absolute inset-0" :style="styles">
                <video ref="video" class="h-full w-full object-cover" autoplay loop muted playsinline>
                    <source :src="src"/>
                </video>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {isVideo,isImage} from '@/helpers'
    const video = ref(null)
    const media = ref(null)
    const container = ref(null)
    const props = defineProps({
        src:{type:String,default:null},
        distance:{type:Number,default:50}
    })
    
    const styles = {}
    
    if(props.distance){
        let reverse = props.distance < 0
        if(!reverse) styles.top = `${props.distance * -1}px`
        if(reverse) styles.bottom = `${-props.distance * -1}px`
    }

    onMounted(()=>{
        if(media.value && props.distance){
            let rect = container.value.getBoundingClientRect()
            gsap.to(media.value,1,{
                y:props.distance,
                ease:'none',
                scrollTrigger:{
                    start: rect.top < window.innerHeight && rect.bottom > 0 ? -1 : 'top bottom',
                    end:'bottom top',
                    trigger: container.value,
                    scrub: true,
                    onToggle: ({isActive})=>{
                        if(!video.value) return 
                        isActive ? video.value.play() : video.value.pause()
                    }
                }
            }) 
        }
    })
</script>

<style lang="css">

</style>