<template>
	<div :class="carousel.container">
		<Splide ref="images" :class="carousel.images.container" :options="imageOptions" :has-track="false">
		  <SplideTrack :class="carousel.images.track">
			<SplideSlide v-for="event,i in events" :key="i" :class="carousel.images.slide">
			  <Media :class="carousel.images.media" :src="event.background.url" :distance="50"/>
			  <img :src="event.logo.url" :class="carousel.images.logo">
			</SplideSlide>
		  </SplideTrack>
		</Splide>
		
		<Splide ref="info" :class="carousel.info.container" :options="infoOptions" :has-track="false">
		  <SplideTrack :class="carousel.info.track">
			<SplideSlide :class="carousel.info.slide" v-for="event,i in events" :key="i">
				<h5 :class="text.h5">{{formatDate(event.start,'mmmm dd, yyyy')}}</h5>
				<h2 :class="text.h2">{{event.name}}</h2>
				<nuxt-link :class="text.link" :to="event.route">View Event</nuxt-link>
			</SplideSlide>
		  </SplideTrack>
		</Splide>
		
	</div>
</template>

<script setup>
	import {formatDate} from '@/helpers'
	import {carousel,text} from './classes'
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