import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading',()=>{
	
	let pending = 0

	//STATE
	const ready = ref(false)
	const loaded = ref(false)
	const first = ref(true)
	
	//ACTIONS
	function LOADING(loading){
		pending += loading ? 1 : -1
		if(!pending){
			loaded.value = true
			TRANSITION(false,()=> (ready.value = true))
		}
	}
	
	function TRANSITION(on,cb){
		if (on){
			
			ready.value = false
			loaded.value = false
			first.value = false
			
			gsap.timeline({onComplete:cb})
			.set('#transition',{display:'block',y:'100%'})
			.to('#transition',{y:'0%', duration:.5, ease: 'power2.out'})
			
		} else {
			
			gsap.timeline({onComplete:cb})
			.to('#transition',{y:'-100%', duration:.5, ease: 'power2.in'})
			.set('#transition',{clearProps:'all'})
			
		}
	}
	
	
	
	return{loaded,first,ready,LOADING,TRANSITION}
})