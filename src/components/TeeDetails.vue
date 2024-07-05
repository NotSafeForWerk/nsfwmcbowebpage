<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TeeData from './TeeData.json';

const route = useRoute();
const tshirt = ref(null);
const id = route.query.id;

const fetchTshirtData = () => {
    const foundTshirt = TeeData.find(item => item.id == id);
    if (foundTshirt) {
        tshirt.value = foundTshirt;
    } else {
        console.error('T-shirt not found');
    }
};

onMounted(() => {
    fetchTshirtData();
});
</script>

<template>
    <div v-if="tshirt" class="container my-3 p-3">
       <a href=""></a> <div class="row">
            <div class="col"> <img class="tshirtimg rounded" :src="tshirt.image">
            </div>
            <div class="col">
                <h1>{{ tshirt.title }}</h1>
                <h3>Precio: <strong>{{ '$' + tshirt.price }}</strong></h3>
                <h3>Descripcion:
                   <p> {{ tshirt.desc }} </p>
                </h3>
                <a :href="tshirt.url" class="btn btn-secondary">Comprar via <i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </div>
    <div v-else class="container text-center p-5">
        <h1 my-5>Producto no encontrado, le invitamos a ir al inicio</h1>
        <a href="/" class="btn btnSiplhes" role="button" data-translate>Volver</a>
    </div>
</template>

<style>


.tshirtimg {
    width: 35vw;
}
</style>
