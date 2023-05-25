<template>
    <div id="columns" :class="classes.container">
        <div v-for="i in 6" :key="i" :class="classes.column" />
    </div>
</template>

<script setup>
    import classes from './classes'
</script>