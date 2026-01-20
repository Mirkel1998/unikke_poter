<script setup>

</script>

<template>
  <main class="hvem-henvender">
    

    <article class="blog-content">
      <div class="blog-container">
        <section class="blog-section">
          <h2>For Dig som Nyhundejer</h2>
          <p>
            Har du for nylig fået din første hund? Unikke Poter er her for at guide dig gennem de første vigtige
            måneder. Vi hjælper dig med at forstå din hvalps behov, etablere gode rutiner og lægge fundamentet for
            en harmonisk relation. Fra de første basale kommandoer til socialisering - vi er med dig hele vejen.
          </p>
          <p>
            Vi ved, at det kan være overvældende at være nyhundejer, og derfor tilbyder vi strukturerede
            træningsprogrammer, der gør processen lettere og mere fornøjelig for både dig og din hvalp.
          </p>
        </section>

        <section class="blog-section">
          <h2>For Erfarne Hundeejere</h2>
          <p>
            Selvom du måske har haft hunde før, kan hver hund præsentere nye udfordringer. Unikke Poter arbejder
            også med erfarne hundeejere, der ønsker at forfine deres færdigheder, tackle specifikke adfærdsproblemer
            eller udforske avanceret træning som agility, rally-obedience eller sporarbejde.
          </p>
          <p>
            Vi tilbyder skræddersyede løsninger til hundeejere, der ønsker at tage deres hundetræning til næste niveau
            og styrke båndet til deres firbenede ven.
          </p>
        </section>

        <section class="blog-section">
          <h2>For Hunde med Særlige Behov</h2>
          <p>
            Har din hund udfordringer med angst, reaktivitet, aggression eller andre adfærdsproblemer? Vi
            specialiserer os i at arbejde med hunde, der har brug for ekstra opmærksomhed og tålmodighed.
            Med vores erfaring og individuelle tilgang hjælper vi dig med at forstå og håndtere din hunds
            udfordringer på en respektfuld og effektiv måde.
          </p>
          <p>
            Hver hund fortjener en chance for at trives, og vi er her for at sikre, at din hund får den
            støtte og træning, den har brug for.
          </p>
        </section>

        <section class="blog-section">
          <h2>For Familier med Børn</h2>
          <p>
            En familihund skal kunne fungere i et travlt og dynamisk miljø. Vi hjælper familier med at træne
            deres hund til at være en tryg og pålidelig del af familien. Vi lærer både hund og børn at
            respektere hinandens grænser og kommunikere på en sund måde.
          </p>
          <p>
            Vores træning fokuserer på at skabe et sikkert og harmonisk miljø, hvor både hund og børn kan
            trives sammen.
          </p>
        </section>

        <section class="blog-section highlight">
          <h2>Uanset hvem du er...</h2>
          <p>
            ...så har du og din hund en plads hos Unikke Poter. Vi møder dig hvor du er, og sammen finder vi
            de løsninger, der passer til jer. Vores passion er at hjælpe alle hunde og deres ejere med at
            opbygge stærke, positive relationer baseret på tillid, respekt og kærlighed.
          </p>
          <RouterLink to="/kontakt">
            <button class="cta-button">Kontakt os i dag</button>
          </RouterLink>
        </section>
      </div>
    </article>
  </main>
</template>

<style scoped>
.hvem-henvender {
  min-height: 80vh;
}

.hero {
  position: relative;
  width: 100%;
  height: 60vh;
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
  width: 90%;
  max-width: 800px;
}

.hero-content h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.blog-content {
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.blog-container {
  background-color: white;
}

.blog-section {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e0e0e0;
}

.blog-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.blog-section h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: var(--main-green);
}

.blog-section p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 1rem 0;
  color: #333;
}

.blog-section p:last-child {
  margin-bottom: 0;
}

.blog-section.highlight {
  background-color: #f5f5f5;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
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
  margin-top: 1.5rem;
}

.cta-button:hover {
  background-color: #466837;
}

@media (max-width: 768px) {
  .hero {
    height: 50vh;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .blog-section h2 {
    font-size: 1.5rem;
  }

  .blog-section p {
    font-size: 1rem;
  }

  .blog-section.highlight {
    padding: 2rem 1.5rem;
  }
}
</style>