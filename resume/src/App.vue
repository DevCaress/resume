<template>
  <div>
    <NavBar/>    
    <HeaderMain />
    <MainContent />
    <FooterMain />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import HeaderMain from './components/HeaderMain.vue'
import MainContent from './components/MainContent.vue'
import FooterMain from './components/FooterMain.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    FooterMain,
    HeaderMain,
    MainContent
  }
}
</script>

<style>

:root{
  --primary-color: #A61B1B;
  --white: #fff;
  --base-light: gray;
  --bg-dark: #010101;
  --bg: #3b3b3b;
  --bg-gray: hsl(0,0%,10%);
  --br: 1rem;

  --slides: 20;


  --bg-card: #fff;
  --box-shadow: 0 0 20px 0px white;
  --box-shadow-secondary: 0 0 20px 0px #A61B1B;




}

body,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica;
  background-color: var(--bg-gray);
}


.h2{
  color: var(--white);
  font-size: 2rem;
}

.img{
  width: 100%;
  height: auto;
  border-radius: var(--br);
}

</style>
