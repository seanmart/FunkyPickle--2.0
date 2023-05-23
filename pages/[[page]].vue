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
    
    if (!store.pages[path]){
        let {data} = await useAsyncData(()=> client.getByUID('page',params.page || 'home'))
        store.PAGE(data.value.data,path)
    }
    
    page.value = store.pages[path]
    store.LOADING(true)
    onMounted(()=>store.LOADING(false))
    
</script>

<style>
    
</style>