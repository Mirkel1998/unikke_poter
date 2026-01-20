<script setup>

</script>

<template>
  <main class="kontakt">
    <section class="kontakt-hero">
      <h1>Kontakt Os</h1>
      <p>Vi glæder os til at høre fra dig!</p>
    </section>

    <section class="kontakt-content">
      <div class="kontakt-info">
        <div class="info-card">
          <h2>Har du spørgsmål?</h2>
          <div class="info-item">
            <p>Tøv ikke med at kontakte os, hvis du har nogle spørgsmål eller brug for mere information. Vi er altid klar til at hjælpe dig med at finde de perfekte løsninger til dine behov.</p>
          </div>
        </div>

        <div class="info-card">
          <h2>Kontaktinformation</h2>
          <div class="info-item">
            <h3>Email</h3>
            <p>H_tranberg@hotmail.com</p>
          </div>
          <div class="info-item">
            <h3>Telefon</h3>
            <p>+45 42 15 20 39</p>
          </div>
          <div class="info-item">
            <h3>Adresse</h3>
            <p>Din adresse her</p>
            <p>Postnummer og by</p>
          </div>
        </div>
      </div>

      <div class="kontakt-form">
        <h2>Send os en besked</h2>
        <form>
          <div class="form-group">
            <label for="name">Navn</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="phone">Telefon</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div class="form-group">
            <label for="message">Besked</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" class="cta-button">Send besked</button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.kontakt {
  min-height: 80vh;
}

.kontakt-hero {
  background-color: var(--main-green);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.kontakt-hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin: 0 0 1rem 0;
}

.kontakt-hero p {
  font-family: var(--font-body);
  font-size: 1.2rem;
  margin: 0;
}

.kontakt-content {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.kontakt-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

.info-card h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: var(--main-green);
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: var(--main-green);
}

.info-item p {
  font-family: var(--font-body);
  margin: 0.25rem 0;
  color: #333;
}

.kontakt-form h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin: 0 0 2rem 0;
  color: var(--main-green);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-family: var(--font-body);
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  font-family: var(--font-body);
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--main-green);
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

@media (max-width: 968px) {
  .kontakt-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .kontakt-hero h1 {
    font-size: 2.5rem;
  }
}
</style>