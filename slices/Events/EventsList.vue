<template>
	<div v-for="event,i in events" :class="[list.container,{'mt-1': i > 0}]" >
		<div :class="list.image.container">
			<Media :class="list.image.media" :src="event.background.url" :distance="50" />
			<img :src="event.logo.url" :class="list.image.logo">
		</div>
		<div :class="list.info.container">
			<div>
				<h5 :class="text.h5">{{formatDate(event.start,'mmmm dd, yyyy')}}</h5>
				<h2 :class="list.info.h2">{{event.name}}</h2>
				<nuxt-link :class="text.link" :to="event.route">View Event</nuxt-link>
			 </div>
		</div>
	</div>
</template>

<script setup>
	import {text,list} from './classes'
	import {formatDate} from '@/helpers'
	const props = defineProps({events:Array})
</script>

<style scoped></style>