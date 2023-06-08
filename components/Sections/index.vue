<template>
	<section v-for="section in sections" :id="section.id || ''" class="pt-5 last:pb-5 m:pt-5 m:last:pb-5">
		<template v-if="section.slices">
			<component v-for="slice in section.slices" :slice="slice" :is="components[slice.slice_type]"/>
		</template>
		<Component v-else :slice="section" :is="components[section.slice_type]"/>
	</section>
</template>

<script setup>
	import { components } from '~/slices'
	const props = defineProps(['sections'])
</script>