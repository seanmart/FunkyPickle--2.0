import {useStore} from '@/stores'
import {storeToRefs} from 'pinia'

export default defineNuxtPlugin(()=>{
	
	const store = useStore()
	const {loaded} = storeToRefs(store)
	
	let first = true

	watch(loaded,(l)=>{
		let start = first ? .5 : 0
		gsap.timeline({onComplete:()=> (store.ready = Date.now())})
			.to('#transition',{y:'-100%', duration:1, ease: 'expo.inOut'},start)
			.set(['#transition'],{y:0,display:'none'},'>')
		
		first = false
	})
	
	addRouteMiddleware('transition',(to,from)=>{

		if(process.server || from.path == to.path) return
		return new Promise((next)=>{
			gsap.timeline({onComplete:next})
			.set('#transition',{display:'block',y:'100%'})
			.to('#transition',{y:'0%', duration:1, ease: 'expo.inOut'})
		})
	},{ global: true })
})