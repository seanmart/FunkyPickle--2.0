<template>
    <footer id="footer">
        <div class="footer--content bg-black text-white h-full flex-center">
        content
        </div>
    </footer>
</template>

<script setup>

</script>

<style>
    #footer{
        --footer-height: 20rem;
        height: var(--footer-height)
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