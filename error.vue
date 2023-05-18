<template>
	<main class="bg-fp-lime fixed inset-0 flex-center">
		<div class="text-center">
			<h1 class="font-header text-10">{{error.statusCode}}</h1>
			<p class="text-2">{{error.message}}</p>
			<div v-if="error.stack" class="p-2 text-0.7 bg-black text-white rounded mt-2" v-html="error.stack"/>
		</div>
	</main>
</template>

<script setup>
	const props = defineProps({
  	error: Object
	})
</script>

<style scoped></style>