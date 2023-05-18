import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal',()=>{
	
	const content = ref([])
	const show = ref(false)
	const index = ref(0)
	
	return{content,show,index}
})