<template>
	<nuxt-link :to="item.link" class="flex-middle">
		<div>
			<h5 :class="[headingClasses.small, headingClasses.bar]">{{item.location}}</h5>
			<h2 :class="headlineClasses.noSize" class="my-2 text-2.4 m:text-2.6 d:text-3.4 hover:underline decoration-4 underline-offset-4">
				  {{item.name}}
			</h2>
			<h5 :class="headingClasses.small">{{getDate(item.start)}} - {{getDate(item.end)}}</h5>
		</div>
	</nuxt-link>
</template>

<script setup>
	import {headingClasses,headlineClasses} from '@/globalClasses'
	import {formatDate} from '@/helpers'
	
	const props = defineProps(['item'])
	
	function getDate(date){
		return formatDate(date,'mmmm dd, yyyy')
	}
	
</script>