<template>
          <nav class="navbar navbar-dark fixed-top">
          <div class="container-fluid">
            <button class="btn toggle-btn" @click="$emit('toggle')">☰</button>
            <a class="navbar-brand ms-3" href="#">The Pasta Poet</a>
          </div>
        </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
