<template>
	<section class="margins gutters-x section">
		<EventCountdown :class="headingClasses.noSize" :start="start"/>
		<h1 :class="headlineClasses.noSize" class="text-2.5 m:text-3 t:text-3.7 d:text-4.5 d:max-w-50">{{name}}</h1>
		<h5 :class="headingClasses.medium" class="mt-2">
			<span>{{getDate(start)}}</span>
			<span class="inline-block mx-0.8">-</span>
			<span>{{getDate(end)}}</span>
		</h5>
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