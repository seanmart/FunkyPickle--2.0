<template>
    <main class="min-h-screen">
        <template v-if="page">
            <header class="c-event-header relative px-gutters pt-10 mb-gutters">
                <Media class="absolute top-0 left-0 right-0 h-15" :src="page.background.url" :distance="200"/>
                <img :src="page.logo.url" alt="" class="w-30 max-w-full relative z-1 mx-auto">
            </header>
            <SliceZone :slices="page.slices" :components="components" />   
        </template>
    </main>
</template>

<script setup> 
    import { components } from '~/slices'
    import { useAPI } from '@/stores/api'
    import { useStore } from '@/stores'
    
    const store = useStore()
    const {client} = usePrismic()
    const api = useAPI()
    const {params,path} = useRoute()
    
    store.LOADING(true)
    
    const {data:page,error} = await useAsyncData(()=> api.GET_PAGE('event',params.event,path))
    if(error.value) throw showError({statusCode:404, fatal: true})
    
    onMounted(()=>store.LOADING(false))
    
</script>

<style lang="css">

</style>