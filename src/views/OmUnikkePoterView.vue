<script setup>

</script>

<template>
  <main class="about">
    <section class="about-hero">
      <h1>Om Unikke Poter</h1>
      <p>Din partner i hundetræning og adfærd</p>
    </section>

    <section class="about-content">
      <div class="content-section">
        <div class="text-container">
          <h2>Vores Mission</h2>
          <p>
            Hos Unikke Poter arbejder vi dedikeret for at skabe harmoniske relationer mellem hunde og deres ejere. 
            Vi tror på, at hver hund er unik og fortjener individuel opmærksomhed og træning, der er tilpasset deres 
            specifikke behov og personlighed.
          </p>
          <p>
            Vores mål er at hjælpe dig med at forstå din hunds adfærd og kommunikation, så I sammen kan opbygge 
            et stærkt og tillidsfuldt forhold baseret på gensidig respekt og forståelse.
          </p>
        </div>
        <div class="image-container">
          <img src="/about-image-1.jpg" alt="Hundetræning" />
        </div>
      </div>

      <div class="content-section reverse">
        <div class="text-container">
          <h2>Vores Tilgang</h2>
          <p>
            Vi anvender moderne, evidensbaserede træningsmetoder, der fokuserer på positiv forstærkning og 
            belønningsbaseret læring. Vores tilgang er både human og effektiv, og den skaber glade, trygge hunde 
            og tilfredse ejere.
          </p>
          <p>
            Uanset om det handler om grundlæggende lydighed, adfærdsproblemer eller avanceret træning, tilpasser 
            vi altid vores metoder til den enkelte hund og ejer. Vi tror på, at træning skal være sjovt for både 
            hund og ejer.
          </p>
        </div>
        <div class="image-container">
          <img src="/about-image-2.jpg" alt="Positiv træning" />
        </div>
      </div>

      <div class="values-section">
        <h2>Vores Værdier</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Respekt</h3>
            <p>Vi behandler alle hunde og deres ejere med respekt og empati. Hver hund er unik, og vi møder dem hvor de er.</p>
          </div>
          <div class="value-card">
            <h3>Kvalitet</h3>
            <p>Vi stræber efter høj kvalitet i alt hvad vi gør, fra træning til kundeservice. Vores erfaring og viden er jeres garanti.</p>
          </div>
          <div class="value-card">
            <h3>Engagement</h3>
            <p>Vi brænder for hundetræning og er dedikerede til at hjælpe jer med at nå jeres mål sammen med jeres hund.</p>
          </div>
          <div class="value-card">
            <h3>Tillid</h3>
            <p>Vi bygger langvarige relationer baseret på tillid og åbenhed. Din hunds trivsel og sikkerhed er vores højeste prioritet.</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Klar til at komme i gang?</h2>
        <p>Kontakt os i dag og lad os hjælpe dig og din hund med at opnå jeres fulde potentiale.</p>
        <RouterLink to="/kontakt">
          <button class="cta-button">Kontakt os</button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about {
  min-height: 80vh;
}

.about-hero {
  background-color: var(--main-green);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.about-hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin: 0 0 1rem 0;
}

.about-hero p {
  font-family: var(--font-body);
  font-size: 1.2rem;
  margin: 0;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-section {
  display: flex;
  margin: 4rem 0;
  gap: 3rem;
  align-items: center;
}

.content-section.reverse {
  flex-direction: row-reverse;
}

.text-container {
  flex: 1;
}

.text-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: var(--main-green);
}

.text-container p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 1rem 0;
  color: #333;
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

.values-section {
  margin: 6rem 0;
  text-align: center;
}

.values-section h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: var(--main-green);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-card {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.value-card p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #333;
}

.cta-section {
  text-align: center;
  margin: 6rem 0 4rem 0;
  padding: 3rem;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.cta-section h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.cta-section p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
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
}

.cta-button:hover {
  background-color: #466837;
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }

  .content-section,
  .content-section.reverse {
    flex-direction: column;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .text-container h2 {
    font-size: 2rem;
  }

  .values-section h2,
  .cta-section h2 {
    font-size: 2rem;
  }
}
</style>
