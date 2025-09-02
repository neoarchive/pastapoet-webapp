<template>
          <nav class="navbar navbar-dark fixed-top">
          <div class="container-fluid">
            <button class="btn toggle-btn" @click="$emit('toggle')">☰</button>
            <router-link to="/" class="navbar-brand ms-3" href="#">The Pasta Poet</router-link>
          </div>
        </nav>
</template>

<script setup>
defineOptions({
  name: 'Navbar'
})
</script>

<style>

/* Navbar */
.navbar {
  background: #111;
}

.navbar-brand {
  font-weight: 600;
  color: #fff !important;
}

.toggle-btn {
  background: #9c27b0;
  border: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
}
</style>