<template>
    <main class="min-h-screen">
         <SliceZone v-if="page" :slices="page.slices" :components="components" />
    </main>
</template>

<script setup> 
    import { components } from '~/slices'
    import { useStore } from '@/stores'
    
    const {client} = usePrismic()
    const store = useStore()
    const {params,path} = useRoute()
    const page = ref(null)
    const id = params.page || 'home'
    
    store.LOADING(true)
    
    if(!store.pages[id]){
        console.log(`fetching: ${id}`)
        const {data} = await useAsyncData(()=> client.getByUID('page',id))
        console.log(data.value)
        if(data.value) store.PAGE(data.value.data,id)
    }
    
    page.value = store.pages[id]
    
    onMounted(()=>store.LOADING(false))

</script>

<style>
    
</style>