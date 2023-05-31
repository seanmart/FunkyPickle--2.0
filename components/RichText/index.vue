<template>
	<PrismicRichText class="rich-text" :field="text" :htmlSerializer="htmlSerializer"/>
</template>

<script setup>
	const props = defineProps(['text'])
	
	const htmlSerializer ={
		heading1:({children})=> `<h1 class="font-header font-bold leading-0.9 my-2 first:mt-0 last:mb-0 text-4">${formatChildren(children)}</h1>`,
		heading2:({children})=> `<h2 class="font-header font-bold leading-1.2 my-1.8 first:mt-0 last:mb-0 text-2.6">${formatChildren(children)}</h2>`,
		heading3:({children})=> `<h3 class="my-1.6 first:mt-0 last:mb-0 leading-1.35 text-1.6 tracking-tight font-bold">${formatChildren(children)}</h3>`,
		heading4:({children})=> `<h4 class="my-1.6 first:mt-0 last:mb-0 leading-1.35 text-1.4 d:text-1.6 tracking-tight">${formatChildren(children)}</h4>`,
		heading5:({children})=> `<h5 class="my-1.4 first:mt-0 last:mb-0 leading-1.35 text-1.2 d:text-1.4 tracking-tight">${formatChildren(children)}</h5>`,
		heading6:({children})=> `<h6 class="my-1.4 first:mt-0 last:mb-0 leading-1.35 text-1 d:text-1.2 tracking-tight">${formatChildren(children)}</h6>`,
		paragraph:({children})=> `<p class="text-0.9 leading-1.55 my-0.7 first:mt-0 last:mb-0">${formatChildren(children)}</p>`
	}
	
	function formatChildren(c){
		let arr = c.split(/(\s)/).filter((x) => x.trim().length>0).map(w => {
			if(w.includes('-')) w = `<span class="whitespace-nowrap">${w}</span>`
			return w
		})
		return arr.join(' ')
	}
	
</script>

<style>
	
</style>