<template>
	<nav id="nav" :class="classes.nav.container">
		<NavigationButton :classes="classes.button" @click="toggleMenu"/>
		<NavigationLogo :classes="classes.logo"/>
		<div :class="classes.nav.wrapper">
			<NavigationPages :classes="classes.links"/>
			<NavigationSections :classes="classes.links"/>
		</div>
	</nav>
</template>

<script setup>
	import classes from './classes'
	import {useStore} from '@/stores'
	
	const store = useStore()
	
	// MENU 
	let open = false
	let rise = '#nav [data-rise]'
	let grow = '#nav [data-grow]'
	let ease = 'power2.inOut'
	
	function toggleMenu(){
		open = !open
		if (open){
			setTimeout(()=>window.addEventListener('click',toggleMenu),100)
			gsap.timeline()
			.set(rise,{y:100,opacity:0},0)
			.set(grow,{scaleX:0},0)
			.to('#nav',{height:'100%',ease,duration:.5},0)
			.to(rise,{y:0,opacity:1,stagger:.03,ease,duration:.5},.25)
			.to(grow,{scaleX:1,ease,duration:.5},'>-.3')
			.set([rise,grow],{clearProps:'all'},'>')
		} else {
			window.removeEventListener('click',toggleMenu)
			gsap.timeline()
			.to('#nav',{height:store.units.navY,ease,duration:.5},0)
			.set('#nav',{clearProps:'height'},'>')
		}
	}
	function handleResize(){
		if(window.innerWidth >= store.units.mobile && open){
			open = false 
			gsap.set('#nav',{clearProps:'height'})
			window.removeEventListener('click',toggleMenu)
		}
	}
	
	
	onMounted(()=>{
		window.addEventListener('resize', handleResize)
	})
	
	
</script>

<style>
	
</style>