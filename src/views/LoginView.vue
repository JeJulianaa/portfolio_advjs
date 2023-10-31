<template class=" ">
  <div class="container mx-auto mb-20 mt-14 bg-gray-200 flex-grow flex-shrink w-[20rem] py-[5rem] sm:w-[35rem] rounded-md ">
    <h1 class="flex justify-center text-2xl">Admin Login</h1>
    <form @submit.prevent="logIn">
      <div class=" pt-4">
        <!----------E-mail---------->
        <h3 class=" px-8 sm:px-[9rem] pb-1">e-mail</h3>
        <div class=" flex justify-center  px-[2rem] sm:px-36 pb-4">
          <input  class="flex-grow flex-shrink px-4 py-2 rounded-md " type="text" v-model="email" placeholder="Enter E-mail" />
        </div>

        <!----------password---------->
        <h3 class="px-8 sm:px-[9rem] pb-1">password</h3>
        <div class="flex justify-center px-[2rem] sm:px-36 pb-8">
            <input class="flex-grow flex-shrink px-4 py-2 rounded-md " type="password"  v-model="password" placeholder="Enter password" />
        </div>

        <!----------LOG IN button---------->
        <div class="flex justify-center " >
          
          
            <button class="login button-standard "  @click="logIn">Login</button>
            <button class="logout " v-if="userAuthenticated" @click="logOut">Logout</button>
          
        </div>
        <p class="flex justify-center pt-9" v-if="errMsg"> {{ errMsg }}</p>
      
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';


import router from '../router'

let email = ref ('')
let password = ref ('')
const errMsg = ref ('')

let logIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((data) => {
    console.log("test data", data)
    router.push('/navguard')
  })
  .catch((error) => {
    switch(error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid email address format."
        break;
      case "auth/user-disabled":
        errMsg.value = "This user has been disabled."
        break;
      case "auth/user-not-found":
        errMsg.value = "User not found."
        break;
      case "auth/wrong-password":
        errMsg.value = "Invalid password."
        break;
      default:
        errMsg.value = "An undefined error occured."
    }
  })
}
let logOut = () => {
    signOut(auth)
      .then(() => {
        router.push('/navguard') // Redirect to the login page or any other appropriate page
      })
      .catch((error) => {
        console.error("Sign Out Error: ", error);
      })
  }
  
</script>

<style >

</style>