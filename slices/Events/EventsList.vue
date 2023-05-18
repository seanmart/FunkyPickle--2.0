<template>
	<div v-for="event,i in events" class="flex flex-row bordered border-outline bg-white shadowed" :class="{'mt-1': i > 0}" >
		<div class="relative flex-center w-1/3 s:w-1/3 p-1">
			<Media class="absolute inset-0" :src="event.background.url" />
			<img :src="event.logo.url" class="h-auto w-auto max-w-full max-h-3/4 relative z-1">
		</div>
		<div class="flex-middle p-2">
			<div>
				<h5 class="font-label text-0.8 text-slate-400 select-none mb-0.5">{{formatDate(event.start,'mmmm dd, yyyy')}}</h5>
				<h2 class="font-header text-2 s:text-3 select-none mb-2">{{event.name}}</h2>
				<nuxt-link class="btn bg-fp-pink text-white font-header font-normal" :to="event.route">View Event</nuxt-link>
			 </div>
		</div>
	</div>
</template>

<script setup>
	import {formatDate} from '@/helpers'
	const props = defineProps({events:Array})
</script>

<style scoped></style>