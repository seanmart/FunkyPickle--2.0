<template>
	<div class="parallax" v-if="render">
		<div ref="container" class="h-full overflow-hidden relative">
			<Media ref="media" :src="src" background class="h-full w-full"/>
		</div>
	</div>
	<Media v-else ref="media" :src="src" background class="absolute w-full" :style="{top,bottom}"/>
</template>

<script setup>
	const container = ref(null)
	const media = ref(null)
	const props = defineProps({
		distance:{type:Number, default:50},
		scrub:{type:[Number,Boolean], default:true},
		src:{type:String}
	})
	
	const top = props.distance > 0 ? `${-props.distance}px` : '0px'
	const bottom = props.distance < 0 ? `${-props.distance}px` : '0px'
	
	let anim = null
	let render = true
	
	onMounted(()=>{
		render = !window.isMobile
		if(!render) return
		
		anim = gsap.to(media.value.$el,{duration:1, y:props.distance, ease:'none', scrollTrigger:{
			trigger: container.value, 
			start:container.value.getBoundingClientRect().top < window.innerHeight ? 0 : 'top bottom', 
			end:'bottom top', 
			scrub:props.scrub
		}})
	})
	
	onUnmounted(()=>{
		anim && anim.kill()
	})
</script>