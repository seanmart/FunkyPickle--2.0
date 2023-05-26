<template>
	<nuxt-link v-for="event,i in events" :to="event.route" :class="[list.container,{'mt-1': i > 0}]" >
		<div :class="list.image.container">
			<Media :class="list.image.media" :src="event.background.url" :distance="50" />
			<img :src="event.logo.url" :class="list.image.logo">
		</div>
		<div :class="list.info.container">
			<div>
				<h5 :class="text.h5">{{formatDate(event.start,'mmmm dd, yyyy')}}</h5>
				<h2 :class="text.h2">{{event.name}}</h2>
				<button :class="text.link">View Event</button>
			 </div>
		</div>
	</nuxt-link>
</template>

<script setup>
	import {text,list} from './classes'
	import {formatDate} from '@/helpers'
	const props = defineProps({events:Array})
</script>

<style>

</style>