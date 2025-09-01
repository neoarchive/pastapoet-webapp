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
