<template>
    <footer id="footer">
        <div :class="classes.wrapper" class="footer--content text-white">
            
            <SVG name="logo" class="block w-8 mb-1"/>
                
            <!-- <nav class="flex">
                <NuxtLink 
                    v-for="page in pages"
                    class="px-1 font-header text-1.4" 
                    :to="page.link" 
                    :target="page.external ? '_blank' : null"
                >
                {{page.label}}
                </NuxtLink>
            </nav> -->
                
        </div>
    </footer>
</template>

<script setup>
    import {useStore} from '@/stores'
    import classes from './classes'
    
    const store = useStore()
    const pages = ref([])
    
    onMounted(()=>{
        pages.value = store.navigation
    })
    
</script>

<style type="css">
    #footer{
        --footer-height: 20rem;
        height: var(--footer-height)
    }
    
    #footer .logo-border,
    #footer .logo-bg{
        fill: none;
    }
    
    #footer .logo-outline,
    #footer .logo-letters,
    #footer .logo-ball{
        fill: white;
    }
    
    
    .has-clip-path #footer{
        clip-path: polygon(0 0,100% 0,100% calc(var(--footer-height) + 250px),0 calc(var(--footer-height) + 250px))
    }
    .has-clip-path #footer .footer--content{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: calc(var(--footer-height) + 250px);
        padding-top: 250px; 
    }
    
    @media screen and (min-width: theme('screens.t')){
        .has-clip-path #footer .footer--content{
            left: theme('spacing.nav-x');
        }
    }
</style>