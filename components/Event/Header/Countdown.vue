<template>
	<div v-if="status == -1" class="text-center font-header font-bold uppercase text-2 leading-0.7 text-primary flex gap-0.3 w-18 max-w-full">
		<template v-for="unit,i in units">
			<h3 class="flex-none py-1" v-if="i">:</h3>
			<div class="flex-1">
				<div class="flex gap-0.2 mb-0.5">
					<div class="flex-1 py-1 h-3 bg-primary text-white rounded overflow-hidden relative" v-for="num in values[i]">
						<transition name="countdown">
							<span class="absolute inset-0 flex-center" :key="num">{{num}}</span>
						</transition>
					</div>
				</div>
				<h3 class="text-1">{{unit}}</h3>
			</div>
		</template>
	</div>
	
	<div v-else-if="status == 0" class="bg-red-500 text-white py-0.7 px-1.4 rounded">
		<h3 class="font-header font-bold uppercase text-2 leading-0.7">EVENT LIVE</h3>
	</div>
	
	<div v-else-if="status == 1" class="bg-primary text-white py-0.7 px-1.4 rounded">
		<h3 class="font-header font-bold uppercase text-2 leading-0.7">EVENT ENDED</h3>
	</div>
</template>

<script setup>
	import {toDate} from '@/helpers'
	const props = defineProps(['start','end'])
	
	const values = ref([])
	const dateStart = toDate(props.start)
	const dateEnd = toDate(props.end)
	const units = ['Days','Hours','Minutes','Seconds']
	const status = ref(-1)
	
	let interval = null
	let dateNow = Date.now()
	
	if(dateEnd <= dateNow){
	    status.value = 1
	}
	else if(dateStart <= dateNow){
		  status.value = 0
	} else {
		getDiff()
		interval = setInterval(getDiff,1000)
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
	}
</script>

<style>
	
	.countdown-enter-active,
	.countdown-leave-active {
	  transition: .5s ease;
	}
	
	.countdown-enter-from{
		transform: translateY(-100%)
	}
	.countdown-leave-to {
	  transform: translateY(100%)
	}
	
</style>