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
    import { usePagesStore } from '@/stores/pages'
    import { useLoadingStore } from '@/stores/loading'
    
    const pagesStore = usePagesStore()
    const loadingStore = useLoadingStore()
    const {path} = useRoute()
    const page = ref(null)
    
    if(!pagesStore.pages[path]) await useAsyncData(pagesStore.FETCH)
    page.value = pagesStore.pages[path]
    
    loadingStore.LOADING(true)
    onMounted(()=>loadingStore.LOADING(false))
    
</script>

<style lang="css">

</style>