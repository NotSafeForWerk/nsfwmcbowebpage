<template>
    <div class="container mt-5">
        <h1>Preguntas Frecuentes (FAQs)</h1>
        <div class="accordion" id="faq">
            <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
                <h2 class="accordion-header" :id="'heading' + index">
                    <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button"
                        data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0"
                        :aria-controls="'collapse' + index">
                        {{ faq.question }}
                    </button>
                </h2>
                <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }"
                    :aria-labelledby="'heading' + index" data-bs-parent="#faq">
                    <div class="accordion-body">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            faqs: [
                {
                    question: '¿Cuáles son los tamaños de los estampados disponibles?',
                    answer: 'Ofrecemos varios tamaños de estampado, desde pequeños (10x10 cm) hasta grandes (30x30 cm). Puedes elegir el tamaño que mejor se adapte a tu diseño y a tus necesidades.'
                },
                {
                    question: '¿Cuál es la diferencia entre sublimación y DTF?',
                    answer: 'La sublimación es un método de impresión donde la tinta se convierte en gas sin pasar por el estado líquido, lo que permite que la tinta se integre directamente en el tejido. Es más económico y adecuado para tejidos claros. Por otro lado, DTF (Direct to Film) imprime el diseño en una película que luego se transfiere a la tela. El DTF ofrece una mayor calidad de impresión, es más duradero y puede utilizarse en cualquier color de tela.'
                },
                {
                    question: '¿Cuánto cuesta cada técnica de estampado?',
                    answer: 'Los precios varían según el tamaño del estampado y la técnica utilizada. La sublimación es más barata que el DTF. Por ejemplo, un estampado pequeño de sublimación puede costar desde $10, mientras que el mismo tamaño en DTF puede costar $15. Para tamaños más grandes y cotizaciones específicas, por favor, contacta con nosotros.'
                },
                {
                    question: '¿Cuáles son los tiempos de entrega?',
                    answer: 'Nuestros tiempos de entrega varían entre 2 y 5 días hábiles. Una vez que realices tu pedido, te proporcionaremos un número de seguimiento para que puedas monitorear el estado de tu envío. Los tiempos de entrega pueden variar dependiendo de la demanda y la ubicación de entrega.'
                },
                {
                    question: '¿Puedo personalizar el diseño de mi camiseta?',
                    answer: '¡Claro! Puedes enviarnos tu propio diseño o trabajar con nuestro equipo de diseño para crear algo único. Aceptamos varios formatos de archivos como PNG, JPEG y SVG. Si tienes alguna idea pero necesitas ayuda para plasmarla, nuestros diseñadores estarán encantados de asistirte.'
                },
                {
                    question: '¿Hay algún descuento para pedidos al por mayor?',
                    answer: 'Sí, ofrecemos descuentos para pedidos al por mayor. Si planeas pedir una cantidad grande de camisetas, contáctanos para discutir los detalles y ofrecerte una cotización personalizada. Los descuentos pueden variar según la cantidad y el tipo de diseño requerido.'
                },
                {
                    question: '¿Qué métodos de pago aceptan?',
                    answer: 'Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias. Todos los pagos son seguros y están protegidos mediante cifrado SSL.'
                },
                {
                    question: '¿Cómo puedo cuidar mi camiseta personalizada?',
                    answer: 'Para asegurar la longevidad de tu camiseta personalizada, te recomendamos lavarla a mano o en lavadora en ciclo suave con agua fría. Evita el uso de blanqueadores y no la seques en secadora. Plancha tu camiseta del revés a baja temperatura para mantener la calidad del estampado.'
                },
                {
                    question: '¿Qué pasa si mi pedido llega dañado o con errores?',
                    answer: 'Si tu pedido llega dañado o hay algún error en la impresión, por favor contáctanos inmediatamente. Nos aseguraremos de resolver el problema, ya sea reimprimiendo tu pedido sin costo adicional o procesando un reembolso, según tu preferencia.'
                }
            ]
        };
    }
};
</script>

<style scoped>
.accordion-button {
    text-decoration: none;
    background-color: #181818;
    color: #fefffa;
    border-color: #111;
}

.accordion-button:hover {
    color: #d7dfb6;
    border-color: #111;
}

.accordion-body {
    background-color: #111;
    color: #fefffa;
    border-color: #111;
}

.accordion-item {
    border-color: #111;
}

#faq {
    background: #111;
    border-color: #111;
}
</style>
