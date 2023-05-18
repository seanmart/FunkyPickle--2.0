<template>
    <main class="min-h-screen">
         <SliceZone v-if="page" :slices="page.slices" :components="components" />
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

<style>
    
</style>