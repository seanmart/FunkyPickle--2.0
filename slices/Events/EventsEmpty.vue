<template>
	<div ref="container" :class="[empty.container,{'is-paused':pause}]">
		<h2 :class="[empty.text,text.h2]">No upcoming events at this time</h2>
		<h5 :class="[empty.text,text.h5]">check back soon for updates!</h5>
		<div :class="empty.wrapper">
			<Ball v-for="ball,i in balls" :key="i" class="s-events-empty--ball" :class="empty.ball" :style="ball"/>
		</div>
	</div>
</template>

<script setup>
	import {randomInt,randomFloat} from '@/helpers'
	import {empty,text} from './classes'
	
	const container = ref(null)
	const balls = ref([])
	const pause = ref(false)
	let count = 10
	let anim = null
	
	
	for(let i = 0; i < count; i++){
		let ball = []
		let rand = randomInt(1,100)
		
		//left
		if (rand < 25){
			ball.push(`--start-left:-5rem`)
			ball.push(`--end-left:100%`)
			ball.push(`--start-top:${randomInt(-10,110)}%`)
			ball.push(`--end-top:${randomInt(-10,110)}%`)
		//top	
		} else if (rand < 51){
			ball.push(`--start-top:-5rem`)
			ball.push(`--end-top:100%`)
			ball.push(`--start-left:${randomInt(-10,110)}%`)
			ball.push(`--end-left:${randomInt(-10,110)}%`)
		//right
		} else if (rand < 76){
			ball.push(`--start-left:100%`)
			ball.push(`--end-left:-5rem`)
			ball.push(`--start-top:${randomInt(-10,110)}%`)
			ball.push(`--end-top:${randomInt(-10,110)}%`)
		//bottom
		} else {
			ball.push(`--start-top:100%`)
			ball.push(`--end-top:-5rem`)
			ball.push(`--start-left:${randomInt(-10,110)}%`)
			ball.push(`--end-left:${randomInt(-10,110)}%`)
		}
		
		ball.push(`animation-duration:${randomFloat(2,8)}s`)
		balls.value.push(ball.join(';'))
	}
	
	onMounted(()=>{
		anim = ScrollTrigger.create({
			trigger: container.value,
			start: 'top bottom',
			end: 'bottom top',
			onToggle:({isActive})=> (pause.value = !isActive)
		})
	})
	
	onUnmounted(()=>{
		anim && anim.kill()	
	})
	
</script>

<style>
	.s-events-empty--ball{
		animation-name: glideTopXY;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	
	.s-events-empty.is-paused .s-events-empty--ball{
		animation-play-state: paused;
	}
	
</style>