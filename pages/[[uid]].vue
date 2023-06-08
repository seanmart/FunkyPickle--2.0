<template>
	<main class="min-h-screen" :class="`margins-${page.margins}`">
		<HeaderMedia v-if="page.media.url && page.title.length" :media="page.media.url" :title="page.title"/>
		<Navbar v-if="page.navbar.length" :data="page.navbar"/>
		<HeaderTitle v-if="!page.media.url && page.title.length" :title="page.title"/>
		<Sections :sections="page.slices"/>
	</main>
</template>

<script setup>
	import {useStore} from '@/stores'
	
	const {path,params} = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	
	store.LOADING(true)
	
	if(!store.pages[path]){
		const {data} = await useAsyncData(()=>client.getByUID('page',params.uid || 'home'))
		if(data.value) store.PAGE(data.value.data,path)
	}
	
	const page = store.pages[path]
	
	onMounted(()=> store.LOADING(false))

</script>