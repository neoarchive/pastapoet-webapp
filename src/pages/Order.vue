<template>
  <section class="menu-section my-5">
    <div class="container">

      <!-- Menu Container -->
      <div class="menu-container shadow-sm bg-white p-3">
        <!-- Title Bar -->
        <div class="d-flex justify-content-between align-items-center mb-4 title-bar">
          <h2 class="fw-bold mb-0">Menu</h2>
          <router-link to="/cart" class="btn btn-outline-dark btn-sm position-relative">
            <i class="fas fa-shopping-cart"></i>
            <span v-if="cart.totalItems > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
               {{  cart.totalItems }}
            </span>
          </router-link>
        </div>

        <!-- Pasta Carousel -->
        
        <span class="category-title d-block text-center fw-bold mb-3">Pasta</span>
        <div id="pastaCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
              <div class="d-flex justify-content-between">
                <div
                  class="card shadow-sm small-card bg-dark text-light"
                  v-for="n in 5"
                  :key="'pasta1-'+n"
                >
                  <img :src="pastaImg" class="card-img-top" alt="Pasta Item">
                  <div class="card-body text-center">
                    <h6 class="card-title fw-bold">Pasta {{ n }}</h6>
                    <p class="mb-2">$ {{ (8 + n).toFixed(2) }}</p>
                    <div class="d-flex justify-content-center gap-2 mt-2">
                      <button class="btn btn-outline-primary btn-sm"><i class="fas fa-plus"></i></button>
                      <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
              <div class="d-flex justify-content-between">
                <div
                  class="card shadow-sm small-card bg-dark text-light"
                  v-for="n in 5"
                  :key="'pasta2-'+n"
                >
                  <img :src="pastaImg" class="card-img-top" alt="Pasta Item">
                  <div class="card-body text-center">
                    <h6 class="card-title fw-bold">Pasta {{ n + 5 }}</h6>
                    <p class="mb-2">$ {{ (13 + n).toFixed(2) }}</p>
                    <div class="d-flex justify-content-center gap-2 mt-2">
                      <button class="btn btn-outline-primary btn-sm"><i class="fas fa-plus"></i></button>
                      <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#pastaCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#pastaCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <!-- Dessert Carousel -->
        <span class="category-title d-block text-center fw-bold mb-3">Deserts</span>
        <div id="dessertCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
              <div class="d-flex justify-content-between">
                <div
                  class="card shadow-sm small-card bg-dark text-light"
                  v-for="n in 5"
                  :key="'dessert1-'+n"
                >
                  <img :src="pastaImg" class="card-img-top" alt="Dessert Item">
                  <div class="card-body text-center">
                    <h6 class="card-title fw-bold">Dessert {{ n }}</h6>
                    <p class="mb-2">$ {{ (5 + n).toFixed(2) }}</p>
                    <div class="d-flex justify-content-center gap-2 mt-2">
                      <button class="btn btn-outline-primary btn-sm"><i class="fas fa-plus"></i></button>
                      <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
              <div class="d-flex justify-content-between">
                <div
                  class="card shadow-sm small-card bg-dark text-light"
                  v-for="n in 5"
                  :key="'dessert2-'+n"
                >
                  <img :src="pastaImg" class="card-img-top" alt="Dessert Item">
                  <div class="card-body text-center">
                    <h6 class="card-title fw-bold">Dessert {{ n + 5 }}</h6>
                    <p class="mb-2">$ {{ (10 + n).toFixed(2) }}</p>
                    <div class="d-flex justify-content-center gap-2 mt-2">
                      <button class="btn btn-outline-primary btn-sm"><i class="fas fa-plus"></i></button>
                      <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#dessertCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#dessertCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <!-- Soup & Beverages Carousel -->
        
        <span class="category-title d-block text-center fw-bold mb-3">Beverages</span>
        <div id="soupCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!-- First Slide -->
            <div class="carousel-item active">
              <div class="d-flex justify-content-between">
                <div
                  class="card shadow-sm small-card bg-dark text-light"
                  v-for="n in 5"
                  :key="'soup1-'+n"
                >
                  <img :src="pastaImg" class="card-img-top" alt="Soup Item">
                  <div class="card-body text-center">
                    <h6 class="card-title fw-bold">Soup {{ n }}</h6>
                    <p class="mb-2">$ {{ (6 + n).toFixed(2) }}</p>
                    <div class="d-flex justify-content-center gap-2 mt-2">
                      <button class="btn btn-outline-primary btn-sm"><i class="fas fa-plus"></i></button>
                      <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Second Slide -->
            <div class="carousel-item">
              <div class="d-flex justify-content-between">
                <div
                  class="card shadow-sm small-card bg-dark text-light"
                  v-for="n in 5"
                  :key="'soup2-'+n"
                >
                  <img :src="pastaImg" class="card-img-top" alt="Soup Item">
                  <div class="card-body text-center">
                    <h6 class="card-title fw-bold">Soup {{ n + 5 }}</h6>
                    <p class="mb-2">$ {{ (11 + n).toFixed(2) }}</p>
                    <div class="d-flex justify-content-center gap-2 mt-2">
                      <button class="btn btn-outline-primary btn-sm"><i class="fas fa-plus"></i></button>
                      <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#soupCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#soupCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from '@/store';
import pastaImg from '@/assets/pasta1.jpg';

const cart = useCartStore()
</script>

<style scoped>
.menu-container {
  border-radius: 0;
  background-color: #fff;
}

.title-bar {
  background-color: #f8f8f8;
  padding: 0.75rem 1rem;
  border-radius: 0;
  border-bottom: 1px solid #ddd;
}

.title-bar h2 {
  font-size: 1.5rem;
  color: #000;
}

.title-bar .btn {
  border-radius: 0;
}

.card {
  border-radius: 0 !important;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.small-card {
  width: 18%;
}

.card-body h6 {
  font-size: 0.85rem;
}

.card-body p {
  font-size: 0.8rem;
  margin: 0;
}

.btn-outline-primary,
.btn-outline-danger {
  border-radius: 0 !important;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.blackhead {
  color: #000;
}

/* Category title styling */
.category-title {
  font-size: 1.50rem;       /* slightly smaller than h3 */
  font-family: "Style Script", cursive;
  color: #020b13;            /* dark text on white container */
  display: block;
  text-align: center;        /* center the text */
  margin-bottom: 1rem;       /* spacing below title */
  font-weight: 600;          /* semi-bold */
}

/* Let clicks pass through the big control area… */
.carousel-control-prev,
.carousel-control-next {
  pointer-events: none;
}

/* …but keep the actual arrow icons clickable */
.carousel-control-prev .carousel-control-prev-icon,
.carousel-control-next .carousel-control-next-icon {
  pointer-events: auto;
}
</style>
