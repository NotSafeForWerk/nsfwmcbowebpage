#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀

<template>
  <div class="container mt-5">
    <h1>Cómo Hacer un Pedido</h1>
    <p>Para hacer un pedido en NSFW Clothes a través de WhatsApp, sigue estos sencillos pasos:</p>

    <h2>Paso 1: Elige tu Producto</h2>
    <p>Selecciona el producto que deseas personalizar. Ofrecemos una variedad de productos, incluyendo:</p>
    <ul>
      <li>Franelas</li>
      <li>Tazas</li>
      <li>Otros productos personalizados</li>
    </ul>
    <a  class="btn btn-info" href="https://wa.me/c/584127698781">VER CATALOGO</a>

    <h2>Paso 2: Personaliza tu Producto</h2>
    <p>Indica los detalles de personalización para tu producto. Esto puede incluir:</p>
    <ul>
      <li>El tamaño del estampado (por ejemplo, 10x10 cm, 20x20 cm, tamaño carta, tamaño tabloide etc.)</li>
      <li>Tela (100% algodon o microdurazno)</li>
      <li>La técnica de estampado (sublimación o DTF)</li>
      <li>El diseño o imagen que deseas utilizar (puedes adjuntar un archivo)</li>
    </ul>

    <h2>Paso 3: Proporciona tus Datos</h2>
    <p>Incluye la siguiente información en tu mensaje de WhatsApp:</p>
    <ul>
      <li>Tu nombre completo</li>
      <li>Dirección de envío completa</li>
      <li>Número de teléfono de contacto</li>
    </ul>

    <h2>Paso 4: Envía tu Pedido</h2>
    <p>Envía un mensaje de WhatsApp con toda la información a nuestro número de contacto:</p>
    <div class="alert alert-info">
      <strong>Número de WhatsApp:</strong> +58 412 7698781
    </div>

    <h2>Ejemplo de Mensaje</h2>
    <p>A continuación, se muestra un ejemplo de cómo debería verse tu mensaje:</p>
    <div class="alert alert-secondary">
      <p><strong>Hola, me gustaría hacer un pedido:</strong></p>
      <p><strong>Producto:</strong> Franela</p>
      <p><strong>Tamaño del estampado:</strong> 20x20 cm</p>
      <p><strong>Técnica de estampado:</strong> DTF</p>
      <p><strong>Diseño:</strong> (Adjuntar imagen)</p>
      <p><strong>Nombre:</strong> Juan Pérez</p>
      <p><strong>Dirección de envío:</strong> Calle Falsa 123, Ciudad, País</p>
      <p><strong>Teléfono de contacto:</strong> +123 456 7890</p>
    </div>

    <h2>Confirmación del Pedido</h2>
    <p>Una vez que recibamos tu mensaje, nos pondremos en contacto contigo para confirmar los detalles del pedido,
      proporcionar una cotización y darte información sobre los tiempos de entrega.</p>
   
  </div>
  <div class="text-center p-5">
      <a href="/" class="btn btnSiplhes" role="button" data-translate>Volver</a>
    </div>

</template>

<script>
export default {
  name: 'OrderGuide'
};
</script>

<style scoped>
h1,
h2 {
  color: #181818;
}

p,
li {
  color: #333;
}

.container {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.alert {
  margin-top: 1rem;
}
</style>