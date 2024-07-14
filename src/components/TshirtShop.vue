#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<script setup>
import { ref, computed } from 'vue';
import TeeData from './TeeData.json';

const maxItems = ref(50);
const displayedTshirts = computed(() => {
  return TeeData.slice(0, maxItems.value);
});
</script>

<template>
  <main>
    <div class="mx-auto text-center my-4">
          <h1>T-SHIRTS</h1>
        </div>
    <div class="container shopContainer rounded">
      <div class="row d-flex justify-content-center">

        <div v-for="(shirt, index) in displayedTshirts" :key="index" class="card teecard m-2 text-center">
          <img class="card-img-top" :src="shirt.image" 
          :alt="`Taza de cafe personalizada con el diseño ${shirt.title}`">
          <div class="card-body">
            <h5 class="card-title">{{ shirt.title }}</h5>
            <p class="card-text">Precio: <strong>{{ '$' + shirt.price }}</strong></p>
          </div>
          <RouterLink class="btnSiplhes mb-4 stretched-link" :to="`/tshirt?id=${shirt.id}`">Mas detalles</RouterLink>
          <a class="stretched-link" :href="`/tshirt?id=${shirt.id}`"></a>
        </div>
      </div>
      <div class="mx-auto text-center my-4">
        <RouterLink class="btnSiplhes mb-3" to="/">Volver</RouterLink>
      </div>
    </div>
  </main>
</template>

<style>
#shop-menu{
  background-color: #fefffa;
  color: #111;
}
.card {
  background-color: #111;
  color: #fefffa;
}
h1{
  color: #fefffa;
}
/** Hacer que los items de la tienda sean pequeños cuando la pantalla baja de 500px */
.teecard{
  width: 23rem;
}

@media only screen and (max-width: 800px) {
  .teecard{
  width: 13rem;
  }
}
</style>