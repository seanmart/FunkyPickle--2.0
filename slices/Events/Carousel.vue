<template>
	<div :class="classes.container" ref="container">
		
		<Splide ref="images" :class="classes.image" :options="{...options,...imageOptions}" :style="imageStyles" :has-track="false">
			<SplideTrack class="h-full">
				<SplideSlide v-for="item in store.previews" class="h-full">
				  <Image :item="item" class="h-full m:min-h-20"/>
				</SplideSlide>
			</SplideTrack>
			<div class="splide__progress absolute left-0 bottom-0 right-0">
			  <div class="splide__progress__bar h-0.5 bg-tertiary"/>
			</div>
		</Splide>
		
		<Splide :class="classes.content" ref="info" :options="options" :has-track="false">
			<SplideTrack class="h-full">
				<SplideSlide v-for="item in store.previews" class="h-full py-2 m:py-0" :style="setStyles(item.secondaryColor)">
					<Content :item="item" class="h-full "/>
			 	</SplideSlide>
			 </SplideTrack>
		</Splide>
	  
	</div>
</template>

<script setup>
	import classes from './classes'
	import Image from './Image'
	import Content from './Content'
	import { Splide,SplideSlide,SplideTrack } from '@splidejs/vue-splide';
	import {useStore} from '@/stores'
	
	const images = ref(null)
	const info = ref(null)
	const container = ref(null)
	const store = useStore()
	
	const options = {
		type:'loop',
		gap:1,
		pagination: false,
		arrows: false
	 }
	  
  	const imageOptions = {
		pauseOnFocus: false,
		pauseOnHover: false,
		resetProgress: false,
		autoplay:true,
		interval: 7000
  	}
	  
	const imageStyles = ref(setStyles(store.previews[0].secondaryColor))
	  
  	onMounted(syncSplides)
	  
	function syncSplides(){
	  images.value.splide.on('move',(i)=> (imageStyles.value = setStyles(store.previews[i].secondaryColor)))
	  images.value.splide.sync(info.value.splide)
	  container.value.addEventListener('mouseenter',handleMouseEnter)
	  container.value.addEventListener('mouseleave',handleMouseLeave)
	}
	
	function setStyles(color){
		return {'--tertiary-color': color}
	}
	
	function handleMouseEnter(){
	  images.value.splide.Components.Autoplay.pause()
	}
	
	function handleMouseLeave(){
	  images.value.splide.Components.Autoplay.play()
	}
	  
</script>

<style scoped></style>