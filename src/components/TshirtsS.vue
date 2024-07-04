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
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div>
          <h1>Diseños</h1>
        </div>
        <div v-for="(shirt, index) in displayedTshirts" :key="index" class="card m-2 text-center "
          style="width: 18rem;">
          <img class="card-img-top" :src="shirt.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ shirt.title }}</h5>
            <p class="card-text">Precio: <strong>{{ '$' + shirt.price }}</strong></p>
            <div class="card-footer text-center">
            </div>

          </div>
          <a :href="`/teedetails?id=${shirt.id}`" class="btn btn-secondary stretched-link">Más detalles</a>
        </div>
      </div>
      <div class=" d-flex jusrtify-content-center text-center">
        <a href="/" class="btn btnSiplhes" role="button" data-translate>Volver</a>
      </div>
    </div>
  </main>
</template>


<style>
.card {
  background-color: #1d1d1d;
  color: #fefffa;
}

h1 {
  color: #fefffa;
}
</style>