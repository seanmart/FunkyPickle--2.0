<template>
	<nav id="nav" :class="classes.container">
			
		<button id="nav-button" :class="classes.button" @click="toggleMenu">
			menu
		</button>
		
		<nuxt-link to="/" id="nav-logo" :class="classes.logo.container">
			<SVG name="logo" :class="classes.logo.wrapper"/>
		</nuxt-link>
		
		<div id="nav-pages" :class="classes.pages.container">
			<div :class="classes.pages.wrapper">
				<template v-for="page,i in store.navigation" >
					<nuxt-link data-rise :class="classes.pages.page" :to="page.link" :target="page.external ? '_blank' : null" @click="handlePage(i)">
						{{page.label}}
					</nuxt-link>
				</template>
				<div v-if="offset >= 0" :class="classes.pages.highlight.container" :style="{transform: `translateY(${offset * 100}%)`}">
					<div data-grow :class="classes.pages.highlight.wrapper"/>
				</div>
			</div>
		</div>

	</nav>
</template>

<script setup>
	import classes from './classes'
	import {useStore} from '@/stores'
	import {matchLinkToRoute} from '@/helpers'
	
	const store = useStore()
	const route = useRoute()
	
	//PAGES
	
	const {client} = usePrismic()
	const offset = ref(0)
	 
	if (!store.navigation.length){
		const {data} = await useAsyncData(()=> client.getSingle('navigation'))
		if(data.value){
			data.value.data.links.forEach(item => {
				let link = null
				let label = item.label
				let external = !!item.link.url
				if(item.link.url) link = item.link.url
				if(!link && item.link.uid) link = `/${item.link.uid.replace('home','')}`
				link && store.navigation.push({link,label,external})
			})
		}
	}
	
	function handlePage(i){
		let link = store.navigation[i]
		if(link.external) return 
		offset.value = i
	}
	
	function updateHighlight(){
		offset.value = store.navigation.findIndex((p) => matchLinkToRoute(p.link,route.path))
	}
	
	watch(route,updateHighlight)
	updateHighlight()
	
	
	// MENU 
	
	let open = false
	let rise = '#nav [data-rise]'
	let grow = '#nav [data-grow]'
	let ease = 'power2.inOut'
	
	function toggleMenu(){
		open = !open
		if (open){
			document.documentElement.classList.add('no-scroll')
			setTimeout(()=>window.addEventListener('click',toggleMenu),100)
			gsap.timeline()
			.set(rise,{y:100,opacity:0},0)
			.set(grow,{scaleX:0},0)
			.to('#nav',{height:'100%',ease,duration:.5},0)
			.to(rise,{y:0,opacity:1,stagger:.03,ease,duration:.5},.25)
			.to(grow,{scaleX:1,ease,duration:.5},'>-.3')
			.set([rise,grow],{clearProps:'all'},'>')
		} else {
			document.documentElement.classList.remove('no-scroll')
			window.removeEventListener('click',toggleMenu)
			gsap.timeline()
			.to('#nav',{height:store.units.navY,ease,duration:.5},0)
			.set('#nav',{clearProps:'height'},'>')
		}
	}
	function handleResize(){
		if(window.innerWidth >= store.units.tablet && open){
			open = false 
			gsap.set('#nav',{clearProps:'height'})
			document.documentElement.classList.remove('no-scroll')
			window.removeEventListener('click',toggleMenu)
		}
	}
	
	onMounted(()=>{
		window.addEventListener('resize', handleResize)
	})
	
</script>

<style>
	#nav-logo .logo-border,
	#nav-logo .logo-bg{
		fill: black;
	}
	#nav-logo .logo-outline{
		fill: theme('colors.fp-green')
	}
	#nav-logo .logo-letters{
		fill: theme('colors.fp-pink')
	}
	#nav-logo .logo-ball{
		fill: theme('colors.fp-lime')
	}
</style>