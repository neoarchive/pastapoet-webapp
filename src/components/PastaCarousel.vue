<template>
  <section class="my-5">
    <h2 class="fw-bold mb-4">Our Pasta Collection</h2>
    <div id="pastaCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(slide, slideIndex) in slides"
          :key="slideIndex"
          class="carousel-item"
          :class="{ active: slideIndex === 0 }"
        >
          <div class="row g-4 justify-content-center">
            <div v-for="(pasta, idx) in slide" :key="idx" class="col-md-4">
              <div class="card pasta-card">
                <img :src="pasta.img" class="card-img-top" :alt="pasta.name" />
                <div class="card-body">
                  <h5 class="card-title">{{ pasta.name }}</h5>
                  <p class="card-text">{{ pasta.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
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
  </section>
</template>

<script>
import pastaImg from '../assets/pasta1.jpg';

export default {
  name: "PastaCarousel",
  data() {
    return {
      pastas: [
        {
          name: "Spaghetti Carbonara",
          desc: "Classic Roman pasta with eggs, cheese, pancetta, and pepper.",
          img: pastaImg,
        },
        {
          name: "Penne Arrabiata",
          desc: "Spicy tomato sauce with garlic and red chili peppers.",
          img: pastaImg,
        },
        {
          name: "Fettuccine Alfredo",
          desc: "Creamy pasta with butter and parmesan.",
          img: pastaImg,
        },
        {
          name: "Lasagna",
          desc: "Layers of pasta, ragù, béchamel, and cheese.",
          img: pastaImg,
        },
        {
          name: "Ravioli",
          desc: "Pasta pockets filled with ricotta and spinach.",
          img: "src/assets/pasta1.jpg",
        },
        {
          name: "Tortellini",
          desc: "Ring-shaped pasta filled with meat and cheese.",
          img: "src/assets/pasta1.jpg",
        },
      ],
    };
  },
  computed: {
    slides() {
      const chunkSize = 3; // 3 cards per slide
      const result = [];
      for (let i = 0; i < this.pastas.length; i += chunkSize) {
        result.push(this.pastas.slice(i, i + chunkSize));
      }
      return result;
    },
  },
};
</script>
