<template>
  <nav>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="menu">
      <div class="dropdown" @click="displayMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
      </div>
      <ul @click="displayMenu()">
        <li><a href="#">Lorem.</a></li>
        <li><a href="#">Molestiae.</a></li>
        <li><a href="#">Non.</a></li>
        <li><a href="#">Veritatis!</a></li>
        <li><a href="#">Eos!</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { store } from '@/store/store.js'



export default {
  name: 'NavBar',
  data() {
    return {
      store
    }
  },
  methods: {
    displayMenu() {
      console.log('hee hee');
      const dropdown = document.getElementsByTagName('ul')[0];

      dropdown.classList.toggle('active');

    }
  },
}
</script>

<style scoped>

nav{
  align-items: center;
  background-color: var(--bg-dark);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav .logo > img{
  width: 50px;
}

nav .menu ul{
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  transition: 2s;
  flex-direction: row;
  margin: 0;
}
nav .menu ul.active{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #010101b4;
  z-index: 5;
}
nav .menu .dropdown svg{
  pointer-events: none;
  fill:#fff;
  width: 30px;
  height: 30px;
}

nav .menu .dropdown:hover{
  cursor: pointer;
}

nav .menu ul li{
  list-style: none;
}

nav .menu ul li a{
    display: block;
    font-size: 2rem;
    text-decoration: none;
    color: var(--white);
    padding: .5rem 1rem;
    border-radius: var(--br);
}

nav .menu ul li a:hover{
  box-shadow: var(--box-shadow);
}

@media screen and (min-width:768px) {
  nav .menu ul{
    display: flex;
    flex-direction: row;
    position: static;
  }
  nav .menu .dropdown{
    display: none;
  }
  nav .menu ul li a{
    font-size: 1rem;
  }
}
</style>
