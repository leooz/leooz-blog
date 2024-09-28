<template>
  <div class="pokemon-card">
    <div class="card-header">
      <img :src="imageSrc" alt="Léonard" class="card-photo" />
      <h2>{{ name }}</h2>
    </div>
    <div class="card-body">
      <p class="tagline">{{ tagline }}</p>
      <div class="stats">
        <div><strong>Projet:</strong> {{ project }}</div>
        <div><strong>Niveau:</strong> {{ level }}</div>
      </div>
    </div>
    <div class="card-footer">
      <span>⚡ Force : {{ power }}</span>
      <span>💡 Ingéniosité : {{ ingenuity }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Léonard Corre"
    },
    tagline: {
      type: String,
      default: "Ingénieur Fullstack"
    },
    project: {
      type: String,
      default: "Vinted Discord Bot"
    },
    level: {
      type: String,
      default: "Expert"
    },
    power: {
      type: Number,
      default: 95
    },
    ingenuity: {
      type: Number,
      default: 100
    },
    imageSrc: {
      type: String,
      default: "public/logo-leonard.jpg"
    }
  }
};
</script>

<style scoped>
.pokemon-card {
  width: 300px;
  border: 3px solid #f5d142;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #4caf50;
}

h2 {
  font-size: 1.5em;
  margin-left: 10px;
  color: #ff6347;
}

.card-body {
  margin-top: 20px;
  text-align: center;
}

.tagline {
  font-style: italic;
  color: #555;
}

.stats {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}

.card-footer {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #4caf50;
}
</style>

