<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { onMounted, ref } from 'vue'

import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'

import router from './router'

let isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log('User logged in', auth.currentUser)

    } else {
      isLoggedIn.value = false
      console.log('User logged out', auth.currentUser)

    }
  })
})

let logOut = () => {
  signOut(auth)
  .then(() => {
    console.log('User logged out', auth.currentUser)
    router.push('/login')
  })
  .catch((error) => {
    console.log(error)
  })
}

</script>

<template>
   <!-- <div class="bg-colorpic z-[-2] h-[100%] object-cover w-full max-w-none max-h-none absolute  bg-gradient-to-r from-blue-200 to-cyan-200"></div> -->
   <!-- <div class="bg-repeat" style="background-image: url(/assets/img/hvidbg.jpeg)"> -->
    <!-- <img class="z-[-2] object-cover  w-full  max-w-none h-[100%] rounded-md  border-gray-100 absolute top-0 left-0 " src="./assets/img/hvidbg.jpeg" alt="">
  </div> -->
  <header class="z-[90] sticky fixed top-0 left-0 mb-3 w-auto border-gray-600 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  ">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" /> -->

    <div class="wrapper">
     
      <nav class="">
        <RouterLink  to="/">Home</RouterLink>
        <RouterLink to="/project-page">Projekter</RouterLink>
        <RouterLink to="/Services">Kompentencer</RouterLink>
        <RouterLink v-if="isLoggedIn" to="/navguard">NavGuard</RouterLink>
        <button  @click="logOut" v-if="isLoggedIn">Log Out</button>
        <RouterLink v-if="!isLoggedIn" to="/login">Login</RouterLink>

      </nav>
    </div>
  </header>
  
  <RouterView />



 

  <footer >
    <hr class="border-2">
  
    <div class="container mx-auto  flex justify-center  py-10 grid grid-cols-1 sm:grid-cols-3">
      
      <div class="">
        <h4 class="text-lg font-bold">Kontakt Mig</h4>
        <ul class="mt-4">
          <li>
            <span class="text-gray-400">Mobil:</span> 21 16 38 58
          </li>
          <li>
            <span class="text-gray-400">Email:</span> Alberte.torbensen@gmail.com
          </li>
          <li>
            <span class="text-gray-400">Adresse:</span> Esbjerg 6700
          </li>
        </ul>
      </div>
      
      <div class="">
        <h4 class="text-lg font-bold ">Links</h4>
        <ul class="mt-4">
          <li>
            <RouterLink to="/">Hjem</RouterLink>
          </li>
          <li>
            <RouterLink to="/project-page">Projekter</RouterLink>
          </li>
          
        </ul>
      </div>
      
      <div class=""> 
        <h4 class="text-lg font-bold ">Links</h4>
        <ul class="mt-4">
          <li>
            <RouterLink to="/omMig">Om Mig</RouterLink>
          </li>
          <li>
            <RouterLink to="/kontakt">Kontakt</RouterLink>
          </li>
        </ul>
      </div>

      <!--<div class="flex items-center justify-center md:col-start-4">
        <img src="/logo.png" alt="Logo" class="w-12 h-12 mb-4">
        <p class="text-gray-400">&copy; 2023 Your Company Name</p>
      </div>-->
    </div>

  

</footer>
</template>



<style scoped>
header {
  line-height: 0.8;
  max-height: 100vh;
  width: 100%;
  
  /*background-color: brown;*/
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border-left: 1px solid var(--color-border);

}



nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    
    font-size: 1rem;

    padding: 0rem 0;
    margin-top: 1rem;
  }
  
}
</style>
