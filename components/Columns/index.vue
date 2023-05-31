<template>
    <div id="columns" :class="classes.container">
        <div :class="classes.wrapper">
            <div v-for="i in 12" :key="i" :class="[classes.column,i > 6 && 'hidden w:block']" />
        </div>
    </div>
</template>

<script setup>
    import classes from './classes'
</script>