<template>
      <li class="py-2 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">{{ product.name }}</p>
        <div class="flex items-center space-x-2">
          <button @click="decreaseQuantity" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-l">-</button>
          <span class="text-sm font-medium text-gray-700">{{ product.quantity }}</span>
          <button @click="increaseQuantity" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-r">+</button>
        </div>
      </li>
    </template>

    <script>
    export default {
      props: ['product', 'index'],
      methods: {
        increaseQuantity() {
          this.$emit('update-quantity', this.index, this.product.quantity + 1);
        },
        decreaseQuantity() {
          if (this.product.quantity > 0) {
            this.$emit('update-quantity', this.index, this.product.quantity - 1);
          }
        },
      },
    };
    </script>
