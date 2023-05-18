<template>
    <div class="absolute inset-0 -z-1 flex px-gutters">
        <div v-for="i in 6" :key="i" class="w-1/2 s:w-1/3 d:w-1/6 bordered border-outline" />
    </div>
</template>

<script setup>

</script>

<style>
    .column{
    height: calc(100% + 2px);
    }
</style>