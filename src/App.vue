<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showDropdownAbout = ref(false)
const showDropdownTilmeld = ref(false)

const closeDropdowns = () => {
  showDropdownAbout.value = false
  showDropdownTilmeld.value = false
}
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
        <div class="dropdown" @mouseenter="showDropdownAbout = true" @mouseleave="closeDropdowns">
          <RouterLink to="/about" class="dropdown-toggle">
            Om Unikke Poter
          </RouterLink>
          <div v-if="showDropdownAbout" class="dropdown-menu">
            <RouterLink to="/hvem-henvender-vi-os-til" @click="closeDropdowns">
              Hvem henvender Unikke Poter sig til
            </RouterLink>
            <RouterLink to="/traeningsmetoder" @click="closeDropdowns">
              Træningsmetoder
            </RouterLink>
          </div>
        </div>
        <div class="dropdown" @mouseenter="showDropdownTilmeld = true" @mouseleave="closeDropdowns">
          <RouterLink to="/tilmeld-hold" class="dropdown-toggle">
            Tilmeld Hold
          </RouterLink>
          <div v-if="showDropdownTilmeld" class="dropdown-menu">
            <RouterLink to="/priser" @click="closeDropdowns">
              Priser
            </RouterLink>
            <RouterLink to="/beskrivelse-af-hold" @click="closeDropdowns">
              Beskrivelse af Hold
            </RouterLink>
          </div>
        </div>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
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
        <h4>Links</h4>
        <RouterLink to="/">Forside</RouterLink>
        <RouterLink to="/about">Om Unikke Poter</RouterLink>
        <RouterLink to="/tilmeld-hold">Tilmeld Hold</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
      </div>
      <div class="footer-section">
        <h4>Kontakt Information</h4>
        <p>Email: unikkepoter@gmail.com</p>
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
  align-items: center;
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

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--main-green);
  min-width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  z-index: 1001;
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  font-family: var(--font-body);
  transition: background-color 0.3s;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background-color: #466837;
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
