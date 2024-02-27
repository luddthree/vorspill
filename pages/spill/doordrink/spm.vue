<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-white">
      <div v-if="randomString" class="text-center font-bold">
        <p class="text-xl mb-1">Pek på den som...</p>
        <p class="text-2xl mb-2">{{ randomString }}!</p>
        
        <p class="text-xl">eller drikk {{ velgslurker }} slurker</p>


      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
    <button @click="spill2" class="text-white text-xl rounded bg-blue-500 py-3 px-5 mr-2">Spill igjen</button>
    <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
  </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomString = ref('');
  const stringList = ['har verst musikksmak', 'har dårligst stil', 'er minst attraktiv']; 

  const velgslurker = ref(''); 
  const slurker = ['2', '3', '4', '5', ]; 
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex];

    const randomslurker = Math.floor(Math.random() * slurker.length); 
    velgslurker.value = slurker[randomslurker]; 
  }
  
  onMounted(pickRandomString);
  </script>
  