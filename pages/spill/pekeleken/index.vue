<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div v-if="randomString" class="text-center text-white font-bold ">
        <p class="text-2xl mb-1">Pek på den som...</p>
        <p class="text-3xl mb-2">{{ randomString }}!</p>
      </div>
      <p v-if="counter > 0" class="text-white font-bold text-3xl mt-10">{{ counter }}</p>
      <p v-else class="text-4xl text-white mt-10">PEEEK!</p>

    <div class="text-center fixed inset-x-0 bottom-20">
      <button @click="spill3" class="text-white text-xl rounded bg-blue-500 py-3 px-5 mr-2">Spill igjen</button>
      <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
  </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomString = ref(''); // Reactive variable to store the random string
  const stringList = ['har dårligst musikksmak', 'kommer til å havne i fengsel']; // Your list of strings
  const counter = ref(7); // Reactive variable for the countdown
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); // Get a random index
    randomString.value = stringList[randomIndex]; // Select a random string from the list
    startCounter(); // Initialize the counter
  }
  
  function startCounter() {
    const interval = setInterval(() => {
      if (counter.value > 0) {
        counter.value--; // Decrease counter
      } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
      }
    }, 1000); // Decrease every second
  }
  
  onMounted(pickRandomString); // Call pickRandomString when the component mounts





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
async function spill3() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/everyone');
  let bg = 0;
  while (bg < 7) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  navigateTo('/spill/pekeleken');
  bg = 0;
  while (bg < 14) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
}
  </script>
  
  