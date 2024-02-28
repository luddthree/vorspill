<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div v-if="randomString" class="text-center font-bold text-white">
        <p class="text-2xl">Jeg har aldri...</p>
        <p class="text-3xl">{{ randomString }}</p>
      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
      <button @click="spill4" class="text-white text-xl rounded bg-blue-500 py-3 px-5 mr-2">Spill igjen</button>
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


  function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r},${g},${b})`; 
}
//@ts-ignore
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


  async function spill4() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/everyone');
  let bg = 0;
  while (bg < 7) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  navigateTo('/spill/jegharaldri');
  bg = 0;
  while (bg < 17) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
}
  </script>
  