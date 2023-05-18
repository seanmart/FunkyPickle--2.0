<template>
	<div class="s-events-empty border-outline bordered bg-white">
		<div class="flex-center h-24 relative overflow-hidden p-3">
			<div class="felx auto text-center relative z-1">
			  <h1 class="font-header text-3">No upcoming events at this time</h1>
			  <p class="mt-1 text-slate-400">check back soon for updates!</p>
			</div>
			<Ball v-for="ball,i in balls" :key="ball" class="w-5 h-5 absolute -top-5" :class="[ball,`ball-${i + 1}`]"/>
		</div>
	 </div>
</template>

<script setup>
	const balls = ['fill-fp-lime', 'fill-fp-pink','fill-fp-green','fill-fp-blue','fill-fp-turq']
	let anims = []
	let trigger = null
	const ease = 'none'

	onMounted(()=>{
		gsap.set('.s-events-empty .ball-1',{right:'100%'})
		gsap.set('.s-events-empty .ball-2',{left:'50%'})
		gsap.set('.s-events-empty .ball-3',{left:'100%',top:'100%'})
		gsap.set('.s-events-empty .ball-4',{left:'0%',top:'100%'})
		gsap.set('.s-events-empty .ball-5',{left:'70%'})
		
		anims.push(gsap.to('.s-events-empty .ball-1',{duration:2.1,top:'100%',right:'50%',ease,repeat:-1}))
		anims.push(gsap.to('.s-events-empty .ball-2',{duration:4.5,top:'100%',left:'10%',ease,repeat:-1}))
		anims.push(gsap.to('.s-events-empty .ball-3',{duration:3.2,top:'-5rem',left:'20%',ease,repeat:-1}))
		anims.push(gsap.to('.s-events-empty .ball-4',{duration:2.5,top:'-5rem',left:'100%',ease,repeat:-1}))
		anims.push(gsap.to('.s-events-empty .ball-5',{duration:1.8,top:'100%',left:'50%',ease,repeat:-1}))
		
		trigger = ScrollTrigger.create({
			trigger: '.s-events-empty',
			start: 'top bottom',
			end: 'bottom top',
			onToggle:({isActive})=>{
				anims.forEach(anim => isActive ? anim.play() : anim.pause())
			}
		})
	})
	
	onUnmounted(()=>{
		anims.forEach(anim => anim.kill())
		trigger.kill()
	})
</script>

<style scoped></style>