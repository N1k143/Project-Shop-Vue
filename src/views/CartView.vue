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
    <tr>
      <th scope="row">1</th>
      <td><img src="https://api.technodom.kz/f3/api/v1/images/800/800/256710_1.jpg" style="width: 150px;" class="rounded mx-auto d-block" alt="..."></td>
      <td>Asus</td>
      <td>300</td>
      <td><input type="number" class="form-control" value="1" ></td>
      <td>
        <button type="button" class="btn btn-outline-info me-2">Detail</button>
        <button type="button" class="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

<div class="row">
    <div class="col text-end">
    <button type="button" class="btn btn-outline-success mt-3"><i class="bi bi-bag-check"></i> Buy</button>
    <h2 class="mt-3">Total: 200$</h2>
</div>
</div>
</div>
</template>

<script setup>

</script>

<style>

</style>