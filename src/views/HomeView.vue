<script setup>
import { useProductStore } from "@/stores/product";
import { useCategoryStore } from "@/stores/category";
import { ref } from "vue";

const productStore = useProductStore();
const categoryStore = useCategoryStore();
const category = ref(null);
const searchText = ref('');
const products = ref([]);
products.value = productStore.products;

const filterCategory = () => {
  products.value = productStore.productFilteredByCategoryName(category.value, null);
  searchText.value = ' ';
}

const searchName = () => {
  products.value = productStore.productFilteredByCategoryName(null, searchText.value);
  category.value = null;
}

const resetAll = () => {
  searchText.value = '';
  category.value = '';
}

</script>

<template>
<div class="container mt-3">
  <div class="row"> 
    <div class="col-md-5">
      <select class="form-select" @change="filterCategory" v-model="category"  aria-label="Default select example">
        <option selected>Select category</option>
        <option
        v-for="category in categoryStore.categories"
        :value="category"
        :key="category">{{ category }}</option>
      </select>
    </div>
    <div class="col-md-5">
      <input class="form-control me-2" @input="searchName" v-model="searchText" type="search" placeholder="Search by name..." aria-label="Search">
    </div>
    <div class="col-md-2">
      <button type="button" class="btn btn-outline-warning" :disabled="!searchText && !category" @click="resetAll" >Reset</button>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
  <div class="col" v-for="product in products" :key="product.id">
    <div class="card">
      <img :src="product.img" class="card-img-top" alt="...">
      <div class="card-body" style="height: 150px;">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.category }}</p>
        <p class="card-text">{{ product.price }}$</p>
      </div>
      <div class="card-footer text-end">
      <button type="button" @click="$router.push(`/details/${product.id}`)" class="btn btn-outline-primary me-2">Details</button>
      <button type="button" class="btn btn-outline-success">Cart</button>
    </div>
    </div>
  </div>
</div>
</div>
</template>
