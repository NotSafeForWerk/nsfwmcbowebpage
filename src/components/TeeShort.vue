#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<script setup>
import { ref, computed } from 'vue';

import TeeData from './TeeData.json';

const maxItems = ref(4);

const displayedTshirts = computed(() => {
  return TeeData.slice(0, maxItems.value);
});
</script>


<template>
  <main>
    <div class="container p-4">
      <div class="row d-flex justify-content-center">
        <div v-for="(shirt, index) in displayedTshirts" :key="index" class="card m-2" style="width: 18rem;">
          <img class="card-img-top" :src="shirt.image" alt="Card image cap object-fit-fill">
          <div class="card-body">
            <h5 class="card-title">{{ shirt.title }}</h5>
            <p class="card-text">Precio: <strong>{{ '$' + shirt.price }}</strong></p>
            <div class="card-footer text-center">
            </div>
          </div>
          <RouterLink class="btnSiplhes" :to="`/teedetails?id=${shirt.id}`">Mas detalles</RouterLink>
   
        </div>
        <div class="mx-auto d-flex justify-content-center text-center p-2">
          <RouterLink class="btnSiplhes" to="/Tshirts">Ver mas diseños</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>


<style>
.card {
  background-color: #1d1d1d;
  color: #fefffa;
}
#lastDesigns{
  color: #fefffa;
}
</style>