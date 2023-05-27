<template>
    <main class="min-h-screen">
         <SliceZone v-if="page" :slices="page.slices" :components="components" />
    </main>
</template>

<script setup> 
    import { components } from '~/slices'
    import { useStore } from '@/stores'
    
    const store = useStore()
    const {params,path} = useRoute()
    const page = ref(null)
    
    store.LOADING(true)
    
    if(!store.pages[path]){
        const {client} = usePrismic()
        const {data} = await useAsyncData(()=> client.getByUID('page',params.page || 'home'))
        if(data.value) store.PAGE(data.value.data,path)
    }
    page.value = store.pages[path]
    
    onMounted(()=>store.LOADING(false))

</script>

<style>
    
</style>