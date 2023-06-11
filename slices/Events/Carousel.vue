<template>
	<div class="flex flex-col m:flex-row select-none m:min-h-23" ref="container">
	  
	  <Splide ref="images" :options="{...options,...imageOptions}" class="flex-none m:w-1/2 relative" :has-track="false" :style="imageStyles">
		<SplideTrack class="h-full">
		  <template v-for="item in store.previews">
			<SplideSlide class="h-full">
			  <Image :item="item" class="h-full"/>
			</SplideSlide>
		  </template>
		</SplideTrack>
		<div class="splide__progress absolute left-0 bottom-0 right-0">
		  <div class="splide__progress__bar h-0.5 bg-tertiary"/>
		</div>
	  </Splide>
	  
	  <Splide ref="info" :options="options" class="flex-none m:w-1/2 pb-3 m:pb-0 border-b border-slate-200 dark:border-slate-800 m:border-none" :has-track="false">
		  <SplideTrack class="h-full">
			<template v-for="item in store.previews">
		  	<SplideSlide class="h-full" :style="setStyles(item.secondaryColor)">
			  	<Content :item="item" class="h-full"/>
		  	</SplideSlide>
			</template>
		</SplideTrack>
	  </Splide>
	  
	</div>
</template>

<script setup>
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