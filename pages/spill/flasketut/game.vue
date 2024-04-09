<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div v-if="randomString" class="text-center font-bold text-white">
        <p class="text-2xl">Den flasketuten peker på...</p>
        <p class="text-3xl">{{ randomString }}</p>
      </div>

    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomString = ref(''); 
  const stringList = ['kan dele ut 4 slurker!', 'kan dele ut 2 slurker!', 
  'må drikke 1 slurk!', 'må drikke 2 slurker!', 'må drikke 3 slurker!', 
  'må drikke 4 slurker!', 'kan stå over neste runde', 'må dra hjem']; 
  
  function pickRandomString() {
  const randomIndex = Math.floor(Math.random() * stringList.length); 
  randomString.value = stringList[randomIndex];
  localStorage.setItem('spm', randomString.value);  // Store the random string
}

  
  onMounted(pickRandomString); 
  </script>