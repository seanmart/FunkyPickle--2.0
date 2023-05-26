<template>
	<div id="modal" class="hidden fixed inset-0 z-10" v-if="content">
		<div class="absolute inset-0 bg-slate-900/80" @click="handleClick"/>
		<div class="absolute inset-0 flex-center z-1">
			<Splide :options="options" class="w-90vw">
				<SplideSlide class="modal-slide" v-for="item,i in content" :key="i">
					<Media class="h-full" :src="item.media" :distance="0"/>
				</SplideSlide>
			</Splide>
		</div>
	</div>
</template>

<script setup>
	import { Splide,SplideSlide,SplideTrack } from '@splidejs/vue-splide';
	import { useModalStore } from '@/stores/modal'
	import { storeToRefs } from 'pinia'
	
	const splide = ref()
	const modal = useModalStore()
	const {show,content} = storeToRefs(modal)
	const options = ref({
			type:'loop',
			perPage:1
		})
	
	watch(show,(shouldShow)=> shouldShow ? showModal() : hideModal())
	
	function handleClick(){
		modal.show = false
	}
	
	function showModal(){
		document.documentElement.classList.add('no-scroll')
		
		nextTick(()=>{
			gsap.timeline()
			.set('#modal',{scale:1.1,opacity:0,display:'block'})
			.to('#modal',{duration:.5, opacity:1, scale:1})
		})
	}
	
	function hideModal(){
		document.documentElement.classList.remove('no-scroll')
		
		gsap.timeline({onComplete:()=>(content.value = null)})
		.to('#modal',{duration:.25, scale:1.1, opacity:0})
		.set('#modal',{clearProps:'all'})
	}
	
</script>

<style>
	
	#modal .modal-slide{
		height: calc(100vh - 10vw - 3rem);
	}
</style>