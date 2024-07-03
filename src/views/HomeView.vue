<script setup>
import MyJumbotron from '../components/TheJumbotron.vue'
import OurContact from '../components/OurContact.vue'
</script>

<template>
  <main>
    <section id="welcomeSection"
      class="container-fluid text-center p-4 d-flex align-content-center justify-content-center">
      <css-doodle class="d-none d-sm-none d-md-block" use="var(--rule)"></css-doodle>
      <div id="zstudiosData" class="row d-flex align-self-center ">
        <div class="col-sm-3 col-md-6 col-lg-6">
          <img id="zStudiosLogo" height="500" alt="zStudios Logo" class="img-fluid" src="https://i.imgur.com/vfSHhVr.png">
        </div>
        <div class="col-sm-3 col-md-6 col-lg-5 text-light">
          <h1 id="zStudiosTitle" class="title">
            <span class="m-1">Not Safe</span>
            <span class="m-1">For Work</span>
          </h1>
          <h2><span data-translate>Diseño</span>
            <span data-translate class="m-1">y</span>
            <span data-translate class="m-1">Desarrollo</span>
            <span data-translate class="m-1">a</span>
            <span data-translate class="m-1">tus</span>
            <span data-translate class="m-1">manos</span>
          </h2>
          <a href="/projects" class="btn btnSiplhes" role="button" data-translate>Ver mas</a>
        </div>
      </div>
    </section>
    <MyJumbotron />
    <OurContact />
  </main>
</template>

<style>
#zstudiosData {
  position: absolute;
  z-index: 1;
}

#zStudiosLogo {
  height: 40vh;

}

#zStudiosTitle {
  font-size: xxx-large !important;
}

#welcomeSection {
  height: 90vh;
  margin: 0;
  background: #14171a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  contain: content;
  overflow: clip;
  /*maybe this help*/

}

#welcomeSection .h1, #welcomeSection
h4 {

  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

/** doodle**/
css-doodle {
  --color: @p(#d82d20, #1f1f1f, #6b6b6b, #1f1f1f);

  --rule: ( :doodle {
      @grid: 30x1 / 18vmin;
      --deg: @p(-180deg, 180deg);
    }

    :container {
      perspective: 30vmin;
    }

    :after, :before {
      content: '';
      background: var(--color);
      @place-cell: @r(100%) @r(100%);
      @size: @r(6px);
      @shape: heart;
    }

    @place-cell: center;
    @size: 100%;

    box-shadow: @m2(0 0 50px var(--color));
    background: @m100(radial-gradient(var(--color) 50%, transparent 0) @r(-20%, 120%) @r(-20%, 100%) / 1px 1px no-repeat);

    will-change: transform, opacity;
    animation: scale-up 12s linear infinite;
    animation-delay: calc(-12s / @I * @i);

    @keyframes scale-up {
      0%, 95.01%, 100% {
        transform: translateZ(0) rotate(0);
        opacity: 0;
      }

      10% {
        opacity: 1;
      }

      95% {
        transform: translateZ(35vmin) rotateZ(@var(--deg));
      }
    })
}
</style>