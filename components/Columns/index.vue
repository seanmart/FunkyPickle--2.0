<template>
    <div id="columns" :class="classes.container">
        <div :class="classes.wrapper">
            <div v-for="i in 20" :key="i" :class="classes.column" />
        </div>
    </div>
</template>

<script setup>
    import classes from './classes'
</script>