<template>
	<nuxt-link :to="item.link" class="pr-3 pt-3 m:pb-3 m:pr-0 m:pl-3 flex-middle">
		<div>
			<h5 :class="[headingClasses.small, headingClasses.bar]">{{item.location}}</h5>
			<h2 :class="headlineClasses.noSize" class="my-2 text-2.4 m:text-2.6 l:text-2.8 d:text-3 hover:underline decoration-4 underline-offset-4">
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