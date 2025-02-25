<template>
  <div class="mt-8">
    <ul role="list" class="divide-y divide-gray-200">
      <ProductItem v-for="(product, index) in products" :key="index" :product="product" :index="index"
        @update-quantity="$emit('update-quantity', index, $event)" />
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
  emits: ['update-quantity']
};
</script>
