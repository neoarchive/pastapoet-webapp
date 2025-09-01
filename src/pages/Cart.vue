<template>
  <section class="cart-section my-5">
    <div class="container">
      <div class="card shadow-sm cart-card">
        <!-- Title Bar -->
        <div class="d-flex justify-content-between align-items-center title-bar p-3">
          <h2 class="fw-bold mb-0">Your Cart</h2>
          <button class="btn btn-outline-dark btn-sm" @click="toggleSection">
            <i class="fas" :class="showCart ? 'fa-arrow-right' : 'fa-arrow-left'"></i>
          </button>
        </div>

        <!-- Section Toggle -->
        <div class="card-body">
          <!-- Cart Items -->
          <div v-if="showCart">
            <div
              class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
              v-for="(item, index) in cart.items"
              :key="index"
            >
              <div>
                <h6 class="fw-bold mb-1">{{ item.name }}</h6>
                <small>${{ item.price.toFixed(2) }}</small>
              </div>
              <div>
                <button class="btn btn-outline-danger btn-sm" @click="removeItem(index)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <div class="d-flex justify-content-between fw-bold mt-3">
              <span>Total</span>
              <span>${{ cart.totalPrice.toFixed(2) }}</span>
            </div>

            <div class="text-end mt-3">
              <button class="btn btn-primary" @click="toggleSection">Proceed to Checkout</button>
            </div>
          </div>

          <!-- Checkout Form -->
          <div v-else>
            <form @submit.prevent="submitOrder">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" v-model="form.name" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="tel" class="form-control" v-model="form.phone" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Address</label>
                <textarea class="form-control" v-model="form.address" rows="3" required></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-success">Submit Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useCartStore } from '@/store'

const cart = useCartStore()
const showCart = ref(true)
const cartItems = ref([
        { name: "Pasta 1", price: 12.5 },
        { name: "Dessert 2", price: 6.0 },
        { name: "Soup 3", price: 8.75 },
])
const form = reactive({
  name: "",
  phone: "",
  address: "",
})

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price, 0)
)


function toggleSection(){
  showCart.value = !showCart.value
}

function removeItem(index){
  cart.removeItem(index)
}

function submitOrder(){
  alert('Order placed')
  form.name = ""
  form.phone = ""
  form.address = ""
  cartItems.value = []
  showCart.value = true
}
</script>

<style scoped>
.cart-card {
  border-radius: 12px;
  overflow: hidden;
}

.title-bar {
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.cart-section {
  min-height: 70vh;
}
</style>
