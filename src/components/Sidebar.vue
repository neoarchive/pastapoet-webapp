<template>
        <div id="sidebar" class="bg-dark d-flex flex-column" :class="{ collapsed: collapsed }">
          <h4 class="p-3">Menu</h4>
          <nav class="nav flex-column">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Our Pasta</a>
            <a class="nav-link" href="#">About</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
          <div class="sidebar-social mt-auto p-3 text-center">
            <a href="https://www.instagram.com/thepastapoetuk/" target="_blank" class="text-light me-3">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-light me-3">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
