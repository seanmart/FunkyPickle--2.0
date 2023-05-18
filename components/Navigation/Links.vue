<template>
	<div v-show="links.length">
		<h3 class="nav-links-label font-label text-slate-400 nav-anim-item" :style="`--delay:${delay}`">{{label}}</h3>
		<ul class="nav-links relative">
			<li class="nav-link-wrapper nav-anim-item" v-for="link,i in links" :style="`--delay:${i + 1 + delay}`">
				<div class="nav-link-line"/>
				<slot :link="link" :index="i"/>
			</li>
			<div v-if="active >= 0" class="highlight-wrapper" :style="{transform: `translateY(${active * 100}%)`}">
				<div :style="`--delay:${delay + active}`" class="highlight"/>
			</div>
		</ul>
	</div>
</template>

<script setup>
	
	const props = defineProps({
		label:String,
		links:{type:Array,default:[]},
		active:{type:Number,default:0},
		delay:{type:Number,default:0}
	})
	
</script>