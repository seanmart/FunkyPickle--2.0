<template>
	<nav id="c-nav" class="nav-transition">
		<button @click="toggleMobileNav" class="nav-button">
			menu
		</button>
		<div class="nav-logo">
			<nuxt-link to="/"><Logo/></nuxt-link>
		</div>
		<div class="nav-links-wrapper">
			<NavigationLinks class="nav-pages" label="Pages" :active="page" :links="pages" v-slot="{link}">
				<nuxt-link class="nav-link font-header" :to="link.link" :target="link.external ? '_blank' : ''" @click="page = link.index">
					<span>{{link.label}}</span>
				</nuxt-link>
			</NavigationLinks>
			<NavigationLinks class="nav-sections" label="Sections" :active="section" :links="sections" v-slot="{link}" :delay="pages.length">
				<a class="nav-link font-header" @click="updateScroll($event,link)" :href="link.id">
					<span>{{link.label}}</span>
				</a>
			</NavigationLinks>
		</div>
	</nav>
</template>

<script setup>
	
	import { storeToRefs } from 'pinia'
	import {usePagesStore } from '@/stores/pages'
	import {useLoadingStore } from '@/stores/loading'
	import {getLink, matchRoute} from '@/helpers'
	import { useRoute } from 'vue-router'
	import config from '@/tailwind.config.js'
	
	const {client} = usePrismic()
	const pagesStore = usePagesStore()
	const loadingStore = useLoadingStore()
	const route = useRoute()
	const {loaded} = storeToRefs(loadingStore)
	
	const sections = ref([])
	const pages = ref([])
	const page = ref(0)
	const section = ref(0)
	
	let scrolling = false 
	let triggers = []
	let open = false
	let mobileWidth = parseInt(config.theme.screens.m)
	let navHeight = parseInt(config.theme.height['nav-y'])
	let lastScrollY = 0
	let scrollBusy = false
	
	const {data} = await useAsyncData(() => client.getSingle('navigation'))
	pages.value = data.value.data.links.map((l,i)=>{
		return {link: getLink(l.link), label: l.label, index: i, external: l.link.url}
	})

	function updateScroll(event,link){
		event.preventDefault()

		let offsetY = window.innerWidth < mobileWidth ? navHeight : -1
		section.value = link.index
		scrolling = true
		
		
		gsap.to(window,{
			duration:1,
			ease:'power3.inOut',
			scrollTo:{y:link.id,offsetY},
			onComplete:()=>(scrolling = false)
		})
	}
	
	function updateSections(){
		section.value = 0
		sections.value = !pagesStore.pages[route.path] 
		? []
		: pagesStore.pages[route.path].slices.filter(s => s.primary.label).map((s,i) =>{
			return {id: `#${s.id}`, label: s.primary.label, index: i}
		})
	}
	
	function updateTriggers(){
		triggers.forEach(t => t.kill())
		triggers = sections.value.map((s,i) => {
			return ScrollTrigger.create({
				trigger: s.id,
				start: 'top 50%',
				end: 'bottom 50%',
				onToggle:({isActive})=>{
					if(isActive && !scrolling){
						section.value = s.index
					}
				}  
			})
		})
	}
	
	function updatePages(){
		let p = pages.value.find(p => matchRoute(p.link, route.path))
		page.value = p ? p.index : -1
	}
	
	function toggleMobileNav(){
		open = !open
		if(open){
			setTimeout(()=>window.addEventListener('click',toggleMobileNav),100)
			document.documentElement.classList.add('menu-is-open','no-scroll')
		} else {
			window.removeEventListener('click',toggleMobileNav)
			document.documentElement.classList.remove('menu-is-open','no-scroll')
		}
	}
	
	function handleScroll(){
		if(scrollBusy || open || scrolling) return
		scrollBusy = true
		window.requestAnimationFrame(()=>{
			window.scrollY > navHeight && window.scrollY > lastScrollY
			? document.documentElement.classList.add('menu-is-hidden')
			: document.documentElement.classList.remove('menu-is-hidden')
			
			lastScrollY = window.scrollY
			scrollBusy = false
		})
	}
	
	watch(route,()=>{
		updatePages()
	})
	
	watch(loaded,(isLoaded) => {
		if(isLoaded){
			updateSections()
			updateTriggers()
		}
	})
	
	onMounted(()=>{
		window.addEventListener('scroll',handleScroll)
		handleScroll()
	})
	
	updatePages()
	updateSections()
	
</script>

