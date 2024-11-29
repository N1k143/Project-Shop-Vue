<template>
<div class="container">
<Cart></Cart>
<div class="row">
    <div class="col text-end">
    <RouterLink type="button" to="/order" class="btn btn-outline-success mt-3"><i class="bi bi-bag-check"></i> Buy</RouterLink>
</div>
</div>
</div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";
import Cart from "@/components/Cart.vue";

const cartStore = useCartStore();

const updateCount = (id, event) => {
    cartStore.updateCountCartById(id, event.target.value);
}



</script>

<style>

</style>