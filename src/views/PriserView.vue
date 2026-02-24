<script setup>

</script>

<template>
  <main class="priser">
    <section class="hero">
      <h1>Priser</h1>
      <p>Vælg den pakke der passer til dig og din hund</p>
    </section>

    <section class="pricing-section">
      <div class="pricing-container">
        <div class="pricing-card">
          <h2>Holdtræning</h2>
          <div class="price-tag">
            <span class="price">1.200 kr.</span>
            <span class="period">/ 8 uger</span>
          </div>
          <ul class="features">
            <li>Struktureret træning over 8 uger</li>
            <li>1 times træning hver uge</li>
            <li>Max 6 hund-ejer-par</li>
            <li>Personlig vejledning</li>
            <li>Socialisering med andre hunde</li>
            <li>Træning i distraktionsmiljø</li>
          </ul>
          <RouterLink to="/tilmeld-formular">
            <button class="cta-button">Tilmeld nu</button>
          </RouterLink>
        </div>

        <div class="pricing-card">
          <h2>Alene Træning</h2>
          <div class="price-tag">
            <span class="price">400 kr.</span>
            <span class="period">/ time</span>
          </div>
          <ul class="features">
            <li>Skræddersyet træningsplan</li>
            <li>Fleksible tidspunkter</li>
            <li>Individuel vejledning</li>
            <li>Fokus på specifikke problemer</li>
            <li>Træning i dit eget tempo</li>
            <li>Mulighed for hjemmebesøg</li>
          </ul>
          <RouterLink to="/tilmeld-formular">
            <button class="cta-button">Tilmeld nu</button>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="info-section">
      <div class="info-container">
        <h2>Har du spørgsmål om priserne?</h2>
        <p>Kontakt os for at høre mere om vores pakkeløsninger og muligheder for særlige aftaler.</p>
        <RouterLink to="/kontakt">
          <button class="cta-button-secondary">Kontakt os</button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.priser {
  min-height: 80vh;
}

.hero {
  background-color: var(--main-green);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin: 0 0 1rem 0;
}

.hero p {
  font-family: var(--font-body);
  font-size: 1.2rem;
  margin: 0;
}

.pricing-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.pricing-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: start;
}

.pricing-card {
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-color: var(--main-green);
}

.pricing-card h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 2rem 0;
  color: var(--main-green);
}

.price-tag {
  margin-bottom: 2rem;
}

.price {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--main-green);
  display: block;
}

.period {
  font-family: var(--font-body);
  font-size: 1.2rem;
  color: #666;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
  flex-grow: 1;
}

.features li {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 2;
  color: #333;
  padding-left: 1.5rem;
  position: relative;
}

.features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--main-green);
  font-weight: bold;
}

.cta-button {
  background-color: var(--main-green);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-family: var(--font-body);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.cta-button:hover {
  background-color: #466837;
}

.info-section {
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  text-align: center;
}

.info-container {
  max-width: 800px;
  margin: 0 auto;
}

.info-container h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.info-container p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  color: #333;
}

.cta-button-secondary {
  background-color: transparent;
  color: var(--main-green);
  border: 2px solid var(--main-green);
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-family: var(--font-body);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.cta-button-secondary:hover {
  background-color: var(--main-green);
  color: white;
}

@media (max-width: 768px) {
  .pricing-section {
    padding: 3rem 1rem;
  }

  .pricing-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }

  .pricing-card {
    padding: 2rem 1.5rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .hero {
    padding: 3rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .pricing-card h2 {
    font-size: 1.5rem;
  }

  .price {
    font-size: 2.5rem;
  }

  .info-section {
    padding: 3rem 1rem;
  }
}
</style>