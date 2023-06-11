<template>
	<main class="min-h-screen" :class="`margins-${page.margins}`">
		<PageHeader v-if="page.media.url && hasTitle" :background="page.media.url" :title="page.title"/>
		<Navbar v-if="page.navbar.length" :data="page.navbar"/>
		<PageTitle v-if="!page.media.url && hasTitle" :title="page.title"/>
		<Sections :sections="page.slices"/>
	</main>
</template>

<script setup>
	import {useStore} from '@/stores'
	import {richTextHasContent} from '@/helpers'
	
	const {path,params} = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	const uid = params.uid || 'home'
	
	store.LOADING(true)
	
	if(!store.pages[path]){
		const {data} = await useAsyncData(uid,()=>client.getByUID('page', uid))
		if(data.value) store.PAGE(data.value.data,path)
	}
	
	const page = store.pages[path]
	const hasTitle = richTextHasContent(page.title)
	
	onMounted(()=> store.LOADING(false))

</script>