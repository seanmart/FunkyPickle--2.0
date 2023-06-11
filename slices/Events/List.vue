<template>
	<template v-for="item in store.previews">
		<div class="flex flex-col m:flex-row py-1 last:mb-0 border-t last:border-b border-slate-200">
			<Image class="flex-none m:w-2/5" :item="item"/>
			<Content class="flex-auto" :item="item"/>
		</div>
	</template>
</template>

<script setup>
	import Content from './Content'
	import Image from './Image'
	import {useStore} from '@/stores'
	
	const store = useStore()
	
</script>

<style scoped></style>