<template>
    <footer id="footer">
        <div :class="classes.wrapper" class="footer--content text-white">
            <SVG name="logo" class="block w-10 mb-1"/>
            <nav>
                <ul class="flex">
                    <li v-for="page in store.navigation">
                        <NuxtLink class="px-1 font-header text-1.5" :to="page.link" :target="page.external ? '_blank' : null">{{page.label}}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script setup>
    import {useStore} from '@/stores'
    import classes from './classes'
    
    const store = useStore()
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