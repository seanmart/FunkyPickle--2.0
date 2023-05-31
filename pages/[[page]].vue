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
    const id = params.page || 'home'
    
    store.LOADING(true)
    
    if(!store.pages[id]){
        const {client} = usePrismic()
        const {data} = await useAsyncData(()=> client.getByUID('page',id))
        if(data.value) store.PAGE(data.value.data,id)
    }
    
    console.log({path,store})
    
    page.value = store.pages[id]
    
    onMounted(()=>store.LOADING(false))

</script>

<style>
    
</style>