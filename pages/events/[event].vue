<template>
    <main class="min-h-screen">
        <template v-if="page">
            <header class="c-event-header relative px-gutters pt-10 mb-gutters">
                <Media absolute class="top-0 left-0 right-0 h-15" :src="page.background.url" :distance="200"/>
                <img :src="page.logo.url" alt="" class="w-30 max-w-full relative z-1 mx-auto">
            </header>
            <SliceZone :slices="page.slices" :components="components" />   
        </template>
    </main>
</template>

<script setup> 
    import { components } from '~/slices'
    import { useStore } from '@/stores'
    
    const {client} = usePrismic()
    const store = useStore()
    const {params} = useRoute()
    const page = ref(null)
    const id = params.event
    
    store.LOADING(true)
    
    if(!store.pages[id]){
        console.log(`fetching: ${id}`)
        const {data} = await useAsyncData(id,()=> client.getByUID('event',id))
        console.log(data.value)
        if(data.value) store.PAGE(data.value.data,id)
    }
    page.value = store.pages[id]
    
    onMounted(()=>store.LOADING(false))
    
</script>

<style lang="css">

</style>