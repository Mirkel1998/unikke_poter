<script setup>
import { ref } from 'vue'

const formData = ref({
  trainingType: '',
  ownerName: '',
  email: '',
  phone: '',
  dogName: '',
  dogAge: '',
  dogBreed: '',
  experience: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  // Here you would typically send the data to a backend
  alert('Tak for din tilmelding! Vi kontakter dig snarest.')
}
</script>

<template>
  <main class="tilmeld-formular">
    <section class="hero">
      <h1>Tilmeldingsformular</h1>
      <p>Udfyld formularen nedenfor for at tilmelde dig</p>
    </section>

    <section class="form-section">
      <div class="form-container">
        <form @submit.prevent="submitForm">
          
          <div class="form-group">
            <label for="trainingType">Vælg træningstype *</label>
            <select id="trainingType" v-model="formData.trainingType" required>
              <option value="" disabled>Vælg en mulighed</option>
              <option value="holdtraening">Holdtræning - 1.200 kr. / 8 uger</option>
              <option value="alenetraening">Alene Træning - 400 kr. / time</option>
            </select>
          </div>

          <div class="form-divider">
            <h3>Dine oplysninger</h3>
          </div>

          <div class="form-group">
            <label for="ownerName">Dit fulde navn *</label>
            <input 
              type="text" 
              id="ownerName" 
              v-model="formData.ownerName" 
              placeholder="Indtast dit navn"
              required 
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="din@email.dk"
                required 
              />
            </div>

            <div class="form-group">
              <label for="phone">Telefon *</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                placeholder="+45 12 34 56 78"
                required 
              />
            </div>
          </div>

          <div class="form-divider">
            <h3>Din hunds oplysninger</h3>
          </div>

          <div class="form-group">
            <label for="dogName">Hundens navn *</label>
            <input 
              type="text" 
              id="dogName" 
              v-model="formData.dogName" 
              placeholder="Indtast hundens navn"
              required 
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="dogAge">Hundens alder *</label>
              <input 
                type="text" 
                id="dogAge" 
                v-model="formData.dogAge" 
                placeholder="F.eks. 2 år"
                required 
              />
            </div>

            <div class="form-group">
              <label for="dogBreed">Race *</label>
              <input 
                type="text" 
                id="dogBreed" 
                v-model="formData.dogBreed" 
                placeholder="F.eks. Golden Retriever"
                required 
              />
            </div>
          </div>

          <div class="form-group">
            <label for="experience">Tidligere træningserfaring</label>
            <select id="experience" v-model="formData.experience">
              <option value="">Vælg en mulighed</option>
              <option value="ingen">Ingen erfaring</option>
              <option value="lidt">Lidt erfaring</option>
              <option value="erfaren">Erfaren</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Besked til os (valgfri)</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="5"
              placeholder="Fortæl os gerne om dine mål med træningen eller specielle behov..."
            ></textarea>
          </div>

          <button type="submit" class="submit-button">Send tilmelding</button>
        </form>

        <div class="info-box">
          <h3>Hvad sker der nu?</h3>
          <ul>
            <li>Du modtager en bekræftelse på din tilmelding via email</li>
            <li>Vi kontakter dig inden for 1-2 hverdage</li>
            <li>Vi finder det bedste hold eller tidspunkt til jer</li>
            <li>Du får tilsendt betalingsinformation</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.tilmeld-formular {
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

.form-section {
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.form-container form {
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 3rem;
  margin-bottom: 2rem;
}

.form-divider {
  margin: 2rem 0 1.5rem 0;
  padding-top: 2rem;
  border-top: 2px solid #e0e0e0;
}

.form-divider:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

.form-divider h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--main-green);
  margin: 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group label {
  display: block;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  font-family: var(--font-body);
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--main-green);
}

.form-group textarea {
  resize: vertical;
}

.submit-button {
  background-color: var(--main-green);
  color: white;
  border: none;
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #466837;
}

.info-box {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
}

.info-box h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--main-green);
  margin: 0 0 1rem 0;
}

.info-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-box li {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.info-box li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--main-green);
  font-weight: bold;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .form-container form {
    padding: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>