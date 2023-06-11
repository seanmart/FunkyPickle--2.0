<template>
	<main class="min-h-screen margins-wide text-primary dark:text-slate-50" :style="styles">
		<EventHeader :background="page.background.url" :logo="page.logo.url" :start="page.start" :end="page.end"/>
		<Navbar v-if="page.navbar.length" :data="page.navbar" :color="page.colorLight"/>
		<EventTitle :name="page.name"/>
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
		const {data} = await useAsyncData(()=>client.getByUID('event',params.uid))
		if(data.value) store.PAGE(data.value.data,path)
	}
	
	const page = store.pages[path]
	const styles = {
		'--primary-color':page.primaryColor,
		'--secondary-color': page.secondaryColor,
		'--tertiary-color': page.secondaryColor,
	}
	
	onMounted(()=> store.LOADING(false))

</script>