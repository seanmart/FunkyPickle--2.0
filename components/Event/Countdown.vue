<template>
	<div class="text-0.6 m:text-0.7 event-countdown overflow-hidden" v-if="render">
		<div class="inline-flex gap-0.8 m:gap-1 px-0.8 m:px-1 leading-2.2 rounded bg-slate-200 mb-1">
			<template v-for="unit in units">
				<div class="event-countdown-unit flex items-center overflow-hidden relative">
					<h5 class="mr-1 m:mr-1.2">{{unit.label}}:</h5>
					<transition name="countdown">
					<h5 :key="values[unit.key]" class="font-bold absolute top-0 right-0 bottom-0">{{values[unit.key]}}</h5>
					</transition>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
	import {toDate} from '@/helpers'
	const props = defineProps(['start'])
	
	const render = ref(true)
	const dateStart = Date.parse(toDate(props.start)) + 1000 * 60 * 60 * 8 
	const values = ref({days:0,hours:0,minutes:0,seconds:0})
	
	const units = [
		{label:'Days',key:'days'},
		{label:'Hours',key:'hours'},
		{label:'Minutes',key:'minutes'},
		{label:'Seconds',key:'seconds'}
	]
	
	let interval = null
	let dateNow = Date.now()
	
	if(dateNow < dateStart){
		getDiff()
		interval = setInterval(getDiff,1000)
	} else {
		render.value = false
	}
	
	onBeforeUnmount(()=>{
		interval && clearInterval(interval)
	})
	
	function formatNum(num){
		return num.toLocaleString('en-US',{minimumIntegerDigits:2})
	}
	
	function getDiff(){
		dateNow = Date.now()
		let delta = Math.max((dateStart - dateNow) / 1000,0)
		let days = formatNum(Math.floor(delta / 86400))
		delta -= days * 86400
		let hours = formatNum(Math.floor(delta / 3600) % 24)
		delta -= hours * 3600 
		let minutes = formatNum(Math.floor(delta / 60) % 60)
		delta -= minutes * 60 
		let seconds = formatNum(Math.floor(delta % 60))
		
		values.value = {delta,days,minutes,hours,seconds}
		if(!delta) hideCountdown()
	}
	
	function hideCountdown(){
		clearInterval(interval)
		gsap.timeline({onComplete:()=> render.value = false})
		.to('.event-countdown-unit',{duration:.25,stagger:.1,y:'-100%'})
		.to('.event-countdown',{duration:.5,height:0})
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
	
</style>