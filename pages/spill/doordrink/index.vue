<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-white">
      <div v-if="randomString" class="text-center font-bold">
        <p class="text-3xl mb-2">{{ randomString }}!</p>
        
        <p class="text-2xl">eller drikk {{ velgslurker }} slurker</p>


      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
    <button @click="spill1" class="text-white text-xl rounded bg-blue-500 py-3 px-5 mr-2">Spill igjen</button>
    <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
  </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomString = ref('');
  const stringList = ['Pek på den som har verst musikksmak', 'Pek på den som har dårligst stil', 'Pek på den som er minst attraktiv']; 

  const velgslurker = ref(''); 
  const slurker = ['2', '3', '4', '5', ]; 
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex];

    const randomslurker = Math.floor(Math.random() * slurker.length); 
    velgslurker.value = slurker[randomslurker]; 
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

//bakgrunssfarge endrer og viser spillsiden
async function spill1() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/playername');
  let bg = 0;
  while (bg < 10) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
  navigateTo('/spill/doordrink');
}
  </script>
  