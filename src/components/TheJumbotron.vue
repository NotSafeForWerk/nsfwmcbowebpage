<script setup>
import designIcon from './icons/designIcon.vue';
import codeIcon from './icons/codeIcon.vue';
import devIcon from './icons/devIcon.vue';
</script>

<template>
  <div>
    <section id="services" class="container-fluid text-center p-4">
      <div class="container text-center d-inline-flex flex-column align-items-center justify-content-center m-auto reveal">
        <h1 data-translate>Te ofrecemos servicios</h1>
        <p data-translate class="lead">En zStudios, descubre soluciones de alta calidad a precios competitivos. Explora nuestros servicios y ponte en
          contacto para transformar tu imaginación en realidad</p>
      </div>
      <div class="row px-3">
        <div class="col-md-4">
          <div class="card m-2 p-3 reveal">
            <div class="icon d-flex justify-content-center">
              <designIcon />
            </div>
            <h4 data-translate class="card-title">Diseño Gráfico</h4>
            <p data-translate>En nuestros servicios de diseño gráfico, ofrecemos mentes frescas y creativas para brindarte una experiencia innovadora y única. No solo te invitamos a apreciar nuestra perspectiva innovadora, sino también a ver tus propias ideas ejecutadas de manera excepcional.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card m-2 p-3 reveal">
            <div class="icon d-flex justify-content-center">
              <codeIcon />
            </div>
            <h4 data-translate class="card-title">Diseño Web</h4>
            <p data-translate>Te proporcionamos nuestra experiencia en desarrollo web para que puedas materializar tu propio sitio web personalizado, tal como lo imaginaste en tu mente. Utilizamos las herramientas web más avanzadas para ofrecerte una experiencia de usuario excepcional y una velocidad óptima.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card m-2 p-3 reveal">
            <div class="icon d-flex justify-content-center">
              <devIcon />
            </div>
            <h4 data-translate class="card-title">Desarrollo</h4>
            <p data-translate class="card-text">Uno de nuestros principales objetivos es promover el crecimiento profesional, académico y personal, no solo de nuestros empleados, sino también de nuestros clientes. Estamos comprometidos a proporcionar todas las herramientas necesarias para ayudarte a desarrollar tus ideas de manera efectiva y exitosa.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="art-weapons" class="container-fluid text-center p-5">
      <div class="d-flex align-items-center justify-content-center">
        <h1 class="mb-3 mt-5 text-center" data-translate>EL ARTE ES EL ARMA</h1>
      </div>
      <h5 mb-5 data-translate>Y todas estas armas están hechas para explorar la creatividad del ser humano.</h5>
    </section>
  </div>
</template>

<script>

</script>
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
  color: #212427;
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
</style>
