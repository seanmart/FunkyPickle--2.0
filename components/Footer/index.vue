<template>
    <footer id="footer">
        <div :class="classes.wrapper" class="footer--content">
            <SVG name="logo" class="w-10"/>
        </div>
    </footer>
</template>

<script setup>
    import classes from './classes'
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