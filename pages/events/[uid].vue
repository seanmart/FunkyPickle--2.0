<template>
	<main class="min-h-screen margins-wide text-primary dark:text-slate-50" :style="styles">
		<template v-if="event">
			<EventHeader :background="event.background.url" :logo="event.logo.url" :start="event.start" :end="event.end"/>
			<Navbar v-if="event.navbar.length" :data="event.navbar" :color="event.colorLight"/>
			<EventInformation :name="event.name" :start="event.start" :end="event.end"/>
			<Sections :sections="event.slices"/>
		</template>
	</main>
</template>

<script setup>
	import {useStore} from '@/stores'
	
	const {path,params} = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	const styles = ref({})
	const event = ref(null)
	
	store.LOADING(true)
	
	if(!store.pages[path]){
		const {data} = await useAsyncData(()=>client.getByUID(params.uid,params.uid))
		if(data.value) store.PAGE(data.value.data,path)
	}
	
	event.value = store.pages[path]
	
	watch(event,()=>{
		styles.value = {
			'--primary-color':event.primaryColor,
			'--secondary-color': event.secondaryColor,
			'--tertiary-color': event.secondaryColor,
		}
	})
	
	
	
	
	onMounted(()=> store.LOADING(false))

</script>