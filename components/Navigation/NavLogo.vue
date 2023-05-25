<template>
	<div :class="logo.container">
		<nuxt-link to="/">
			<Logo :class="logo.wrapper"/>
		</nuxt-link>
	</div>
</template>

<script setup>
	import {logo} from './classes'
</script>