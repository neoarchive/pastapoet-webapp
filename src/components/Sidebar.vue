<template>
        <div id="sidebar" class="nav-dark" :class="{ collapsed: this.collapsed }">
          <h4 class="p-3">Menu</h4>
          <div class="nav-wrapper">
            <nav class="nav flex-column">
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/order" class="nav-link">Order</router-link>
              <router-link to="/cart" class="nav-link">My cart <i class="fa fa-shopping-cart"></i></router-link>
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </nav>
          </div>
          <div class='social-wrapper'>
            <div class="sidebar-social mt-auto p-3 text-center">
              <a href="https://www.instagram.com/thepastapoetuk/" target="_blank" class="text-light me-3">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="text-light me-3">
                <i class="fab fa-tiktok"></i>
              </a>
            </div>
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

<style>
/* Sidebar */
#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #111;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .nav-link {
  color: #ddd;
  padding: 15px;
}

#sidebar .nav-link:hover {
  background: #9c27b0;
  color: #fff;
}

/* Collapsed Sidebar */
#sidebar.collapsed {
  margin-left: -250px;
  transform: translateX(-100%);
}

.sidebar-social a {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.sidebar-social a:hover {
  color: #f8d24f; /* example highlight color */
}
</style>