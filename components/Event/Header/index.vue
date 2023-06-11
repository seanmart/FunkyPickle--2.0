<template>
	<header id="header" class="relative bg-slate-900 flex flex-col justify-center items-center py-4 px-3">
		<EventHeaderCountdown class="relative z-1 mb-1" :start="start" :end="end"/>
		<Media class="max-w-30 relative z-1" :src="logo"/>
		<Media class="absolute top-0 left-0 w-full h-full" :src="background" background/>
	</header>
</template>

<script setup>
	const props = defineProps(['background','logo','start','end'])
</script>