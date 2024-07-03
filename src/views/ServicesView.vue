<template>
    <section id="pricing" class="pricing-content section-padding">
        <div class="container">
            <div class="section-title text-center d-flex align-items-center justify-content-center flex-column">
                <h1>Plan de Precios</h1>
                <p>Es un hecho establecido de que un lector se distraerá con el contenido legible de una página cuando observe su diseño.</p>
            </div>
            <div class="row text-center ">
                <div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s"
                    data-wow-offset="0">
                    <div class="single-pricing d-flex align-items-center justify-content-center flex-column">
                        <div class="price-head">
                            <h2>PyMEs</h2>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h1 class="price">$40</h1>
                        <h5>Pago Único</h5>
                        <ul>
                            <li>1-7 páginas (Página de aterrizaje incluida)</li>
                            <li>Correos electrónicos personalizados</li>
                            <li>Sección de contacto</li>
                            <li>Dominio y Certificado SSL (ambos por 1 año)</li>
                            <li>Adaptado al 100% para dispositivos móviles</li>
                        </ul>
                        <a href="#">Comenzar</a>
                    </div>
                </div><!--- FIN DE COL -->
                <div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"
                    data-wow-offset="0">
                    <div class="single-pricing">
                        <div class="price-head">
                            <h2>Popular</h2>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h1 class="price">$90</h1>
                        <h5>Mensual</h5>
                        <ul>
                            <li>1-15 páginas (Página de aterrizaje incluida)</li>
                            <li>Correos electrónicos personalizados</li>
                            <li>Sección de contacto</li>
                            <li>Dominio y Certificado SSL (ambos por 1 año)</li>
                            <li>Instalación de WordPress</li>
                            <li>Adaptado al 100% para dispositivos móviles</li>
                            <li>Integración de blog</li>
                            <li>Todos los complementos esenciales</li>
                        </ul>
                        <a href="#">Comenzar</a>
                    </div>
                </div><!--- FIN DE COL -->
                <div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"
                    data-wow-offset="0">
                    <div class="single-pricing single-pricing-white">
                        <div class="price-head">
                            <h2>Avanzado</h2>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span class="price-label">Mejor</span>
                        <h1 class="price">$69</h1>
                        <h5>Mensual</h5>
                        <ul>
                            <li>Páginas ilimitadas</li>
                            <li>Correos electrónicos personalizados</li>
                            <li>Sección de contacto</li>
                            <li>Dominio y Certificado SSL (ambos por 1 año)</li>
                            <li>Instalación de WordPress</li>
                            <li>Adaptado al 100% para dispositivos móviles</li>
                            <li>Integración de blog</li>
                            <li>Todos los complementos esenciales</li>
                            <li>Tienda en línea + carrito de compras + pasarela de pago</li>
                        </ul>
                        <a href="#">Comenzar</a>
                    </div>
                </div><!--- FIN DE COL -->
            </div><!--- FIN DE FILA -->
        </div><!--- FIN DE CONTAINER -->
    </section>
    <section id="details">
        <div class="text-center d-flex align-items-center justify-content-center flex-column">
            <h1>Detalles</h1>
            <p>Es un hecho establecido de que un lector se distraerá con el contenido legible de una página cuando observe su diseño.</p>
        </div>
    </section>
</template>

<style>
#pricing{
    background:#ba3126;
    color:antiquewhite
}
.single-pricing {
    padding: 10px 5px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    border: 1px solid #86231b;
    box-shadow: 0 10px 40px -10px rgba(0, 64, 128, .09);
    transition: 0.3s;
}

@media only screen and (max-width:480px) {
    .single-pricing {
        margin-bottom: 30px;
    }
}

.single-pricing:hover {
    box-shadow: 0px 60px 60px rgba(0, 0, 0, 0.1);
    z-index: 100;
    transform: translate(0, -10px);
}

.price-label {
    color: #fff;
    background: #ffaa17;
    font-size: 16px;
    width: 100px;
    margin-bottom: 15px;
    display: block;
    -webkit-clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
    clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%);
    margin-left: -20px;
    position: absolute;
}

.price-head h2 {
    font-weight: 600;
    margin-bottom: 0px;
    text-transform: capitalize;
    font-size: 26px;
}

.price-head span {
	display: inline-block;
	background:#ffaa17;
	width: 6px;
	height: 6px;
	border-radius: 30px;
	margin-bottom: 20px;
	margin-top: 15px;
    margin-left: 4px;
}

.price {
    font-weight: 500;
    font-size: 50px;
    margin-bottom: 0px;
}


.single-pricing h5 {
    font-size: 14px;
    margin-bottom: 0px;
    text-transform: uppercase;
}

.single-pricing ul {
    list-style: none;
    margin-bottom: 10px;
    margin-top: 15px;
}

.single-pricing ul li {
    line-height: 35px;
}

.single-pricing a {
    background: none;
    border: 2px solid #ffaa17;
    border-radius: 5000px;
    color: #ffaa17;
    display: inline-block;
    font-size: 16px;
    overflow: hidden;
    padding: 5px 45px;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
}

.single-pricing a:hover,
.single-pricing a:focus {
    background: #ffaa17;
    color: #fff;
    border: 2px solid #ffaa17;
}

.single-pricing-white {
    background: #232434
}

.single-pricing-white ul li {
    color: #fff;
}

.single-pricing-white h2 {
    color: #fff;
}

.single-pricing-white h1 {
    color: #fff;
}

.single-pricing-white h5 {
    color: #fff;
}</style>
