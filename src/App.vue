#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<script setup>
import {RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import FooterView from './components/FooterView.vue'
</script>

<template>
  <main>
    <loading-spinner v-if="loading" />
    <MainNav />
    <RouterView />
  </main>
  <FooterView/>
</template>

<script>
export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: true, // Mostrar la animación de carga al principio
    };
  },
  created() {
    // Simula una carga asíncrona (puedes reemplazar esto con tu propia lógica)
    setTimeout(() => {
      this.loading = false; // Oculta la animación de carga cuando todos los elementos estén cargados
    }, 500); // Cambia esto a la duración real de tu carga
  },
};
</script>