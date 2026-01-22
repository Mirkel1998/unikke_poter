<script setup>

</script>

<template>
  <main class="tilmeld-hold">
    <section class="hero">
      <h1>Tilmeld Hold</h1>
      <p>Vælg den træning der passer dig og din hund bedst</p>
    </section>

    <section class="intro-section">
      <div class="intro-container">
        <h2>Klikkertræning - Moderne og Effektiv</h2>
        <p>
          Hos Unikke Poter bruger vi klikkertræning som vores primære metode. Klikkertræning er en positiv, 
          belønningsbaseret tilgang, der bygger på videnskabelig forskning om hundes indlæring. Med en klikker 
          kan vi præcist markere den rigtige adfærd i det øjeblik, den sker, hvilket gør træningen tydelig 
          og effektiv for din hund.
        </p>
        <p>
          Klikkertræning styrker båndet mellem dig og din hund, gør træningen sjov for jer begge, og skaber 
          langvarige resultater uden brug af tvang eller straf.
        </p>
      </div>
    </section>

    <section class="services-section">
      <div class="services-container">
        <h2>Vælg Din Træning</h2>
        
        <div class="service-card">
          <div class="service-content">
            <h3>Holdtræning</h3>
            <p>
              Vores holdtræning er perfekt til dig, der ønsker at træne din hund i et socialt og motiverende 
              miljø sammen med andre hundeejere. I mindre grupper på max 6 hund-ejer-par arbejder vi med 
              grundlæggende lydighed, impulskontrol og socialisering.
            </p>
            <div class="service-features">
              <h4>Hvad får du:</h4>
              <ul>
                <li>Struktureret træning over 8 uger</li>
                <li>1 times træning hver uge</li>
                <li>Små hold med personlig vejledning</li>
                <li>Socialisering med andre hunde</li>
                <li>Mulighed for at lære af andre ejeres erfaringer</li>
                <li>Træning i distraktionsmiljø</li>
              </ul>
            </div>
            <div class="service-price">
              <p class="price">1.200 kr. / 8 uger</p>
            </div>
            <RouterLink to="/tilmeld-formular">
              <button class="cta-button">Tilmeld holdtræning</button>
            </RouterLink>
          </div>
          <div class="service-image">
            <img src="/holdtraening.jpg" alt="Holdtræning" />
          </div>
        </div>

        <div class="service-card">
          <div class="service-content">
            <h3>Alene Træning</h3>
            <p>
              Har din hund specifikke udfordringer, eller ønsker du en mere skræddersyet tilgang? Vores 
              individuelle træning giver dig og din hund fuld opmærksomhed, hvor vi fokuserer 100% på jeres 
              unikke behov og mål.
            </p>
            <div class="service-features">
              <h4>Hvad får du:</h4>
              <ul>
                <li>Skræddersyet træningsplan til din hund</li>
                <li>Fleksible tidspunkter</li>
                <li>Individuel vejledning og feedback</li>
                <li>Fokus på specifikke adfærdsproblemer</li>
                <li>Træning i dit eget tempo</li>
                <li>Mulighed for hjemmebesøg</li>
              </ul>
            </div>
            <div class="service-price">
              <p class="price">400 kr. / time</p>
              <p class="price-note">Pakkeløsninger tilbydes</p>
            </div>
            <RouterLink to="/tilmeld-formular">
              <button class="cta-button">Tilmeld alene træning</button>
            </RouterLink>
          </div>
          <div class="service-image">
            <img src="/alenetraening.jpg" alt="Individuel træning" />
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="faq-container">
        <h2>Ofte Stillede Spørgsmål</h2>
        
        <div class="faq-item">
          <h3>Hvad er klikkertræning?</h3>
          <p>
            Klikkertræning er en positiv træningsmetode, hvor vi bruger en lille klikker til at markere 
            ønsket adfærd. Klikket efterfølges altid af en belønning, så hunden lærer at forbinde klikket 
            med noget positivt. Dette gør træningen præcis, sjov og meget effektiv.
          </p>
        </div>

        <div class="faq-item">
          <h3>Hvilket hold passer til min hund?</h3>
          <p>
            Det afhænger af din hunds alder, erfaring og dine mål. Kontakt os, så kan vi sammen finde 
            det rette hold eller træningsforløb til jer. Vi tilbyder både begynder-, fortsætter- og 
            avancerede hold.
          </p>
        </div>

        <div class="faq-item">
          <h3>Hvad skal jeg medbringe?</h3>
          <p>
            Du skal medbringe din hund, godbidder som din hund elsker, en klikker (kan købes hos os), 
            og en god attitude. Vi sørger for resten!
          </p>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <h2>Klar til at komme i gang?</h2>
      <p>Kontakt os i dag for at høre mere om vores hold og tilmelding</p>
      <RouterLink to="/kontakt">
        <button class="cta-button-large">Kontakt os nu</button>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.tilmeld-hold {
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
  margin: 0 0 1rem 0;
  color: #333;
}

.services-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.services-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: var(--main-green);
  text-align: center;
}

.service-card {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service-card.reverse {
  flex-direction: row-reverse;
}

.service-content {
  flex: 1;
  padding: 3rem;
}

.service-content h3 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.service-content > p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  color: #333;
}

.service-features h4 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.service-features ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.service-features li {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--main-green);
  font-weight: bold;
}

.service-price {
  margin: 2rem 0;
}

.service-price .price {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--main-green);
  margin: 0;
}

.service-price .price-note {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0 0 0;
}

.service-image {
  flex: 1;
  min-height: 400px;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.faq-section {
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  margin-top: 4rem;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-container h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: var(--main-green);
  text-align: center;
}

.faq-item {
  background-color: white;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
}

.faq-item h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.faq-item p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  color: #333;
}

.contact-cta {
  text-align: center;
  padding: 4rem 2rem;
}

.contact-cta h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: var(--main-green);
}

.contact-cta p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  color: #333;
}

.cta-button-large {
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

.cta-button-large:hover {
  background-color: #466837;
}

@media (max-width: 968px) {
  .hero h1 {
    font-size: 2rem;
  }

  .service-card,
  .service-card.reverse {
    flex-direction: column;
  }

  .service-content {
    padding: 2rem;
  }

  .service-image {
    min-height: 300px;
  }
}
</style>