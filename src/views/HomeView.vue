<script setup>

</script>

<template>
<div class="container mt-3">
  <div class="row"> 
    <div class="col-md-5">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select category</option>
        <option value="1">GPU</option>
        <option value="2">CPU</option>
        <option value="3">Mather Board</option>
        <option value="2">RAM</option>
      </select>
    </div>
    <div class="col-md-5">
      <input class="form-control me-2" type="search" placeholder="Search by name..." aria-label="Search">
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-outline-warning" disabled>Reset</button>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
  <div class="col ">
    <div class="card">
      <img src="https://api.technodom.kz/f3/api/v1/images/800/800/256710_1.jpg" class="card-img-top" alt="...">
      <div class="card-body" style="height: 150px;">
        <h5 class="card-title">Asus ROG STRIX Z690-E</h5>
        <p class="card-text">Mother Board</p>
        <p class="card-text">300$</p>
      </div>
      <div class="card-footer text-end">
      <button type="button" class="btn btn-outline-primary me-2">Details</button>
      <button type="button" class="btn btn-outline-success">Cart</button>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://ir-3.ozone.ru/s3/multimedia-0/c1000/6660773772.jpg" class="card-img-top" alt="...">
      <div class="card-body" style="height: 150px;">
        <h5 class="card-title">Gigabyte GeForce RTX 4060 Ti</h5>
        <p class="card-text">GPU</p>
        <p class="card-text">700$</p>
      </div>
      <div class="card-footer text-end">
      <button type="button" class="btn btn-outline-primary me-2">Details</button>
      <button type="button" class="btn btn-outline-success">Cart</button>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/intel_bx8071512900k_core_i9_12900k_8_core_lga_1635335191_1663644.jpg" class="card-img-top" alt="...">
      <div class="card-body" style="height: 150px;">
        <h5 class="card-title">Intel Core i9-12900K </h5>
        <p class="card-text">CPU</p>
        <p class="card-text">389$</p>
      </div>
      <div class="card-footer text-end">
      <button type="button" class="btn btn-outline-primary me-2">Details</button>
      <button type="button" class="btn btn-outline-success">Cart</button>
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://forcecom.kz/upload/iblock/c9a/gzo7dgnww2qb7gauh0w11tsyjn8dzq7e.webp" class="card-img-top" alt="...">
      <div class="card-body" style="height: 150px;">
        <h5 class="card-title">Kingston 64 ГБ DDR 4 3600 МГц</h5>
        <p class="card-text">RAM</p>
        <p class="card-text">500$</p>
      </div>
      <div class="card-footer text-end">
      <button type="button" class="btn btn-outline-primary me-2">Details</button>
      <button type="button" class="btn btn-outline-success">Cart</button>
    </div>
    </div>
  </div>
</div>
</div>
</template>
