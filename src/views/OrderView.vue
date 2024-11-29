<template>
    <div class="container mt-5">
      <h2 class="text-center">Placing an order</h2>
  
      <form @submit.prevent="confirmOrder">
        <div class="mb-3">
          <input v-model="fullName" type="text" class="form-control" :class="{'is-invalid': !fullName}" placeholder="Full Name">
          <div class="invalid-feedback">Please fill in the full name.</div>
        </div>
  
        <div class="mb-3">
          <select v-model="gender" class="form-select" :class="{'is-invalid': !gender}">
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div class="invalid-feedback">Please select your gender.</div>
        </div>
  
        <div class="mb-3">
          <select v-model="country" class="form-select" :class="{'is-invalid': !country}">
            <option value="" disabled selected>Select Country</option>
            <option value="Russia">Russia</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="USA">USA</option>
          </select>
          <div class="invalid-feedback">Please select your country.</div>
        </div>
  
        <div class="mb-3">
          <input v-model="address" type="text" class="form-control" :class="{'is-invalid': !address}" placeholder="Your Address">
          <div class="invalid-feedback">Please fill in your address.</div>
        </div>
  
        <div class="mb-3">
          <input v-model="phone" type="text" class="form-control" :class="{'is-invalid': !phone}" placeholder="Your Phone Number">
          <div class="invalid-feedback">Please fill in your phone number.</div>
        </div>
  
        <div class="mb-3">
          <select v-model="deliveryMethod" class="form-select" :class="{'is-invalid': !deliveryMethod}">
            <option value="" disabled selected>Select Delivery Method</option>
            <option value="Courier">Courier</option>
            <option value="Pickup">Pickup</option>
            <option value="Postal">Postal Delivery</option>
          </select>
          <div class="invalid-feedback">Please select a delivery method.</div>
        </div>
  
        <div class="mb-3">
          <select v-model="paymentMethod" class="form-select" :class="{'is-invalid': !paymentMethod}">
            <option value="" disabled selected>Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Card">Credit Card</option>
          </select>
          <div class="invalid-feedback">Please select a payment method.</div>
        </div>
  
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" class="btn btn-outline-primary">Send</button>
          <RouterLink to="/cart" class="btn btn-outline-danger">Cancel</RouterLink>
        </div>
      </form>
  
      <Cart class="mt-4 mb-3"></Cart>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useCartStore } from "@/stores/cart";
  import { useRouter } from "vue-router";
  import Cart from "@/components/Cart.vue"; 
  
  const cartStore = useCartStore();
  const router = useRouter();
  
  const fullName = ref("");
  const gender = ref("");
  const country = ref("");
  const address = ref("");
  const phone = ref("");
  const deliveryMethod = ref("");
  const paymentMethod = ref("");
  
  const totalCost = computed(() => cartStore.totalSum);
  
  const confirmOrder = () => {
    if (!fullName.value || !address.value || !phone.value) {
      alert("Please fill in all required fields.");
      return;
    } else {
      const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        total: totalCost.value,
        items: cartStore.cartList.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.count,
        })),
        customer: {
          fullName: fullName.value,
          gender: gender.value,
          country: country.value,
          address: address.value,
          phone: phone.value,
        },
        deliveryMethod: deliveryMethod.value,
        paymentMethod: paymentMethod.value,
      };
  
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      
      orders.push(order);
      
      localStorage.setItem("orders", JSON.stringify(orders));
  
      cartStore.clearCart();
      
      alert("Thank you for your purchase!");
  
      router.push("/orders");
    }
  };
  </script>
  
  <style scoped>
  </style>
  