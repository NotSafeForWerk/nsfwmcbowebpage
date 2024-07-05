#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<script setup>
import designIcon from './icons/designIcon.vue';
import codeIcon from './icons/codeIcon.vue';
import devIcon from './icons/devIcon.vue';
import TeeShort from './TeeShort.vue';
</script>

<template>

  <div>
    <section id="services" class="container-fluid text-center p-4">
      <div class="container text-center d-inline-flex flex-column align-items-center justify-content-center m-auto reveal">
        <h1 N>Te ofrecemos servicios</h1>
        <p N class="lead">En zStudios, descubre soluciones de alta calidad a precios competitivos. Explora nuestros servicios y ponte en
          contacto para transformar tu imaginación en realidad</p>
      </div>
      <div class="row px-3 mx-3">
        <div class="col-md-4">
          <div class="card qualityCard m-2 p-3 reveal">
            <div class="icon d-flex justify-content-center">
              <designIcon />
            </div>
            <h4 N class="card-title">Calidad</h4>
            <p N>Una de nuestras reglas de oro es ofrecer al cliente la mejor calidad que podamos encontrar al mejor precio, como nuestras franelas de 100% algodon o nuestras tazas de ceramica de alta durabilidad</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card desingCard m-2 p-3 reveal">
            <div class="icon d-flex justify-content-center">
              <codeIcon />
            </div>
            <h4 N class="card-title">Diseño</h4>
            <p N>Somos entusiastas con el diseño, creemos que los diseños que andan por ahi en las calles e internet ya estan un poco desactualizados y creemos que lo mejor que podemos hacer es mostrar al mundo el lado "not safe for work"</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card m-2 p-3 reveal">
            <div class="icon d-flex justify-content-center">
              <devIcon />
            </div>
            <h4 N class="card-title">Personalizacion</h4>
            <p N class="card-text">¡Ojo! No te quedes con lo que te muestran nada mas, si en tu mente yace un diseño que moririas por ver en una prenda o en algun objeto pues cuentanos pues esa es la base de este negocio, la personalizacion</p>
          </div>
        </div>
      </div>
    </section>
    <TeeShort/>

    <section id="art-weapons" class="container-fluid text-center p-4">
      <div class="d-flex align-items-center justify-content-center">
        <h1 id="slogan" class="text-center" N>EL ARTE ES EL ARMA</h1>
      </div>
      <h5 mb-5 N>Y todas estas armas están hechas para explorar la creatividad del ser humano.</h5>
    </section>
  </div>


</template>

<style scoped>
#services {
  background-color: #111;
  color: #fefffa;
  height: auto;
  text-align: center;

  & h1 {
    text-align: center;
  }
}
#art-weapons{
  background-color: #fefffa;
  color: #111;
}

.lead {
  font-size: medium;
}

.icon {
  font-size: 25px;
  margin-bottom: 20px;
  color: #fefffa;
}

@media (max-width: 767px) {
  #services {
    padding: 40px 0;
  }

  .icon {
    font-size: 28px;
  }
}

.carousel-icons {
  display: flex;
  overflow: hidden;
  font-size: 35px !important;
}

.carousel-icons i {
  margin-right: 30px !important;
  opacity: 0.5;
  transition: transform 0.5s, opacity 0.5s;
}

.carousel-icons i:hover {
  opacity: 1;
  transform: scale(1.2);
}
#slogan{
  color: #111;
}
.card{
  background-color: #1d1d1d;
}
</style>
