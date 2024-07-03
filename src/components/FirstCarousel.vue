<template>
  <main class="jumbotron">
    <div id="portfolioCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div 
          v-for="(projectItem, index) in projects"
          :key="index"
          :class="{ 'carousel-item': true, active: index === 0 }"
          :style="{ backgroundImage: 'url(' + projectItem.image + ')' }"
          class="project-item"
        >
          <div class="carousel-caption">
            <h3>{{ projectItem.title }}</h3>
            <p data-translate>{{ projectItem.description }}</p>
            <RouterLink data-translate="" class="btnSiplhes RouterLink" :to="projectItem.url">Más información</RouterLink>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#portfolioCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#portfolioCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </a>
    </div>
  </main>
</template>
<script>

</script>

<script setup>
import { RouterLink } from 'vue-router'
const projects = [
{
    title: 'Not Safe For Work',
    description: 'Branding para Not Safe For Work Clothing: Estudio creativo de estilo unico y atrevido que diseña prendas no aptas para el trabajo',
    image: 'https://i.imgur.com/qWzXZBK.png',
    url: '/NSFWClothing'
  },{
    title: 'Trippy Clothes',
    description: 'Branding para Trippy Clothes: Elevando la tienda en línea para personas geniales que abrazan el estilo y la aventura',
    image: 'https://i.ibb.co/Tg8t8KY/trippy-item.webp',
    url: '/trippy'
  },
  {
    title: 'KeyCapz',
    description: 'Branding y Desarrollo de Sitio Web para Keycapz: Creando teclas únicas para entusiastas de teclados personalizados en Venezuela',
    image: 'https://i.ibb.co/djpqcT4/keycapz-item.webp',
    url: '/keycapz'
  },

];
</script>

<style scoped>
main {
  height: 60vh;
}

.carousel-caption {
  background-color: #111111e0;
  color: white;
}

.project-item {
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
