<template>
	<section class="margins gutters-x section">
		<h1 :class="headlineClasses.heading2" class="max-w-50">{{name}}</h1>
	</section>
</template>

<script setup>
	import {headlineClasses} from '@/globalClasses'
	
	const props = defineProps(['name'])
</script>

<style scoped></style>