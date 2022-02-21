<template>
  <section>
    <h2 class="h2">Entrevistas</h2>

    <div class="cont-cards">
      <div
        class="interview"
        v-for="interview in store.interviewsUrls"
        :key="interview.id"
      >
        <div class="img-cont">
          <a :href="interview.url">
            <img class="img" :src="interview.img" alt="" />
          </a>
        </div>
        <div class="info">
          <div class="title">
            {{ interview.title }}
          </div>
          <div class="desc">
            <p>
              {{ interview.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store/store.js";

export default {
  name: "InterviewsCont",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.cont-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.interview {
  background-color: var(--bg-card);
  border-radius: var(--br);
  box-shadow: var(--box-shadow);
  margin: 100px 0 1rem;
  padding: 1.5rem;
  width: 60%;
}

.interview .img-cont {
  margin-top: -100px;
}

.interview .img-cont img {
  box-shadow: var(--box-shadow);
}
.interview .info {
  margin-top: 1.5rem;
}

.interview .info .title {
  font-weight: bold;
  font-size: 1.2rem;
}

@media screen and (min-width: 920px) {
  .cont-cards {
    flex-direction: row;
  }
  .interview {
    margin: 100px 1rem 0;
  }
}
</style>