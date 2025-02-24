<template>
  <div class="bg-gray-100 min-h-screen py-6">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="px-6 py-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Checkout</h2>
          <Form />
          <ProductList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '../components/Form.vue';
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    Form,
    ProductList
  }
};
</script>
