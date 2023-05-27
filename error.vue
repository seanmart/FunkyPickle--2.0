<template>
	<main class="bg-fp-lime fixed inset-0 flex-center">
		<div class="text-center">
			<h1 class="font-header text-10">{{error.statusCode}}</h1>
			<p class="text-2">{{error}}</p>
		</div>
	</main>
</template>

<script setup>
	const props = defineProps(['error'])
</script>

<style scoped></style>