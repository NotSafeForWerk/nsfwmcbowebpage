#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
#Coded by Joe "Siplhes" Hurtado

<script setup>
import { ref, computed } from 'vue';
import TeeData from './TeeData.json';
import MugData from './MugData.json';  // Asegúrate de importar el archivo JSON correcto

const maxItems = ref(4);

const combinedData = [...TeeData, ...MugData];

// Función para convertir la fecha a un objeto Date
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(year, month - 1, day);
};

// Ordenar los datos combinados por fecha en orden descendente
const sortedData = combinedData.sort((a, b) => parseDate(b.date) - parseDate(a.date));

const displayedItems = computed(() => {
  return sortedData.slice(0, maxItems.value);
});
</script>

<template>
  <main>
    
    <div class="container py-2">
      <div class="row d-flex justify-content-center">
        <h1 id="slogan" class="text-center" N>Ultimos productos</h1>
        <div v-for="(shirt, index) in displayedItems" 
        :key="index" class="card m-1 col-l-5" style="width: 20rem;">
          <img class="card-img-top" :src="shirt.image" 
          :alt="`Taza de cafe personalizada con el diseño ${shirt.title}`">
          <div class="card-body">
            <h5 class="card-title">{{ shirt.title }}</h5>
            <p class="card-text">Precio: <strong>{{ '$' + shirt.price }}</strong></p>
          </div>
          <RouterLink class="btnSiplhes mb-3" :to="`/tshirts?id=${shirt.id}`">Mas detalles</RouterLink>
          <a class="stretched-link" :href="`/tshirt?id=${shirt.id}`"></a>
        </div>
        <div class="mx-auto text-center">
          <RouterLink class="btnSiplhes my-3" to="/Tshirts">Ver mas diseños</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.card {
  background-color: #111;
  color: #fefffa;
}
#lastDesigns{
  color: #fefffa;
}
</style>