<template>
	<div :class="classes.links.container">
		<h3 data-rise :class="classes.links.label">Sections</h3>
		<div :class="classes.links.wrapper">
			
			<a :class="classes.link.wrapper" data-rise v-for="section in sections" :key="section.id" :href="section.id" @click="scrollToSection($event,section)">
				<span :class="classes.link.label">{{section.label}}</span>
			</a>
				
			<div :class="classes.highlight.container" :style="{transform: `translateY(${offset * 100}%)`}">
				<div data-grow :class="classes.highlight.wrapper" class="bg-fp-lime"/>
			</div>
			
		</div>
	</div>
</template>

<script setup>
	import {useStore} from '@/stores'
	import {storeToRefs} from 'pinia'
	
	const props = defineProps({classes:Object})
	const store = useStore()
	const {loaded} = storeToRefs(store)
	const sections = ref([])
	const offset = ref(0)
	let scrolling = false
	
	watch(loaded,getSections)
	
	function getSections(){
		offset.value = 0
		if(sections.value.length) sections.value.forEach(s => s.trigger.kill())
		let els = [...document.querySelectorAll('[data-section]')]
		
		sections.value = els.map((el,i)=> {
			let label = el.getAttribute('data-section')
			let id = el.getAttribute('id')
			let trigger = ScrollTrigger.create({
				trigger: el,
				start:'top 50%',
				end:'bottom 50%',
				onToggle:({isActive})=>{
					if(isActive && !scrolling) offset.value = i
				}
			})
			return {trigger,label,id:`#${id}`,index:i}
		})
	}
	
	function scrollToSection(e,s){
		e.preventDefault()
		
		offset.value = s.index
		scrolling = true
		let mobile = window.innerWidth < store.units.mobile
		
		gsap.to(window,{
			delay: mobile ? .5 : 0,
			duration:1,
			ease:'power3.inOut',
			scrollTo:{
				y:s.id,
				offsetY: mobile ? store.units.navY : -1
			},
			onComplete:()=>{scrolling = false}
		})
	}
	
</script>