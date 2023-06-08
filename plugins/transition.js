import {useStore} from '@/stores'
import {storeToRefs} from 'pinia'

export default defineNuxtPlugin(()=>{
	
	const store = useStore()
	const {loaded} = storeToRefs(store)

	watch(loaded,(l)=>{
		gsap.timeline({onComplete:()=> (store.ready = Date.now())})
			.to('#transition',{y:'-100%', duration:.5, ease: 'power2.in'})
			.set(['#transition','#page'],{clearProps:'all'})
	})
	
	addRouteMiddleware('transition',(to,from)=>{

		if(process.server || from.path == to.path) return
		return new Promise((next)=>{
			gsap.timeline({onComplete:next})
			.set('#transition',{display:'block',y:'100%'})
			.to('#transition',{y:'0%', duration:.5, ease: 'power2.out'})
		})
	},{ global: true })
})