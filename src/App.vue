<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand">
        <img src="/pawLogo.svg" alt="Logo" class="logo" />
        <h2>Unikke Poter</h2>
      </RouterLink>
      <div class="navbar-links">
        <RouterLink to="/">Forside</RouterLink>
        <RouterLink to="/about">Om Unikke Poter</RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
.navbar {
  background-color: var(--main-green);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
}

.logo {
  height: 40px;
  width: auto;
}

.navbar-brand h2 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-family: var(--font-heading);
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-family: var(--font-body);
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: #42b983;
}

.navbar-links a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>
