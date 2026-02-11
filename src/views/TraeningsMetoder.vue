<script setup>

</script>

<template>
  <main class="traeningsmetoder">

    <section class="intro-section">
      <div class="intro-container">
        <h2>Hvad er Klikkertræning?</h2>
        <p>
          Klikkertræning er en videnskabeligt funderet træningsmetode baseret på positiv forstærkning. 
          Klikkerens lyd bliver et præcist signal til hunden om, at den har gjort noget rigtigt - og at 
          belønning er på vej. Denne metode bygger på principperne fra operant betingning og er en af de 
          mest effektive og humane måder at træne hunde på.
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="content-grid">
        <div class="text-block">
          <h2>Hvordan Virker Det?</h2>
          <p>
            Klikkeren fungerer som en bro mellem adfærd og belønning. Når din hund udfører den ønskede 
            adfærd, klikker du øjeblikkeligt. Dette præcise signal fortæller hunden nøjagtigt hvad den 
            gjorde rigtigt. Efter klikket følger altid en belønning - typisk en godbid.
          </p>
          <p>
            Det smukke ved klikkertræning er, at den gør kommunikationen mellem dig og din hund krystalklart. 
            Din hund lærer at eksperimentere og tilbyde adfærd for at få dig til at klikke. Dette skaber en 
            aktiv, tænkende hund der elsker at lære nyt.
          </p>
        </div>
        <div class="image-block large">
          <img src="/klikker-1.jpg" alt="Klikkertræning i aktion" />
        </div>
      </div>
    </section>

    <section class="benefits-section">
      <div class="benefits-container">
        <h2>Fordele ved Klikkertræning</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">✓</div>
            <h3>Præcis Kommunikation</h3>
            <p>Klikkerens lyd er konsistent og præcis, hvilket gør det lettere for hunden at forstå hvad den gør rigtigt.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">✓</div>
            <h3>Positiv og Sjov</h3>
            <p>Træningen er baseret på belønning, ikke straf. Dette skaber glade hunde der elsker at lære.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">✓</div>
            <h3>Styrker Båndet</h3>
            <p>Positiv træning opbygger tillid og respekt mellem dig og din hund.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">✓</div>
            <h3>Hurtigere Indlæring</h3>
            <p>Hunde lærer hurtigere når de forstår præcist hvad der forventes af dem.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="visual-section">
      <div class="visual-container">
        <div class="visual-left">
          <img src="/klikker-2.jpg" alt="Hundetræning" />
        </div>
        <div class="visual-right">
          <img src="/klikker-3.jpg" alt="Hundetræning" />
        </div>
      </div>
    </section>

    

    <section class="cta-section">
      <div class="cta-content">
        <h2>Klar til at Prøve Klikkertræning?</h2>
        <p>Kom og oplev fordelene ved positiv træning på vores hold eller i individuelle sessioner</p>
        <RouterLink to="/tilmeld-hold">
          <button class="cta-button">Se vores hold</button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.traeningsmetoder {
  min-height: 80vh;
}

.intro-section {
  background-color: #f5f5f5;
  padding: 4rem 2rem;
}

.intro-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.intro-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: var(--main-green);
}

.intro-container p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.content-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-block h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: var(--main-green);
}

.text-block p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 1rem 0;
  color: #333;
}

.image-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-block.large {
  height: 400px;
}

.benefits-section {
  background-color: #f5f5f5;
  padding: 4rem 2rem;
}

.benefits-container {
  max-width: 1200px;
  margin: 0 auto;
}

.benefits-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: var(--main-green);
  text-align: center;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.benefit-icon {
  font-size: 3rem;
  color: var(--main-green);
  margin-bottom: 1rem;
}

.benefit-card h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.benefit-card p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

.visual-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.visual-container {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 2rem;
  height: 500px;
}

.visual-left {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-30px);
}

.visual-right {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
}

.visual-left img,
.visual-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.visual-left:hover img,
.visual-right:hover img {
  transform: scale(1.05);
}

.process-section {
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  margin-top: 4rem;
}

.process-container {
  max-width: 1000px;
  margin: 0 auto;
}

.process-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: var(--main-green);
  text-align: center;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.step {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  background-color: var(--main-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.step h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.step p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

.cta-section {
  padding: 4rem 2rem;
  text-align: center;
}

.cta-content h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.cta-content p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  color: #333;
}

.cta-button {
  background-color: var(--main-green);
  color: white;
  border: none;
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
  font-family: var(--font-body);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #466837;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .visual-container {
    grid-template-columns: 1fr;
    height: auto;
  }

  .visual-left,
  .visual-right {
    transform: translateY(0);
    height: 300px;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>