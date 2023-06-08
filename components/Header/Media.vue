<template>
	
	<header id="header" class="relative bg-slate-900 text-center py-7 m:py-10 px-2">
		<PrismicRichText class="relative z-1" :field="title" :htmlSerializer="htmlSerializer"/>
		<Media class="absolute inset-0 opacity-40" :src="media" background/>
	</header>
		
</template>

<script setup>
	
	const props = defineProps(['title','media','navbar'])
	const htmlSerializer = {
		'heading1':({children})=> `<h1 class="text-white font-header font-bold uppercase header-text leading-0.9">${formatText(children)}</h1>`,
		'strong':({children})=> `<strong class="text-fp-lime">${children}</strong>`
	}
	
	function formatText(words){
		return words.split(' ').map(word => {
  			if(word.includes('strong')) return word
  			if(word.includes('-')) return `<span class="whitespace-nowrap">${word}</span>`
  			return word
		}).join(' ')
	}
	  
</script>

<style>

	#header h1{
		font-size: 3.9rem;
	}
	
	@media screen and (min-width:theme('screens.m')){
		#header h1{
			font-size: calc(100vw * .08)
		}
	}
	
	@media screen and (min-width:theme('screens.t')){
		#header h1{
			font-size: calc((100vw - theme('spacing.nav-x')) * .08)
		}
	}
	
	@media screen and (min-width:1920px){
		#header h1{
			font-size: 124.8px;
			max-width: 1480px;
			margin: 0px auto;
		}
	}
</style>