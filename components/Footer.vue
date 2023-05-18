<template>
    <footer id="footer" class="h-20">
        <div class="content bg-black text-white h-full flex-center">
        content
        </div>
    </footer>
</template>

<script setup>

</script>

<style>
    .has-clip-path #footer{
        clip-path: polygon(0 0,0 200%,200% 100%,100% 0)
    }
    .has-clip-path #footer .content{
        position: fixed;
        left: 0;
        right: 0px;
        bottom: -10rem;
        height: 40rem;
    }
    
    @media screen and (min-width: theme('screens.s')){
        .has-clip-path #footer .content{
            left: theme('spacing.nav-x');
        }
    }
</style>