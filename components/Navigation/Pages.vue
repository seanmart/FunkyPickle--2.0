<template>
	<div :class="classes.links.container">
		<h3 data-rise :class="classes.links.label">Pages</h3>
		<div :class="classes.links.wrapper">
			
			<nuxt-link data-rise :class="classes.link.wrapper" v-for="page,i in pages" :to="page.link" :target="page.target" @click="offset=i">
				<span :class="classes.link.label">{{page.label}}</span>
			</nuxt-link>
				
			<div :class="classes.highlight.container" :style="{transform: `translateY(${offset * 100}%)`}">
				<div data-grow :class="classes.highlight.wrapper" class="bg-outline"/>
			</div>
			
		</div>
	</div>
</template>

<script setup>
	import { getLink, matchRoute } from '@/helpers'
	
	const props = defineProps({classes:Object})
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