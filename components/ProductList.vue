<template>
  <div class="mt-8">
    <ul role="list" class="divide-y divide-gray-200">
      <ProductItem v-for="(product, index) in products" :key="index" :product="product" :index="index"
        @update-quantity="updateQuantity" />
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  data() {
    return {
      products: [
        { name: 'Product 1', quantity: 0 },
        { name: 'Product 2', quantity: 0 },
        { name: 'Product 3', quantity: 0 },
      ],
    };
  },
  methods: {
    updateQuantity(index, quantity) {
      this.products[index].quantity = quantity;
    }
  }
};
</script>
