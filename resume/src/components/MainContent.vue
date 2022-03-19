<template>
  <main>
    <ProfileInfo />
    <ExpWork />
    <TechsSkills />
    <InterviewsCont :title="'Eventos'" :info="store.events"/>
    <InterviewsCont :title="'Entrevistas'" :info="store.interviewsUrls"/>
    <ContactForm />
    
  </main>
</template>


<script>
import { store } from "../store/store.js";

import ContactForm from './contact/ContactForm.vue';
import ExpWork from './ExpWork.vue';
import InterviewsCont from "./InterviewsCont.vue";
import ProfileInfo from './ProfileInfo.vue';
import TechsSkills from './TechsSkills.vue';

export default {
  name: "MainContent",
  components: {
    InterviewsCont,
    TechsSkills,
    ProfileInfo,
    ExpWork,
    ContactForm,
  },
    data() {
    return {
      store,
    };
  },
};

</script>


<style scoped>

main{
  position: relative;
}

section{
  margin: 6rem 0;
}


</style>