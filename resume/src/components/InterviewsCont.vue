<template>
  <section>
    <h2 class="h2">{{title}}</h2>

    <div class="cont-cards">
      <GeneralCard
        v-for="item in info"
        :key="item.id"
        :interview="item"
      />
    </div>
  </section>
</template>

<script>

import GeneralCard from "../components/GeneralCard.vue";

export default {
  name: "InterviewsCont",
  components: {
    GeneralCard,
    },
  props:{
    title: null,
    info: null,
  },

};
</script>

<style scoped>
.h2 {
  text-align: center;
}
.cont-cards {
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
}

@media screen and (min-width: 920px) {
  .cont-cards {
    flex-direction: row;
  }
}
</style>