<template>
	<div :class="links.links.container">
		<h3 data-rise :class="links.links.label">Pages</h3>
		<div :class="links.links.wrapper">
			
			<nuxt-link data-rise :class="links.link.wrapper" v-for="page,i in pages" :to="page.link" :target="page.target" @click="offset=i">
				<span :class="links.link.label">{{page.label}}</span>
			</nuxt-link>
				
			<div :class="links.highlight.container" :style="{transform: `translateY(${offset * 100}%)`}">
				<div data-grow :class="links.highlight.wrapper" class="bg-outline"/>
			</div>
			
		</div>
	</div>
</template>

<script setup>
	import { getLink, matchRoute } from '@/helpers'
	import {links} from './classes'
	
	const {client} = usePrismic()
	const offset = ref(0)
	const route = useRoute()
	
	const {data} = await useAsyncData(() => client.getSingle('navigation'))
	
	const pages = data.value.data.links.map( l =>{
		let link = getLink(l.link)
		return {
			link: getLink(l.link),
			label: l.label, 
			target: l.link.url ? '_blank' : null
		}
	})
	
	pages.forEach((p,i) => p.link == route.path && (offset.value = i))
	
	
	
</script>