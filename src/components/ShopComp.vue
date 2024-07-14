#   ▐ ▄       ▄▄▄▄▄    .▄▄ ·  ▄▄▄· ·▄▄▄▄▄▄ .    ·▄▄▄      ▄▄▄      ▄▄▌ ▐ ▄▌      ▄▄▄  ▄ •▄ 
#  •█▌▐█▪     •██      ▐█ ▀. ▐█ ▀█ ▐▄▄·▀▄.▀·    ▐▄▄·▪     ▀▄ █·    ██· █▌▐█▪     ▀▄ █·█▌▄▌▪
#  ▐█▐▐▌ ▄█▀▄  ▐█.▪    ▄▀▀▀█▄▄█▀▀█ ██▪ ▐▀▀▪▄    ██▪  ▄█▀▄ ▐▀▀▄     ██▪▐█▐▐▌ ▄█▀▄ ▐▀▀▄ ▐▀▀▄·
#  ██▐█▌▐█▌.▐▌ ▐█▌·    ▐█▄▪▐█▐█ ▪▐▌██▌.▐█▄▄▌    ██▌.▐█▌.▐▌▐█•█▌    ▐█▌██▐█▌▐█▌.▐▌▐█•█▌▐█.█▌
#  ▀▀ █▪ ▀█▄▀▪ ▀▀▀      ▀▀▀▀  ▀  ▀ ▀▀▀  ▀▀▀     ▀▀▀  ▀█▄▀▪.▀  ▀     ▀▀▀▀ ▀▪ ▀█▄▀▪.▀  ▀·▀  ▀
<template>
  <div class="container mt-5">
    <div class="mx-auto text-center my-4">
      <h1>Shop</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="card h-100">
            <img src="https://i.imgur.com/vW7qH1t.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">Tshirts</h1>
            </div>
            <a class="stretched-link" href="/tshirts"></a>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://i.imgur.com/vfL3CfS.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">Tazas</h1>
            </div>
            <a class="stretched-link" href="/mugs"></a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.card-img {
  height: 30vw;
}
</style>