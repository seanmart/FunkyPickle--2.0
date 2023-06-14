<template>
	<template v-for="item in store.previews">
		<div :class="classes.container" class="py-2 first:pt-0 last:pb-0 border-t first:border-none border-slate-200 dark:border-slate-700" :style="styles(item.secondaryColor)">
			<Image :class="classes.image" :item="item"/>
			<Content :class="classes.content" :item="item"/>
		</div>
	</template>
</template>

<script setup>
	import classes from './classes'
	import Content from './Content'
	import Image from './Image'
	import {useStore} from '@/stores'
	
	const store = useStore()
	
	function styles(color){
		return {'--tertiary-color': color}
	}
	
</script>

<style scoped></style>