<template>
	<div :class="pages.links.container">
		<h3 data-rise :class="links.links.label">Pages</h3>
		<div :class="pages.links.wrapper">
			
			<nuxt-link data-rise :class="pages.link.wrapper" v-for="page,i in store.navigation" :to="page.link" :target="page.external ? '_blank' : null" @click="handleClick(i)">
				<span :class="pages.link.label">{{page.label}}</span>
			</nuxt-link>
				
			<div v-if="offset >= 0" :class="pages.highlight.container" :style="{transform: `translateY(${offset * 100}%)`}">
				<div data-grow :class="pages.highlight.wrapper" class="bg-outline"/>
			</div>
			
		</div>
	</div>
</template>

<script setup>
	import {matchLinkToRoute} from '@/helpers'
	import {useStore} from '@/stores'
	import {pages} from './classes'
	
	const offset = ref(0)
	const route = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	
	//DATA 
	if (!store.navigation.length){
		const {data} = await useAsyncData(()=> client.getSingle('navigation'))
		if(data.value){
			data.value.data.links.forEach(item => {
				let link = null
				let label = item.label
				let external = !!item.link.url
				if(item.link.url) link = item.link.url
				if(!link && item.link.uid) link = `/${item.link.uid.replace('home','')}`
				link && store.navigation.push({link,label,external})
			})
		}
	}
	
	function handleClick(i){
		let link = store.navigation[i]
		if(link.external) return 
		offset.value = i
	}
	
	function updateHighlight(){
		offset.value = store.navigation.findIndex((p) => matchLinkToRoute(p.link,route.path))
	}
	
	watch(route,updateHighlight)
	updateHighlight()
	
</script>