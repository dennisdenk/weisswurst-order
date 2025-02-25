<template>
  <div class="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen py-6 flex items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="px-6 py-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Bestellung Frühschoppen 02.03.25</h2>
          <Form :userData="userData" @update-user="updateUser" />
          <ProductList :products="products" @update-quantity="updateQuantity" />
          <div class="mt-6 text-center">
            <button 
              @click="handleSubmit" 
              class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Bestellung abschicken
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $supabase } = useNuxtApp()
const supabase = useSupabaseClient()
// Now you can use $supabase for your database operations
</script>

<script>
const supabase = useSupabaseClient()
import Form from '../components/Form.vue';
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    Form,
    ProductList
  },
  data() {
    return {
      products: [],
      userData: {
        name: '',
        email: ''
      },
      loading: false
    };
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('id');
        
        if (error) throw error;
        this.products = data.map(p => ({ ...p, quantity: 0 }));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    },
    updateQuantity(index, quantity) {
      this.products[index].quantity = quantity;
    },
    updateUser(userData) {
      this.userData = userData;
    },
    async handleSubmit() {
      try {
        this.loading = true;
        const order = {
          user_name: this.userData.name,
          user_email: this.userData.email,
          order_items: this.products
            .filter(p => p.quantity > 0)
            .map(p => ({
              product_id: p.id,
              product_name: p.name,
              quantity: p.quantity
            })),
          created_at: new Date()
        };

        const { error } = await supabase
          .from('orders')
          .insert(order);

        if (error) throw error;
        alert('Bestellung erfolgreich aufgegeben!');
        
        // Reset form
        this.userData = { name: '', email: '' };
        this.products = this.products.map(p => ({ ...p, quantity: 0 }));
      } catch (error) {
        console.error('Error submitting order:', error);
        alert('Fehler beim Aufgeben der Bestellung');
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
