<template>
        <h2 class="text-center mt-5 ">Placing an order</h2>
<div class="container mt-5">
    <div class="mb-3">
        <input type="text" class="form-control" id="fio" placeholder="Full name">
    </div>
    <select class="form-select" aria-label="Gender">
        <option selected>Your gender...</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
    </select>
    <select class="form-select mt-3" aria-label="Country">
        <option selected>Your country...</option>
        <option value="1">Russia</option>
        <option value="2">Kazakhstan</option>
        <option value="3">USA</option>
    </select>
    <div class="mb-3 mt-3">
        <input type="text" class="form-control" id="fio" placeholder="Your Adress">
    </div>
    <div class="mb-3 mt-3">
        <input type="text" class="form-control" id="fio" placeholder="Your phone number">
    </div>
    <select class="form-select" aria-label="Delivery method">
        <option selected>Delivery method...</option>
        <option value="1">Courier</option>
        <option value="2">Pickup</option>
        <option value="3">Postal delivery</option>
    </select>
    <select class="form-select mt-3" aria-label="Payment method">
        <option selected>Payment method...</option>
        <option value="1">Cash</option>
        <option value="2">Credit Card</option>
    </select>

    <h3 class="text-center mt-3 mb-3">Total order cost: 2500$</h3>
    <div class="buttons text-center mt-3">
        <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-outline-primary">Send</button>
            <RouterLink type="button" to="/cart" class="btn btn-outline-danger">Сancel</RouterLink>
        </div>
    </div>
    <Cart class="mt-4"></Cart>
</div>
</template>

<script setup>
import Cart from "@/components/Cart.vue";

</script>

<style>

</style>
