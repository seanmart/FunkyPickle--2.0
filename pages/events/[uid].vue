<template>
	<main class="min-h-screen margins-wide text-primary dark:text-slate-50" :style="styles">
		<EventHeader :background="event.background.url" :logo="event.logo.url" :start="event.start" :end="event.end"/>
		<Navbar v-if="event.navbar.length" :data="event.navbar" :color="event.colorLight"/>
		<EventInformation :name="event.name" :start="event.start" :end="event.end"/>
		<Sections :sections="event.slices"/>
	</main>
</template>

<script setup>
	import {useStore} from '@/stores'
	
	const {path,params} = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	
	store.LOADING(true)
	
	if(!store.pages[path]){
		const {data} = await useAsyncData(()=>client.getByUID(params.uid,params.uid))
		if(data.value) store.PAGE(data.value.data,path)
	}
	
	const event = store.pages[path]
	
	const styles = {
		'--primary-color':event.primaryColor,
		'--secondary-color': event.secondaryColor,
		'--tertiary-color': event.secondaryColor,
	}
	
	onMounted(()=> store.LOADING(false))

</script>