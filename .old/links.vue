<template>
	<div v-show="links.length">
		<h3 class="nav-links-label font-label text-slate-400 nav-anim-item" :style="`--delay:${delay}`">{{label}}</h3>
		<ul class="nav-links relative">
			<li class="nav-link-wrapper nav-anim-item" v-for="link,i in links" :style="`--delay:${i + 1 + delay}`" @click="offset = i">
				<div class="nav-link-line"/>
				<slot :link="link" :index="i"/>
			</li>
			<div class="highlight-wrapper" :style="{transform: `translateY(${offset * 100}%)`}">
				<div :style="`--delay:${delay + offset}`" class="highlight"/>
			</div>
		</ul>
	</div>
</template>

<script setup>
	
	const props = defineProps({
		label:String,
		links:{type:Array,default:[]},
		delay:{type:Number,default:0}
	})
	
	const offset = ref(0)

	
</script>