<template>


  <section class="about-us my-5 py-5 text-center position-relative" 
         style="background: linear-gradient(135deg, #f8f1e4, #fdf2e6); border-radius: 12px;">
  <div class="container">
    <h2 class="fw-bold mb-3 position-relative d-inline-block" 
        style="font-family: 'Poppins', sans-serif; color: #3a3a3a;">
      About Us
      <span class="d-block mx-auto mt-2" 
            style="width: 60px; height: 4px; background-color: #9c27b0; border-radius: 2px;"></span>
    </h2>
    <p class="lead mx-auto" 
       style="max-width: 700px; font-size: 1.1rem; line-height: 1.8; color: #3a3a3a;">
      At <strong>PastaPoet</strong>, we believe in combining <em>culinary artistry</em> 
      with <em>poetic expression</em>. Each dish is crafted to tell a story, one plate at a time. 
      <span style="color: #9c27b0; font-weight: 600;">Handmade, heartfelt, unforgettable.</span>
    </p>

    <!-- Decorative icons -->
    <div class="mt-4">
      <i class="fas fa-utensils fa-2x text-secondary mx-2"></i>
      <i class="fas fa-leaf fa-2x text-success mx-2"></i>
      <i class="fas fa-heart fa-2x mx-2" style="color: #9c27b0;"></i>
    </div>
  </div>
</section>



</template>

<script>
export default {
  name: 'AboutSection',
};
</script>
