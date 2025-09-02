<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar @toggle="ostore.toggleSidebar" />

    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <Sidebar :collapsed="ostore.isCollapsed"></Sidebar>

      <!-- Main Content -->
      <div id="content" class="p-4 flex-grow-1">
        <transition 
          @after-leave="onAfterLeave"
          name='fade' mode="out-in"
        >
          <router-view></router-view>
        </transition>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { generalStore } from '@/store'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

const ostore = generalStore()

function onAfterLeave(el){
  ostore.hideSidebar()
}
</script>
<style>
@import "./style.css";
</style>
