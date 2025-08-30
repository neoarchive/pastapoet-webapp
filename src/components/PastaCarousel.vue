<template>
  <div id="pastaCarousel" class="carousel slide my-5" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card pasta-card">
          <img
            src="/src/assets/pasta1.webp"
            class="card-img-top"
            alt="Pasta 1"
          />
          <div class="card-body">
            <h5 class="card-title">Classic Spaghetti</h5>
            <p class="card-text">A timeless Italian classic.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="card pasta-card">
          <img
            src="/src/assets/pasta2.webp"
            class="card-img-top"
            alt="Pasta 2"
          />
          <div class="card-body">
            <h5 class="card-title">Penne Alfredo</h5>
            <p class="card-text">Creamy and delightful.</p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="card pasta-card">
          <img
            src="/src/assets/pasta3.webp"
            class="card-img-top"
            alt="Pasta 3"
          />
          <div class="card-body">
            <h5 class="card-title">Fusilli Pesto</h5>
            <p class="card-text">Fresh basil goodness.</p>
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
</template>

<script>
export default {
  name: 'PastaCarousel',
};
</script>
