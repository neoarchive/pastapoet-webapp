<template>
  <nav class="navbar navbar-dark px-3">
    <button class="toggle-btn" @click="$emit('toggle')">
      <i class="fas fa-bars"></i>
    </button>
    <a class="navbar-brand ms-3" href="#">PastaPoet</a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
