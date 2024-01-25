<template>
  <div>
    <!-- Header -->

    <nav class="navbar header">
      <div class="logo">Logo</div>
      <div class="navbar-links">
        <router-link to="/">Inicio</router-link>
      </div>
    </nav>


    <!-- Sidebar -->
    <aside v-show="sidebarVisible" class="sidebar">
      <div class="sidebar-content">
        <p>Aqui va el contenido de la sidebar</p>
      </div>
    </aside>

    <!-- Contenido principal de tu página -->
    <main :style="{ marginLeft: sidebarVisible ? '275px' : '0' }">
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sidebarVisible = ref(true);

    return {
      sidebarVisible,
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: white;
}

.header {
  background-color: #D64045;
  color: white;
  padding: 15px;
  z-index: 2;
  margin-top: 0;
  top: 0;
  position: fixed;
  width: 100%;
  margin-top: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.sidebar {
  background-color: #19323C;
  color: white;
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  transition: margin 0.5s;
  z-index: 1;
}

.sidebar-content {
  margin-top: 75px;
  padding: 15px;
}

main {
  margin-top: 75px;
  padding: 15px;
  transition: margin 0.5s;
}
</style>

