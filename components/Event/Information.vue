<template>
	<section class="margins gutters-x section">
		<h1 :class="headlineClasses.heading3" class="max-w-50">{{name}}</h1>
		<h5 :class="headingClasses.medium" class="mt-2">{{getDate(start)}} - {{getDate(end)}}</h5>
	</section>
</template>

<script setup>
	import {headlineClasses} from '@/globalClasses'
	import {headingClasses} from '@/globalClasses'
	import {formatDate} from '@/helpers'
	
	defineProps(['name','start','end'])
	
	function getDate(date){
		return formatDate(date,'mmmm dd, yyyy')
	}

</script>

<style scoped></style>