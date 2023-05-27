<template>
	<div :class="links.links.container">
		<h3 data-rise :class="links.links.label">Pages</h3>
		<div :class="links.links.wrapper">
			
			<nuxt-link data-rise :class="links.link.wrapper" v-for="page,i in store.settings.navigation" :to="page.link" :target="page.target" @click="offset=i">
				<span :class="links.link.label">{{page.label}}</span>
			</nuxt-link>
				
			<div :class="links.highlight.container" :style="{transform: `translateY(${offset * 100}%)`}">
				<div data-grow :class="links.highlight.wrapper" class="bg-outline"/>
			</div>
			
		</div>
	</div>
</template>

<script setup>
	import {useStore} from '@/stores'
	import {links} from './classes'
	
	const offset = ref(0)
	const route = useRoute()
	const store = useStore()
	
	store.settings.navigation.forEach((p,i) => p.link == route.path && (offset.value = i))
	
</script>