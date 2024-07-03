<template>
  <section class="about-section p-2">
    <div class="container">
      <h2 data-translate class="text-center py-2">¿Quiénes somos?</h2>
      <div class="row mb-4">
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <img src="../assets/zstudios.webp" alt="Logo de zStudios" class="img-fluid rounded-circle">
        </div>
        <div class="AboutMe col-md-8">
          <p data-translate>zStudios Networks es un proyecto que fue concebido hace más de una década por un apasionado entusiasta de la informática. En sus primeros años, el proyecto giraba principalmente en torno a los juegos en línea, con un enfoque particular en juegos como Habbo Hotel, Mu Online y Tibia. Con el tiempo, el interés del fundador por la programación siguió creciendo, impulsado por un objetivo único: crear su propio juego. Sin embargo, el camino para lograr este objetivo parecía lejano, con importantes obstáculos en el camino.</p>
          <p data-translate>Desviándose ligeramente de la trayectoria inicial, su atención se desplazó hacia el ámbito del diseño web. Se sumergieron en los foros de los juegos en los que pasaban incontables horas jugando, y a partir de ahí, comenzó su viaje en el diseño y desarrollo web. Inicialmente, comenzaron como diseñadores de temas para el CMS Simple Machines Forum. Con el tiempo, se aventuraron a crear CMS para Holo Hotels y servidores privados de Mu Online.</p>
          <p data-translate>Este proyecto evolucionó más tarde en un esfuerzo más profesional. Su propósito se amplió para no solo ayudar a programadores y diseñadores aspirantes, ya sean estudiantes o graduados, a encontrar la dirección óptima para sus carreras, sino también para proporcionar los servicios que apreciamos, todo en busca de un crecimiento y desarrollo continuo.</p>
        </div>
      </div>
      <div class="card p-3"> 
      <h2 class="text-center py-2" data-translate>Nuestra Misión</h2>
      <p>Nuestra misión es impulsar la innovación y el crecimiento en el mundo de la tecnología y el entretenimiento. Nos esforzamos por crear experiencias de alta calidad y servicios excepcionales que enriquezcan la vida de nuestros clientes y socios. A través de la pasión por la programación, el diseño web y la creatividad, nuestro objetivo es:</p>
      <ol>
          <li>Facilitar el acceso a soluciones tecnológicas de vanguardia mediante la prestación de servicios de diseño web de alta calidad y desarrollo de CMS.</li>
          <li>Apoyar a programadores y diseñadores emergentes en su camino hacia el éxito ofreciendo recursos, orientación y oportunidades de crecimiento profesional.</li>
          <li>Fomentar un entorno de colaboración, aprendizaje y desarrollo continuo dentro de nuestra comunidad y equipo.</li>
          <li>Buscar la excelencia, la ética y la responsabilidad en todas nuestras operaciones.</li>
      </ol>
      <p>Estamos comprometidos con la búsqueda continua de la innovación y el avance tecnológico, y nos esforzamos por ser un socio confiable y valioso para nuestros clientes y colaboradores en su viaje hacia el éxito en la era digital.</p>
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
