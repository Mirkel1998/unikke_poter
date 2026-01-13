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

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <img src="/pawLogo.svg" alt="Logo" class="footer-logo" />
        <h3>Unikke Poter</h3>
      </div>
      <div class="footer-section">
        <RouterLink to="/">Forside</RouterLink>
        <RouterLink to="/about">Om Unikke Poter</RouterLink>
      </div>
      <div class="footer-section">
        <h4>Kontakt</h4>
        <p>Email: H_tranberg@hotmail.com</p>
        <p>Telefon: +45 42 15 20 39</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Unikke Poter. Alle rettigheder forbeholdes.</p>
    </div>
  </footer>
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
  color: #385234;
}

.navbar-links a.router-link-exact-active {
  color: #385234;
  font-weight: bold;
}

.footer {
  background-color: var(--main-green);
  color: white;
  padding: 3rem 0 1rem 0;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-section:first-child {
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  height: 40px;
  width: auto;
}

.footer-section h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin: 0;
}

.footer-section h4 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  margin: 0;
}

.footer-section p {
  font-family: var(--font-body);
  margin: 0;
  font-size: 0.9rem;
}

.footer-section a {
  color: white;
  text-decoration: none;
  font-family: var(--font-body);
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #385234;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.footer-bottom p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  margin: 0;
}
</style>
