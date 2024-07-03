<template>
    <div class="d-flex justify-content-center flex-column text-center text-light p-5">
        <h1 data-translate>Portafolio</h1>
        <p data-translate>Mira todos los proyectos en el que estamos orgullosos de trabajar</p>
    </div>
    <MyCarousel />
</template>
<script setup>
import MyCarousel from '../components/FirstCarousel.vue'
</script>

<style>
div.text-center {
    text-align: center;
}
</style>
