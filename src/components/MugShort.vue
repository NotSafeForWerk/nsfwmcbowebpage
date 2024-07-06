#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<script setup>
import { ref, computed } from 'vue';
import MugData from './MugData.json';
import { RouterLink } from 'vue-router';
const maxItems = ref(50);
const displayedMugs = computed(() => {
  return MugData.slice(0, maxItems.value);
});
</script>

<template>
  <main>
    <div class="mx-auto text-center my-4">
          <h1>TAZAS</h1>
        </div>
    <div class="container shopContainer rounded">
      <div class="row d-flex justify-content-center">

        <div v-for="(mug, index) in displayedMugs" :key="index" class="card teecard m-2 text-center">
          <img class="card-img-top" :src="mug.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ mug.title }}</h5>
            <p class="card-text">Precio: <strong>{{ '$' + mug.price }}</strong></p>
          </div>
          <RouterLink class="btnSiplhes mb-4 stretched-link" :to="`/teedetails?id=${mug.id}`">Mas detalles</RouterLink>
          <a class="stretched-link" :href="`/mug?id=${mug.id}`"></a>
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