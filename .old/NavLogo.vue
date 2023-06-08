<template>
	<div class="nav-logo" :class="logo.container">
		<nuxt-link to="/">
			<SVG name="logo" :class="logo.wrapper"/>
		</nuxt-link>
	</div>
</template>

<script setup>
	import {logo} from './classes'
</script>

<style>
	.nav-logo .logo-border,
	.nav-logo .logo-bg{
		fill: black;
	}
	.nav-logo .logo-outline{
		fill: theme('colors.fp-green')
	}
	.nav-logo .logo-letters{
		fill: theme('colors.fp-pink')
	}
	.nav-logo .logo-ball{
		fill: theme('colors.fp-lime')
	}
</style>