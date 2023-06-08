<template>
	<main class="bg-fp-lime dark:bg-slate-800 fixed inset-0 flex-center">
		<div class="text-center p-2">
			<h1 class="font-header text-10">{{error.statusCode}}</h1>
			<p class="text-2">{{error.message}}</p>
			<p class="text-1" v-html="error.stack"/>
		</div>
	</main>
</template>

<script setup>
	const props = defineProps(['error'])
</script>

<style scoped></style>