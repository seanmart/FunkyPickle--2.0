<template>
	<PrismicRichText 
	class="relative z-1 gutters-x margins pt-5" 
	:field="title" :htmlSerializer="htmlSerializer"
	/>
</template>

<script setup>
	import {headlineClasses} from '@/globalClasses'
	
	const props = defineProps(['title'])
	const htmlSerializer = {
		'heading1':({children})=> `<h1 class="${headlineClasses.heading1}">${children}</h1>`
	}
</script>