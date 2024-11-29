<template>
    <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product, index in cartStore.cartList" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td><img :src="product.img" style="width: 150px;" class="rounded mx-auto d-block" alt="..."></td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td><input type="number" @input="updateCount(product.id, $event)"  class="form-control" :value="product.count" ></td>
          <td>
            <button type="button" @click="$router.push(`/details/${product.id}`)" class="btn btn-outline-primary me-2">Details</button>
            <button type="button" @click="cartStore.removeFromCart(product.id)" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div class="row">
        <div class="col text-end">
        <h2 class="mt-3">Total: {{ cartStore.totalSum }}$</h2>
    </div>
    </div>
    </div>
    </template>

<script setup>

import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";

const cartStore = useCartStore();


const updateCount = (id, event) => {
    cartStore.updateCountCartById(id, event.target.value);
}


</script>