<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar @toggle="toggleSidebar" />

    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <Sidebar :collapsed="isCollapsed"></Sidebar>

      <!-- Main Content -->
      <div id="content" class="p-4 flex-grow-1">
        <transition name='fade' mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      isCollapsed: true,
    }
  },
  methods: {
    toggleSidebar(){
      this.isCollapsed = !this.isCollapsed;
    }
  },
};
</script>

<style>
@import "./style.css";
</style>
