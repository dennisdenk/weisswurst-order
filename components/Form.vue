<template>
  <form class="space-y-4">
    <div>
      <label class="block text-gray-700">Name:</label>
      <input 
        type="text" 
        v-model="localUserData.name" 
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        @input="updateUserData"
      >
    </div>
    <div>
      <label class="block text-gray-700">Email:</label>
      <input 
        type="email" 
        v-model="localUserData.email" 
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        @input="updateUserData"
      >
    </div>
  </form>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localUserData: { ...this.userData }
    };
  },
  methods: {
    updateUserData() {
      this.$emit('update-user', this.localUserData);
    }
  }
};
</script>
