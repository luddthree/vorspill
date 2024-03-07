<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div v-if="randomString" class="text-center font-bold text-white">
        <p class="text-2xl">Jeg har aldri...</p>
        <p class="text-3xl">{{ randomString }}</p>
      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
        <NuxtLink to="/spill/jegharaldri" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Spill igjen</NuxtLink>
      <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
  </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomString = ref(''); 
  const stringList = ['jukset på en prøve', 'stjålet noe']; 
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex]; 
  }
  
  onMounted(pickRandomString); 

  </script>
  