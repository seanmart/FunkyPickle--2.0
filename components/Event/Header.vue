<template>
	<header id="header" class="relative bg-slate-900 flex-center flex-col px-3">
		<Media class="max-w-30 my-4 w-full relative z-1" :src="logo"/>
		<Media class="absolute top-0 left-0 w-full h-full" :src="background" background/>
		<slot/>
	</header>
</template>

<script setup>
	const props = defineProps(['background','logo','start','end'])
</script>