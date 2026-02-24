<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'

const showDropdownAbout = ref(false)
const showDropdownTilmeld = ref(false)
const mobileMenuOpen = ref(false)
const isMobile = ref(window.innerWidth <= 768)

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    mobileMenuOpen.value = false
  }
})

const closeDropdowns = () => {
  showDropdownAbout.value = false
  showDropdownTilmeld.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  closeDropdowns()
}

const toggleDropdown = (dropdown, event) => {
  if (isMobile.value) {
    event.preventDefault()
    if (dropdown === 'about') {
      showDropdownAbout.value = !showDropdownAbout.value
      showDropdownTilmeld.value = false
    } else if (dropdown === 'tilmeld') {
      showDropdownTilmeld.value = !showDropdownTilmeld.value
      showDropdownAbout.value = false
    }
  }
}

const handleDropdownMouseEnter = (dropdown) => {
  if (!isMobile.value) {
    if (dropdown === 'about') {
      showDropdownAbout.value = true
    } else if (dropdown === 'tilmeld') {
      showDropdownTilmeld.value = true
    }
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand" @click="closeMobileMenu">
        <img src="/pawLogo.svg" alt="Logo" class="logo" />
        <h2>Unikke Poter</h2>
      </RouterLink>
      
      <!-- Hamburger Menu Button -->
      <button class="hamburger" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar-links" :class="{ open: mobileMenuOpen }">
        <RouterLink to="/" @click="closeMobileMenu">Forside</RouterLink>
        <div class="dropdown" @mouseenter="handleDropdownMouseEnter('about')" @mouseleave="closeDropdowns">
          <RouterLink to="/about" class="dropdown-toggle" @click="toggleDropdown('about', $event)">
            Om Unikke Poter
          </RouterLink>
          <div v-if="showDropdownAbout" class="dropdown-menu">
            <RouterLink to="/about" @click="closeMobileMenu" class="mobile-parent-link">
              Om Unikke Poter
            </RouterLink>
            <RouterLink to="/hvem-henvender-vi-os-til" @click="closeMobileMenu">
              Hvem henvender Unikke Poter sig til
            </RouterLink>
            <RouterLink to="/traeningsmetoder" @click="closeMobileMenu">
              Træningsmetoder
            </RouterLink>
          </div>
        </div>
        <div class="dropdown" @mouseenter="handleDropdownMouseEnter('tilmeld')" @mouseleave="closeDropdowns">
          <RouterLink to="/tilmeld-hold" class="dropdown-toggle" @click="toggleDropdown('tilmeld', $event)">
            Tilmeld Hold
          </RouterLink>
          <div v-if="showDropdownTilmeld" class="dropdown-menu">
            <RouterLink to="/tilmeld-hold" @click="closeMobileMenu" class="mobile-parent-link">
              Tilmeld Hold
            </RouterLink>
            <RouterLink to="/priser" @click="closeMobileMenu">
              Priser
            </RouterLink>
            <RouterLink to="/beskrivelse-af-hold" @click="closeMobileMenu">
              Beskrivelse af Hold
            </RouterLink>
          </div>
        </div>
        <RouterLink to="/kontakt" @click="closeMobileMenu">Kontakt</RouterLink>
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

/* Hide mobile parent links on desktop */
.mobile-parent-link {
  display: none;
}

/* Hamburger Menu Button */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
}

.hamburger span {
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: var(--main-green);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    transition: right 0.3s ease;
    overflow-y: auto;
    z-index: 1001;
  }

  .navbar-links.open {
    right: 0;
  }

  .navbar-links > a,
  .navbar-links > .dropdown > .dropdown-toggle {
    font-size: 1.1rem;
    width: 100%;
    padding: 0.5rem 0;
    display: block;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-toggle {
    width: 100%;
    padding: 0.5rem 0;
    display: block;
  }

  .dropdown-menu {
    position: relative;
    left: 0;
    top: 0;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 0.5rem;
    border-radius: 4px;
    width: 100%;
  }

  .dropdown-menu a {
    font-size: 1rem;
    padding: 0.7rem 1rem;
    pointer-events: auto;
  }

  .mobile-parent-link {
    display: block;
    font-weight: bold;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 0.25rem;
  }
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
