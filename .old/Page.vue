<template>
	<main class="min-h-screen" :class="page ? `margins-${page.margins}` : ''">
		<template v-if="page" >
			
			<HeaderPage 
			v-if="type == 'page'" 
			:navbar="page.navbar" 
			:title="page.title" 
			:media="page.media.url"
			/>
			
			<HeaderEvent 
			v-if="type == 'event'" 
			:navbar="page.navbar"
			:media="''"
			:location="''"
			:coordinates="''"
			:start="''"
			:end="''"
			/>
	
			<template v-for="slice in page.slices">
				<section :id="slice.id || ''" class="pt-5 last:pb-5 m:pt-5 m:last:pb-5">
					
					<template v-if="slice.slices">
						<component v-for="slice2 in slice.slices" :slice="slice2" :is="components[slice2.slice_type]"/>
					</template>
					
					<Component v-else :slice="slice" :is="components[slice.slice_type]"/>
						
				</section>
			</template>
		
		</template>
	</main>
</template>

<script setup>
	import { useStore } from '@/stores'
	import { components } from '~/slices'
	import {sectionClasses} from '@/globalClasses'
	
	const {path,fullPath} = useRoute()
	const store = useStore()
	const {client} = usePrismic()
	
	store.LOADING(true)
	
	const params = path.split('/').filter(p => p)
	const type = params.length > 1 ? params[0] : 'page'
	const uid = params.length > 1 ? params[1] : params[0] || 'home'
	
	if(!store.pages[path]){
		const {data} = await useAsyncData(()=>client.getByUID(type,uid))
		if(data.value) store.PAGE(data.value.data,type,path)
	}
	
	const page = store.pages[path] || null
	  
	 onMounted(()=> {
		 store.LOADING(false)
	 })
</script>

<style scoped></style>