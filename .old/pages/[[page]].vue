<template>
    <main class="min-h-screen">
        <template v-if="page" :class="">
            <template v-for="item in page.items">
                
                <section v-if="item.slices" :id="item.id" :class="sectionClasses">
                    <component v-for="slice in item.slices" :slice="slice" :is="components[slice.slice_type]"/>
                </section>
                
                <Component :class="sectionClasses" v-else :slice="item" :is="components[item.slice_type]"/>
                
            </template>
        </template>
    </main>
</template>

<script setup> 
    import { components } from '~/slices'
    import { useStore } from '@/stores'
    import {sectionClasses} from '@/globalClasses'
    
    const {client} = usePrismic()
    const store = useStore()
    const {params,path} = useRoute()
    const page = ref(null)
    const id = params.page || 'home'
    
    store.LOADING(true)
    
    if(!store.pages[path]){
        const {data} = await useAsyncData(id,()=> client.getByUID('page',id))
        if(data.value) store.PAGE(data.value.data,path)
    }
    
    page.value = store.pages[path]
    
    onMounted(()=>store.LOADING(false))
    
    function getPageSections(){
        return []
    }

</script>

<style>
    
</style>