<template >
  <section>
    <h2 class="h2">Experiencia profesional</h2>
    <div class="cont-cards">
      <div class="card" v-for="work in store.expworks" :key="work.id">
        <div class="front">
          <div class="title">
            {{ work.title }}
          </div>
          <div class="place">
            {{ work.place }}
          </div>
          <div class="year">
            {{ work.year }}
          </div>
        </div>
        <div class="back">
          <p class="info">
            {{ work.info }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { store } from "../store/store.js";

export default {
  name: "ExpWork",
  data() {
    return {
      store,
    };
  },
};
</script>
<style scoped>
.h2 {
  text-align: center;
}
section {
  display: flex;
  flex-direction: column;
}

.cont-cards{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 1280px;
    margin: auto;
}



.card {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: var(--br);
  display: flex;
  height: 300px;
  justify-content: center;
  margin: 2rem 2rem;
  padding: 1rem;
  position: relative;
  text-align: center;
  width: 350px;
}

.card:hover {
  cursor: pointer;
  box-shadow: var(--box-shadow);
}

.card:hover .place,
.card:hover .year {
  display: none;
}

.card:hover .front {
  height: 20%;
  bottom: 0;
}

.back{
    margin:1rem .75rem 0
}

.front {
  align-items: center;
  background-color: black;
  border-radius: var(--br);
  bottom: 0;
  color: var(--white);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  transition: 1s ease;
  width: 100%;
  z-index: 2;
}

.title {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
}

.place {
  font-weight: bold;
  font-size: 1rem;
}

.year {
  font-size: 0.9rem;
  padding: 0.5rem 0;
  color: var(--base-light);
}

.info {
  font-size: 1.2rem;
}

@media screen and (min-width: 920px) {
  .card {
    width: 30%;
  }
}
</style>