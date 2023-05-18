<template>
	<div class="flex flex-col s:flex-row bordered border-outline shadowed">
		<Splide ref="images" class="w-full s:w-1/3 d:w-1/2 bg-slate-100 h-20 d:h-24" :options="imageOptions" :has-track="false">
		  <SplideTrack class="h-full">
			<SplideSlide v-for="event,i in events" :key="i" class="h-full flex-center relative select-none">
			  <Media class="absolute inset-0" :src="event.background.url" />
			  <img :src="event.logo.url" class="h-auto w-auto max-w-3/4 d:max-w-3/5 max-h-3/5 relative z-1">
			</SplideSlide>
		  </SplideTrack>
		</Splide>
		
		<Splide ref="info" class="w-full s:w-2/3 d:w-1/2 flex flex-col bg-white" :options="infoOptions" :has-track="false">
		  <SplideTrack class="flex-auto">
			<SplideSlide class="splide__content flex-middle" v-for="event,i in events" :key="i">
			  <div>
				<h5 class="font-label text-0.8 text-slate-400 select-none mb-1">{{formatDate(event.start,'mmmm dd, yyyy')}}</h5>
				<h2 class="font-header text-3 select-none mb-2">{{event.name}}</h2>
				<nuxt-link class="btn bg-fp-pink text-white font-header font-normal" :to="event.route">View Event</nuxt-link>
			  </div>
			</SplideSlide>
		  </SplideTrack>
		</Splide>
		
	</div>
</template>

<script setup>
	import {formatDate} from '@/helpers'
	import { Splide,SplideSlide,SplideTrack } from '@splidejs/vue-splide';
	
	const props = defineProps({events:Array})
	const images = ref()
	const info = ref()
	const interval = 8000
	const speed = 500
  	
	const imageOptions = {
		speed,
		pagination: false,
		arrows: false,
		rewind:true,
		type:'fade'
	}
  	
	const infoOptions = {
		interval,
		speed,
		resetProgress:false,
		autoplay: true,
		rewind:true,
		type:'slide',
		drag: props.events.length > 1
	}
	
	onMounted(()=>{
		if (info.value && images.value){
			info.value.splide.sync(images.value.splide)
			watch(props,()=>nextTick(info.value.splide.Components.Autoplay.play))
		}
	})
</script>

<style scoped></style>