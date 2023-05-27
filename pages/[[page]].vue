<template>
    <main class="min-h-screen">
         <SliceZone v-if="page" :slices="page.slices" :components="components" />
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
    
    const {data:page,error} = await useAsyncData(()=> api.GET_PAGE('page',params.page || 'home',path))
    if(error.value) throw showError({statusCode:404, fatal: true})
    
    onMounted(()=>store.LOADING(false))

</script>

<style>
    
</style>