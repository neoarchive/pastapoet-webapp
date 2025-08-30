<template>
  <div
    id="sidebar"
    :class="{ collapsed: collapsed }"
    class="d-flex flex-column p-3"
  >
    <ul class="nav flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li>
        <a href="#" class="nav-link">Menu</a>
      </li>
      <li>
        <a href="#" class="nav-link">About</a>
      </li>
      <li>
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Social Media -->
    <div class="sidebar-social mt-auto">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
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
