<template>
    <div class="container">
<div class="card text-center mt-5">
  <div class="card-header">
    <h5 class="card-title">{{ product.name }}</h5>
  </div>
  <div class="card-body">
    <img style="width: 350px;" :src="product.img" alt="">
    <h3 class="card-text mt-3">{{ product.price }}$</h3>
    <p class="card-text mt-3">{{ product.discription }}$</p>
    <button type="button" class="btn btn-outline-success mt-2 mb-2">Cart</button>
  </div>
  <div class="card-footer text-body-secondary">
    {{ product.publish_at }}
  </div>
</div>
</div>
</template>

<script setup>
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();
const product = productStore.findProductById(route.params.id);
</script>

<style>

</style>