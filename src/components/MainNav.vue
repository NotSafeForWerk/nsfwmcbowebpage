#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<template>
  <section>
    <div class="wrapper" data-bs-theme="dark">
      <nav class="navbar navbar-expand-lg">
        <div class="container d-flex align-items-center">
          <a class="text-decoration-none" href="/">
            <h1 class="title text-light glitcheffect">NOT SAFE FOR WORK</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav gap-1">
              <RouterLink class="btnSiplhes" to="/">Inicio</RouterLink>
              <RouterLink class="btnSiplhes" to="/tshirts">Tienda</RouterLink>
              <RouterLink class="btnSiplhes" to="/about">Nosotros</RouterLink>
              <RouterLink class="btnSiplhes" to="/">Pedidos</RouterLink>
              <RouterLink class="btnSiplhes" to="/">FAQ</RouterLink>
            </div>
            <!--
           <button title="Haz clic para cambiar el idioma" @click="toggleTranslation" :class="['btn', `translateBtn-${targetLanguage}`]"/>
           -->
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>


<style scoped>
/* Estilos para centrar el Navbar verticalmente */
.navbar {
  justify-content: center;
  background-color: #14171a;
  height: auto;
}

/* Estilos para los enlaces con animaciones */
.nav-link {
  margin: 0 5px;
  font-size: 18px;
  text-transform: uppercase;
  transition: color 0.3s;
  color: #fff;
  /* Color blanco para los enlaces */
  text-decoration: none;
  /* Elimina la subraya de los enlaces */
}

.nav-link:hover {
  color: #007bff;
  /* Cambia de color en el hover a un tono azul */
}

/* Estilos para hacer el Navbar responsive */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #343a40;
    /* Fondo oscuro en dispositivos móviles */
  }

  .nav-link {
    color: #fff;
    /* Color blanco para los enlaces en dispositivos móviles */
  }


}

.translateBtn-en {
  background: url('../assets/en.webp');
  height: 5vh;
  width: 3vw;
  background-size: cover;
  background-position: center;

  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;

}

.translateBtn-es {
  background: url('../assets/es.webp');
  height: 5vh;
  width: 3vw;
  background-size: cover;
  background-position: center;

  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
}
</style>


<script>
export default {
  data() {
    return {
      targetLanguage: 'en' // Comienza en español
    };
  },
  methods: {
    async toggleTranslation() {
      // Cambia entre inglés y español al hacer clic en el botón
      if (this.targetLanguage === 'en') {
        this.targetLanguage = 'es'; // Cambiar a inglés
      } else {
        this.targetLanguage = 'en'; // Cambiar a español
      }
      this.translatePageContent(this.targetLanguage);
    },
    async translatePageContent(targetLanguage) {
      const elementsToTranslate = document.querySelectorAll('[data-translate]');

      elementsToTranslate.forEach(async (element) => {
        const textToTranslate = element.textContent;
        const translatedText = await this.fetchTranslation(textToTranslate, targetLanguage);
        element.textContent = translatedText;
      });
    },
    async fetchTranslation(text, targetLanguage) {
      try {
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`);
        const data = await response.json();

        if (data && data[0] && data[0][0]) {
          return data[0][0][0];
        } else {
          return text; // Devolver el texto original si la traducción falla
        }
      } catch (error) {
        console.error('Error al traducir el contenido:', error);
        return text; // Devolver el texto original en caso de error
      }
    },
  },
  created() {
    // Traduce el contenido inicial
    this.translatePageContent(this.targetLanguage);
  },
};

</script>