<script setup>
import { ref } from 'vue'

const anmeldelser = [
  {
    name: 'Maria Hansen',
    rating: 5,
    text: 'Fantastisk træning! Min hund har lært så meget på kort tid.'
  },
  {
    name: 'Peter Nielsen',
    rating: 5,
    text: 'Professionel og venlig tilgang. Kan varmt anbefales! Isreligt gode resultater med min hunds adfærd. Og mange andre dejlige ting'
  },
  {
    name: 'Anne Larsen',
    rating: 5,
    text: 'Bedste hundetræning vi har prøvet. Meget tålmodig instruktør.'
  }
]

const expandedReviews = ref([])

const toggleReview = (index) => {
  if (expandedReviews.value.includes(index)) {
    expandedReviews.value = expandedReviews.value.filter(i => i !== index)
  } else {
    expandedReviews.value.push(index)
  }
}

const isExpanded = (index) => {
  return expandedReviews.value.includes(index)
}

const shouldShowButton = (text) => {
  return text.length > 120
}
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-waves">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
      <div class="hero-content">
        <h1>Velkommen til Unikke Poter</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="image-container">
        <img src="/forside-1.jpg" alt="Description" />
      </div>
      <div class="text-container">
        <h2>Om unikke Poter</h2>
        <p>
        Hos Unikke Poter arbejder vi dedikeret for at skabe harmoniske relationer mellem hunde og deres ejere. Vi tror på, at hver hund er unik og fortjener individuel opmærksomhed og træning, der er tilpasset deres specifikke behov og personlighed.
        </p>
        <RouterLink to="/about">
          <button class="cta-button">Læs mere</button>
        </RouterLink>
      </div>
    </section>

    <section class="content-section reverse">
      <div class="image-container">
        <img src="/forside-2.jpg" alt="Description" />
      </div>
      <div class="text-container">
        <h2>Træningsmetoder</h2>
        <p>
          Hos Unikke Poter bruger vi klikkertræning som vores primære metode. Klikkertræning er en positiv, belønningsbaseret tilgang, der bygger på videnskabelig forskning om hundes indlæring. Med en klikker kan vi præcist markere den rigtige adfærd i det øjeblik, den sker, hvilket gør træningen tydelig og effektiv for din hund.
        </p>
        <RouterLink to="/traeningsmetoder">
          <button class="cta-button">Læs mere</button>
        </RouterLink>
      </div>
    </section>

    <section class="content-section">
      <div class="image-container">
        <img src="/forside-3.jpg" alt="Description" />
      </div>
      <div class="text-container">
        <h2>Tilmeld hold</h2>
        <p>
          Tilmeld dig vores hold og giv din hund den bedste træning. Vi tilbyder både holdtræning og alenetræning, så du kan vælge den løsning, der passer bedst til dig og din hund. Vores erfarne trænere står klar til at hjælpe dig og din hund med at nå jeres mål.
        </p>
        <RouterLink to="/tilmeld-hold">
          <button class="cta-button">Læs mere</button>
        </RouterLink>
      </div>
    </section>

    <section class="anmeldelser-section">
      <h2>Hvad Siger Vores Kunder?</h2>
      <div class="anmeldelser-container">
        <div v-for="(anmeldelse, index) in anmeldelser" :key="index" class="anmeldelse-card">
          <div class="stars">
            <span v-for="star in anmeldelse.rating" :key="star">⭐</span>
          </div>
          <p class="anmeldelse-text" :class="{ 'truncated': !isExpanded(index) && shouldShowButton(anmeldelse.text) }">
            "{{ anmeldelse.text }}"
          </p>
          <button 
            v-if="shouldShowButton(anmeldelse.text)" 
            @click="toggleReview(index)" 
            class="read-more-button"
          >
            {{ isExpanded(index) ? 'Vis mindre' : 'Læs anmeldelse' }}
          </button>
          <p class="anmeldelse-name">- {{ anmeldelse.name }}</p>
        </div>
      </div>
    </section>

    <section class="image-banner">
      <img src="/banner-image.jpg" alt="Banner" />
      <div class="banner-content">
        <h2>Hvis du har nogle spørgsmål<br>er du velkommen til at tage kontakt</h2>
        <RouterLink to="/kontakt">
          <button class="cta-button">Kontakt os</button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: url('/forsideHero.JPG');
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
}

.hero-content h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-content p {
  font-family: var(--font-body);
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-waves {
  display: none;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(33.33%);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content-section {
  display: flex;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  gap: 3rem;
  align-items: center;
}

.content-section.reverse {
  flex-direction: row-reverse;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.text-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0;
  color: var(--main-green);
}

.text-container p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  color: #333;
}

.cta-button {
  background-color: var(--main-green);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-family: var(--font-body);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-start;
}

.cta-button:hover {
  background-color: #466837;
}

.image-banner {
  position: relative;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.image-banner img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center 10%;
  border-radius: 8px;
}

.banner-content {
  position: absolute;
  top: 3rem;
  left: 3rem;
  text-align: left;
  z-index: 10;
}

.banner-content h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.anmeldelser-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  text-align: center;
}

.anmeldelser-section h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: var(--main-green);
}

.anmeldelser-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.anmeldelse-card {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s;
}

.anmeldelse-card:hover {
  transform: translateY(-5px);
}

.stars {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.anmeldelse-text {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 1rem 0;
  font-style: italic;
}

.anmeldelse-text.truncated {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-button {
  background-color: transparent;
  color: var(--main-green);
  border: none;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.read-more-button:hover {
  color: #466837;
  text-decoration: underline;
}

.anmeldelse-name {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--main-green);
  margin: 0;
}

@media (max-width: 768px) {
  .hero {
    height: 50vh;
    background-image: none;
    background-color: var(--main-green);
    overflow: hidden;
  }

  .hero-overlay {
    display: none;
  }

  .hero-waves {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 300%;
    height: 100%;
    background: #466837;
    opacity: 0.3;
    border-radius: 45%;
    left: -100%;
  }

  .wave1 {
    top: 60%;
    animation: wave 15s linear infinite;
  }

  .wave2 {
    top: 65%;
    opacity: 0.2;
    animation: wave 20s linear infinite;
    animation-delay: -5s;
  }

  .wave3 {
    top: 70%;
    opacity: 0.15;
    animation: wave 25s linear infinite;
    animation-delay: -10s;
  }

  .hero-content {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 100%;
    box-sizing: border-box;
    transition: none !important;
    animation: none !important;
  }

  .hero-content h1 {
    font-size: 2rem;
    text-shadow: none;
    padding: 0 1rem;
    margin: 0;
    transition: none !important;
  }

  .content-section,
  .content-section.reverse {
    flex-direction: column;
  }

  .image-banner {
    padding: 0 1rem;
  }

  .image-banner img {
    height: 400px;
    transform: scaleX(-1);
    object-position: right center;
  }
  
  .banner-content {
    top: auto;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    max-width: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    background-color: rgba(70, 104, 55, 0.85);
    padding: 1rem;
    border-radius: 8px;
    backdrop-filter: blur(4px);
  }

  .banner-content h2 {
    font-size: 1.1rem;
    margin: 0 0 0.75rem 0;
    line-height: 1.2;
  }

  .banner-content .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .anmeldelser-container {
    grid-template-columns: 1fr;
  }
}
</style>
