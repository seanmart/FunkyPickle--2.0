<template>
	<template v-for="item in store.previews">
		<nuxt-link :to="item.link" class="flex mb-2 last:mb-0">
			<div class="flex-none w-2/5 relative flex-center p-2">
				<img v-if="item.logo" class="w-full h-auto relative z-1 max-w-18" :src="item.logo.url" :alt="item.logo.alt">
				<Media class="absolute w-full h-full top-0 left-0" :src="item.background.url" background/>
			</div>
			<div class="flex-auto pl-2 min-h-20 py-2">
				<h5 :class="[headingClasses.small, headingClasses.bar]" :style="styles(item.secondaryColor)">{{item.location}}</h5>
				<h2 :class="headlineClasses.noSize" class="my-2 text-2.4 m:text-2.6 l:text-2.8 d:text-3 hover:underline decoration-4 underline-offset-4">
			  		{{item.name}}
				</h2>
				<h5 :class="headingClasses.small">{{formatDate(item.start,'mmmm dd, yyyy')}} - {{formatDate(item.end,'mmmm dd, yyyy')}}</h5>
			</div>
		</nuxt-link>
	</template>
</template>

<script setup>
	import {useStore} from '@/stores'
	import {headingClasses,headlineClasses} from '@/globalClasses'
	import {formatDate} from '@/helpers'
	
	const store = useStore()
	function styles(color){
		return {'--tertiary-color': color}
	}
	
</script>

<style scoped></style>