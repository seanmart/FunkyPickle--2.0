import {useLoadingStore} from '@/stores/loading'

export default defineNuxtRouteMiddleware((to, from) => {
	if(from.fullPath == to.fullPath) return
	const store = useLoadingStore()
	return new Promise((cb)=>store.TRANSITION(true,cb))
})