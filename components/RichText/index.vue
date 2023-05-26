<template>
	<PrismicRichText :field="text" :htmlSerializer="htmlSerializerMain"/>
</template>

<script setup>
	const props = defineProps(['text','htmlSerializer'])
	const htmlSerializer = props.htmlSerializer || {}
	
	const htmlSerializerMain ={
		heading1:({children})=> `<h1 class="font-header text-3 m:text-4 d:text-5 leading-0.9">${children}</h1>`,
		heading2:({children})=> `<h2 class="font-header text-1.6 m:text-2 d:text-2.5 leading-0.9 mb-1 last:mb-0">${children}</h2>`,
		heading3:({children})=> `<h3 class="font-header text-2 m:text-2.2 d:text-2.4 leading-0.9 mb-0.5 last:mb-0">${children}</h3>`,
		heading4:({children})=> `<h4 class="text-1.2 m:text-1.4 d:text-1.6 leading-1.2 mb-0.5 last:mb-0">${children}</h4>`,
		heading5:({children})=> `<h5 class="text-slate-500 text-1 m:text-1.2 d:text-1.4 leading-1.2 mb-0.5 last:mb-0">${children}</h5>`,
		heading6:({children})=> `<h6 class="text-slate-500 text-0.8 m:text-1 d:text-1.2 leading-1.2 mb-0.5 last:mb-0">${children}</h6>`,
		paragraph:({children})=> `<h6 class="text-slate-500 text-1 m:text-0.9 leading-1.4 mb-0.4 last:mb-0">${children}</h6>`,
		...htmlSerializer
	}
	
</script>

<style scoped></style>