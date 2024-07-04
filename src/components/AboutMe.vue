#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<template>
  <section class="about-section p-2">
    <div class="container">
      <h2 data-translate class="text-center py-2">¿Quiénes somos?</h2>
      <div class="row mb-4">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img src="https://i.imgur.com/vfSHhVr.png" alt="Logo de zStudios" class="img-fluid">
        </div>
        <div class="AboutMe col-md-8">
          <p data-translate>
            En Not Safe For Work Clothing, creemos que la moda es más que ropa; es una forma de expresión, una declaración de intenciones y, a veces, un buen chiste. Nuestra historia comenzó como un meme, una tienda ficticia de franelas personalizadas donde podríamos expresar nuestro humor sin prejuicios. Pero lo que empezó como una broma, se convirtió en una realidad al encontrar personas con nuestro mismo desorden mental, transformando así nuestro meme en una marca..</p>
          <p data-translate>Hoy, NSFW Clothes no es solo un nombre o un logo; es un movimiento. Cada franela que diseñamos lleva un pedazo de esa chispa original que hay en cada uno de nosotros. Nuestros diseños son atrevidos, creativos y, sí, a veces no son seguros para el trabajo, pero siempre son seguros para el espíritu.</p>
          <p data-translate>Nos enorgullece decir que cada prenda que vendemos es una pieza de arte vestible, creada con pasión y entregada con la promesa de hacer sonreír.</p>
        </div>
      </div>
      <div class="card p-3"> 
      <h2 class="text-center py-2" data-translate>Nuestra Misión</h2>
      <p>Nuestra mision es vender:</p>
      <ol>
      
          <li>Ropa.</li>
      </ol>
  </div>
  </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #14171a;
  color: #F9F9F9;
  height: 100%;
}

.about-section h2 {
  font-size: 32px;
}

.about-section img {
  max-width: 100%;
  height: auto;
}

.about-section p {
  margin-bottom: 10px;
  font-size: 15px;
  text-align: justify;
}

@media (max-width: 767px) {
  .about-section {
    padding: 40px 0;
  }

  .about-section h2 {
    font-size: 24px;
  }

  .about-section img {
    max-width: 80%;
  }
  .about-section .card{
    text-align: justify;
  }
  .card{
    background: #313840;
  }
}
</style>
