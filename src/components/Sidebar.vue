<template>
        <div id="sidebar" class="nav-dark" :class="{ collapsed: this.collapsed }">
          <h4 class="p-3">Menu</h4>
          <nav class="nav flex-column">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/order" class="nav-link">Order</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
            <router-link to="/cart" class="nav-link">Cart</router-link>

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
      default: false,
    },
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    }
  },
};
</script>