<style>
	
	:root{
		--nav-duration:.5s;
		--nav-padding: 25px;
	}
	
	#c-nav{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		z-index:10;
		background: white;
		overflow:hidden;
		border-color: theme('colors.outline');
		border-style: solid;
		display: flex;
		flex-direction: column;
	}
	
	#c-nav .nav-button{
		position: fixed;
		top: 0;
		left:0;
		height: theme('height.nav-y');
		width: theme('height.nav-y');
	}
	
	#c-nav .nav-logo{
		flex: 0 0 auto;
		display:flex;
		justify-content: center;
	}
	
	#c-nav,
	#c-nav .nav-logo{
		height: theme('height.nav-y');
	}
	#c-nav .nav-logo a{
		padding: 10px;
	}
	#c-nav .nav-logo svg{
		height:100%;
	}
	
	#c-nav .nav-links-wrapper{
		flex: 1 1 auto;
		margin-top: var(--nav-padding);
		overflow: auto;
	}

	#c-nav .nav-sections{
		margin-top: 35px;
	}
	
	#c-nav .nav-links-label{
		font-size: 18px;
	}
	
	#c-nav .nav-links{
		margin-top: 10px;
	}
	
	#c-nav .nav-link-wrapper{
		display: flex;
		align-items: center;
	}
	
	#c-nav .nav-link-line{
		width: 10px;
		border-top: 1px solid theme('colors.outline');
	}
	
	#c-nav .nav-link{
		flex: 1 1 auto;
		padding: 0 10px;
		font-size: 35px;
		font-weight: 500;
	}
	
	#c-nav .nav-link span{
		display: block;
		width: 100%;
	}
	
	#c-nav .highlight-wrapper{
		position: absolute;
		left: 0;
		right:0;
		top: 0;
		z-index: -1;
		transition: transform .25s;
	}
	
	#c-nav .nav-pages .highlight{
		background: theme('colors.outline')
	}
	#c-nav .nav-sections .highlight{
		background: theme('colors.fp-lime')
	}
	
	#c-nav .nav-link-wrapper,
	#c-nav .highlight{
		height: 50px;
	}
	
	@media screen and (min-width: theme('screens.m')){
		
		#c-nav{
			height:100%;
			width: theme('width.nav-x');
			border-right-width: 1px;
		}
		
		#c-nav .nav-button{
			display: none;
		}
		
		#c-nav .nav-logo{
			height: auto;
			padding: var(--nav-padding);;
		}
		
		#c-nav .nav-logo a{
			width:100%;
			padding: 0;
		}
		
		#c-nav .nav-links-wrapper{
			margin:0px;
			padding: 0px var(--nav-padding) var(--nav-padding);
		}
		
		#c-nav .nav-sections{
			margin-top: var(--nav-padding);
		}
		
		#c-nav .nav-links-label{
			font-size: 14px;
		}
		
		#c-nav .nav-links::after{
			content:'';
			position: absolute;
			top:-.5rem;
			left:0;
			width:0;
			bottom: 18px;
			border-left: 1px solid theme('colors.outline');
		}
		
		#c-nav .nav-link{
			font-size: 25px;
		}
		
		#c-nav .nav-link-wrapper,
		#c-nav .highlight{
			height: 36px;
		}
		
		#c-nav .highlight-wrapper{
			left: 10px;
		}
		
		#c-nav .highlight{
			border-radius: 5px;
		}
	
	}
	
	@media screen and (max-width: theme('screens.m-max')){
		
		#c-nav{
			border-bottom-width: 1px;
			transition-property: height, transform ;
			transition-duration: var(--nav-duration);
		}
		
		#c-nav .nav-links-wrapper{
			text-align: center;
		}
		
		#c-nav .nav-link-wrapper{
			border-bottom: 1px solid theme('colors.outline')
		}
		#c-nav .nav-link-wrapper:first-child{
			border-top: 1px solid theme('colors.outline')
		}
		
		#c-nav .nav-links-label{
			opacity:0;
			transform: translateY(-50px);
		}
		
		#c-nav .highlight{
			transform-origin: center;
			transform: scaleX(0)
		}
		
		.menu-is-hidden #c-nav{
			transform: translateY(-100%);
		}
		
		#c-nav .nav-link-line{
			display: none;
		}
		
		#c-nav .nav-anim-item{
			opacity:0;
			transform: translateY(50px);
			transition-delay: var(--nav-duration);
		}
		
		.menu-is-open #c-nav{
			height:100%;
			transition-duration: .5s;
		}
		.menu-is-open #c-nav .nav-anim-item{
			transition-duration: .5s;
			transition-property: transform opacity;
			transform:translateY(0);
			transition-delay: calc(var(--delay) * 50ms);
			opacity: 1;
		}
		
		.menu-is-open #c-nav .highlight{
			transition-delay:calc(var(--delay) * 50ms + 250ms);
			transition-duration: .5s;
			transition-property: transform;
			transform:scaleX(1);
		}
		
		
		
		
		
	}
	
	
</style>