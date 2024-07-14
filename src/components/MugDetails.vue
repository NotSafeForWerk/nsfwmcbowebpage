#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MugData from './MugData.json';

const route = useRoute();
const mug = ref(null);
const id = route.query.id;

const fetchTshirtData = () => {
    const foundMug = MugData.find(item => item.id == id);
    if (foundMug) {
        mug.value = foundMug;
    } else {
        console.error('Mug not found');
    }
};

onMounted(() => {
    fetchTshirtData();
});
</script>

<template>
    <div v-if="mug" class="container my-3 p-3">
        <a href=""></a>
        <div class="row">
            <div class="col-md-8"> 
                <img class="mugImg rounded p-2" :src="mug.image" 
                :alt="`Taza de cafe personalizada con el diseño ${mug.title}`">
            </div>
            <div class="col p-4">
                <div class="card p-5">
                    <h1>{{ mug.title }}</h1>
                    <h3>Precio: <strong>{{ '$ ' + mug.price }}</strong></h3>
                    <h3>Descripcion:  </h3>
                        <p> {{ mug.desc }} </p>
                    <a :href="mug.url" class="btn btnSiplhes">
                Comprar via <i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="container text-center p-5">
        <h1 my-5>Producto no encontrado, le invitamos a ir al inicio</h1>
        <a href="/" class="btn btnSiplhes" role="button" data-translate>Volver</a>
    </div>
</template>

<style>
.mugImg {
    aspect-ratio: 1/1;
    width: 40vw;
}

@media only screen and (max-width: 500px) {
    .mugImg {
    width: 90vw;
        aspect-ratio: 1/1;
    }
}
</style>