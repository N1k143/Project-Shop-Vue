<template>
    <div class="container mt-5">
      <h2 class="text-center">Your Order</h2>
      
      <div v-if="orders.length > 0">
        <div class="card mb-3" :key="orders[0].id">
          <div class="card-body">
            <h5 class="card-title">Order #{{ orders[0].id }}</h5>
            <p><strong>Date:</strong> {{ orders[0].date }}</p>
            <p><strong>Total:</strong> ${{ orders[0].total }}</p>
          </div>
        </div>
      </div>
  
      <div v-else>
        <p>No orders found.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const orders = ref([]);
  
  onMounted(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    
    if (savedOrders.length > 0) {
      orders.value = [savedOrders[savedOrders.length - 1]];
    }
  });
  </script>
  
  <style scoped>
  </style>
  