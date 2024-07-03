<template>
  <section class="contact-section">
    <div class="jumbotron d-flex flex-column">
      <h2 data-translate class="text-light text-center display-5">Contactanos</h2>
      <div class="row m-5">
        <div class="col-md-6 order-md-1 text-light">
          <!-- Columna izquierda para elementos de contacto -->
          <div class="contact-item">
            <a href="https://wa.me/584127698781" target="_blank" class="btnSiplhes" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <div class="contact-item">
            <a href="https://facebook.com/zStudiosNetworks" target="_blank" class="btnSiplhes" aria-label="Facebook">
              <i class="fab fa-facebook"></i> Facebook
            </a>
          </div>
          <div class="contact-item">
            <a href="https://instagram.com/zstudiosnetworks" target="_blank" class="btnSiplhes" aria-label="Instagram">
              <i class="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <div class="contact-item">
            <a :href="twitterLink" target="_blank" class="btnSiplhes" aria-label="Twitter">
              <i class="fab fa-twitter"></i> Twitter
            </a>
          </div>
          <div class="contact-item">
            <a href="mailto:siplhes@gmail.com" data-translate class="btnSiplhes" aria-label="Email">
              <i class="fas fa-envelope"></i> E-mail
            </a>
          </div>
        </div>
        <div class="col-md-6 order-md-2">
          <!-- Columna derecha para el mapa -->
          <div class="contact-item">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" width="100%" height="350"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15681.43309806675!2d-71.6355639!3d10.7068246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899ec44e25b1b1%3A0xcc33ecb72609ea7!2szStudios%20Networks!5e0!3m2!1ses-419!2snl!4v1696543134376!5m2!1ses-419!2snl"
                frameborder="0" style="border: 0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      <p data-translate class="text-center">
        © 2022 | zStudios Networks - Todos los derechos reservados
      </p>
    </div>
  </section>
</template>

  
<script setup>
</script>
  
<style scoped>
.contact-section {
  padding: 15px 0;
  background-color: #111111;
  /* Fondo oscuro */
}

.contact-item {
  text-align: center;
  margin-bottom: 20px;
}

.contact-item iframe {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
  