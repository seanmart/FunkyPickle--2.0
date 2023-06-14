<template>
	<section :class="classes.container" v-if="render">
		<div :class="classes.wrapper">
			<template v-for="unit,i in units">
				<div :class="classes.unit.bar" v-if="i"/>
				<div :class="[classes.unit.container,headingClasses.noSize]">
					<h5 :class="classes.unit.label">{{unit.label}}:</h5>
					<transition name="countdown">
					<h5 :key="values[unit.key]" :class="classes.unit.value">{{values[unit.key]}}</h5>
					</transition>
				</div>
			</template>
		</div>
	</section>
</template>

<script setup>
	import {toDate} from '@/helpers'
	const props = defineProps(['start'])
	import {countdown as classes} from './classes'
	import {headingClasses} from '/globalClasses'
	
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
	
	onMounted(()=>{
		window.addEventListener('visibilitychange',handleVisibility)
	})
	
	onBeforeUnmount(()=>{
		window.removeEventListener('visibilitychange',handleVisibility)
		interval && clearInterval(interval)
	})
	
	function handleVisibility(e){
		document.visibilityState === "visible"
		? (getDiff(), interval = setInterval(getDiff,1000))
		: clearInterval(interval)
	}
	
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
		.to('.event-countdown',{duration:.5,height:0,padding:0})
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