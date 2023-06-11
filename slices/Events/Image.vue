<template>
	<nuxt-link :to="item.link" class="flex-center p-2 relative">
		<img v-if="item.logo" class="w-full max-w-10 m:max-w-15 h-auto relative z-1" :src="item.logo.url" :alt="item.logo.alt">
		<Media v-if="item.background" class="absolute w-full h-full top-0 left-0" :src="item.background.url" background/>
	</nuxt-link>
</template>

<script setup>
	const props = defineProps(['item'])
</script>