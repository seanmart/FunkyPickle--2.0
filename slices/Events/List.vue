<template>
	<template v-for="item in store.previews">
		<div class="grid grid-cols-8 gap-2 py-2 first:pt-0 last:pb-0 border-t first:border-none border-slate-200 dark:border-slate-800" :style="styles(item.secondaryColor)">
			<Image class="col-span-8 m:col-span-4 d:col-span-3 h-full m:min-h-20" :item="item"/>
			<Content class="col-span-8 m:col-span-4 d:col-span-5" :item="item"/>
		</div>
	</template>
</template>

<script setup>
	import Content from './Content'
	import Image from './Image'
	import {useStore} from '@/stores'
	
	const store = useStore()
	
	function styles(color){
		return {'--tertiary-color': color}
	}
	
</script>

<style scoped></style>