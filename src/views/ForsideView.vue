<script setup>

</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Velkommen til Unikke Poter</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="image-container">
        <img src="/your-image.jpg" alt="Description" />
      </div>
      <div class="text-container">
        <h2>Overskrift</h2>
        <p>
          Din brødtekst kommer her. Skriv om dine unikke poter og hvad der gør dem specielle.
          Du kan tilføje flere afsnit efter behov.
        </p>
        <button class="cta-button">Læs mere</button>
      </div>
    </section>

    <section class="content-section reverse">
      <div class="image-container">
        <img src="/your-image.jpg" alt="Description" />
      </div>
      <div class="text-container">
        <h2>Overskrift 2</h2>
        <p>
          Din anden brødtekst kommer her. Fortsæt med at fortælle din historie.
        </p>
        <button class="cta-button">Læs mere</button>
      </div>
    </section>

    <section class="content-section">
      <div class="image-container">
        <img src="/your-image.jpg" alt="Description" />
      </div>
      <div class="text-container">
        <h2>Overskrift 3</h2>
        <p>
          Din tredje brødtekst kommer her. Afslut med det vigtigste budskab.
        </p>
        <button class="cta-button">Læs mere</button>
      </div>
    </section>

    <section class="image-banner">
      <img src="/banner-image.jpg" alt="Banner" />
      <div class="banner-content">
        <h2>Hvis du har nogle spørgsmål<br>er du velkommen til at tage kontakt til os</h2>
        <button class="cta-button">Kontakt os</button>
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

@media (max-width: 768px) {
  .content-section,
  .content-section.reverse {
    flex-direction: column;
  }
  
  .banner-content h2 {
    font-size: 2rem;
  }
}
</style>
