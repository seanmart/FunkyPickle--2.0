<template>
	<main class="min-h-screen margins-wide dark:text-slate-50">
		<div v-if="page" :style="styles" class="text-primary">
			<EventHeader :background="page.background.url" :logo="page.logo.url"/>
			<Navbar v-if="page.navbar.length" :data="page.navbar" :color="page.colorLight"/>
			<EventCountdown :start="page.start"/>
			<EventInformation :name="page.name" :start="page.start" :end="page.end"/>
			<Sections :sections="page.slices"/>
		</div>
	</main>
</template>

<script setup>
	import {useStore} from '@/stores'
	
	const {path,params} = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	const uid = params.uid
	
	store.LOADING(true)
	
	if(!store.pages[path]){
		const {data} = await useAsyncData(uid,()=>client.getByUID('event',uid))
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