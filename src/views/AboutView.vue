<script setup>
import AboutUs from '../components/AboutMe.vue';
import OurContact from '../components/OurContact.vue';
</script>

<template>
<AboutUs />
<OurContact />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
