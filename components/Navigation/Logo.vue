<template>
	<div :class="classes.container">
		<nuxt-link to="/">
			<Logo :class="classes.wrapper"/>
		</nuxt-link>
	</div>
</template>

<script setup>
	const props = defineProps({classes:Object})
</script>