<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <NavbarComponent @toggle="toggleSidebar" />

    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <SidebarComponent :collapsed="isCollapsed" />

      <!-- Main Content -->
      <div id="content" class="p-4 flex-grow-1">
        <HeroSection />
        <PastaCarousel />
        <AboutSection />
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Hero from './components/Hero.vue';
import PastaCarousel from './components/PastaCarousel.vue';
import AboutSection from './components/AboutSection.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
    HeroSection,
    PastaCarousel,
    AboutSection,
    FooterComponent,
  },
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>
