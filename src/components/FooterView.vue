#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<template>


  <footer class="mt-auto p-3">
    <div class="row justify-content-between align-items-center">
      <div class="col-3">
        <div class="text-center socialicons">
          <a href="https://wa.me/584127698781" target="_blank" aria-label="WhatsApp">
            <i class="fa-brands fa-whatsapp icon"></i> </a>
          <a href="https://instagram.com/nsfwmcbo" target="_blank" aria-label="Facebook">
            <i class="fa-brands fa-instagram icon"></i></a>
          <a href="https://facebook.com/nsfwmcbo" target="_blank" aria-label="Facebook">
            <i class="fa-brands fa-facebook icon"></i></a>
          <a href="https://X.com/nsfwmcbo" target="_blank" aria-label="Facebook">
            <i class="fa-brands fa-x-twitter icon"></i></a>
        </div>
      </div>
      <div class="col-3">
        <p class="text-center copyright">
          © 2023 | Not Safe For Work - Todos los derechos reservados | Creado por Siplhes
        </p>
      </div>
      <div class="col-3">
        <p class="text-center">
          <RouterLink to="/terms" class="terms">Terminos y condiciones</RouterLink>
        </p>
        <p>
        </p>
      </div>
    </div>
  </footer>

</template>

<style>
.terms {
  text-decoration: none;
  color: #fefffa;
}
footer{
  background-color: #111;
  position: relative;
  height: -5%;
}
.copyright{
  color: #fefffa;
}
</style>