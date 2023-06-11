<template>
	<section v-if="render" class="countdown-container overflow-hidden bg-primary text-white">
		<div class="py-2 margins gutters-x">
			
			<div class="countdown-content flex justify-center font-header font-bold uppercase leading-0.7 text-center">
				<template v-for="unit,i in units">
					
					<div class="flex-none text-center">
						
						<div class="flex countdown-boxes">
							<div v-for="num in values[i]" class="countdown-box bg-white/20 overflow-hidden relative rounded">
								<transition name="countdown">
									<span class="absolute inset-0 flex-center" :key="num">{{num}}</span>
								</transition>
							</div>
						</div>
						
						<h3 class="countdown-unit">{{unit}}</h3>
					</div>
					
				</template>
			</div>
			
		</div>
	</section>
</template>

<script setup>
	import {toDate} from '@/helpers'
	const props = defineProps(['start'])
	
	const values = ref([])
	const dateStart = Date.parse(toDate(props.start)) + 1000 * 60 * 60 * 8 
	const units = ['Days','Hours','Minutes','Seconds']
	const render = ref(true)
	
	let interval = null
	let dateNow = Date.now()
	
	console.log(dateStart)
	
	if(dateNow < dateStart){
		getDiff()
		interval = setInterval(getDiff,1000)
	} else {
		render.value = false
	}
	
	onBeforeUnmount(()=>{
		interval && clearInterval(interval)
	})
	
	function pad(num){
		return ('0' + num).slice(-2)
	}
	
	function getDiff(){
		dateNow = Date.now()
		let delta = (dateStart - dateNow) / 1000
		let days = pad(Math.floor(delta / 86400))
		delta -= days * 86400
		let hours = pad(Math.floor(delta / 3600) % 24)
		delta -= hours * 3600 
		let minutes = pad(Math.floor(delta / 60) % 60)
		delta -= minutes * 60 
		let seconds = pad(Math.floor(delta % 60))
		let time = `${days}:${hours}:${minutes}:${seconds}`
		
		values.value = time.split(':').map(i => i.split(''))
		
		if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
			clearInterval(interval)
			gsap.to('.countdown-container',{duration:.5,height:0,delay:1, onComplete:()=>{
				render.value = false
			}})
		}
	}
</script>

<style>
	
	.countdown-enter-active,
	.countdown-leave-active {
	  transition: 1s ease;
	}
	
	.countdown-enter-from{
		transform: translateY(-100%)
	}
	.countdown-leave-to {
	  transform: translateY(100%)
	}
	
	.countdown-content{
		font-size: calc(8px + 2vw);
		gap: 1em; 
	}
	
	.countdown-boxes{
		gap: .15em;
	}
	
	.countdown-box{
		height: 3em;
		width: 2em;
	}
	
	.countdown-box span{
		font-size: 2em;
	}
	
	.countdown-unit{
		margin-top: .5em;
		font-size: 1em;
	}
	
	@media screen and (min-width:theme('screens.m')){
		
		.countdown-content{
			font-size: 1.2rem;
		}
	}
	
</style>