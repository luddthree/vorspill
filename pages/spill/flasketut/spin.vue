<template>
    <div class="spinner top-40 fixed inset-x-0" :style="spinStyle">
      <img src="/bottle.png" alt="Spinning Image">
    </div>

    <div v-if="spinCompleted" class="text-center fixed inset-x-0 bottom-20">
    <button @click="spill2" class="text-white text-xl rounded bg-blue-500 py-3 px-5 mr-2">Spill igjen</button>
    <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
  </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';

const spinStyle = ref({});
const spinCompleted = ref(false); // Tracks whether the spin has completed
const initialSpins = 4080; // 3 full spins (360 degrees * 3)

onMounted(() => {
  const fastSpinDuration = 8; // Fast spin duration in seconds for the initial spins
  const randomExtraSpin = Math.floor(Math.random() * 360 + 3000); // Random angle for the extra spin
  const totalSpin = initialSpins + randomExtraSpin; // Total spin including the initial spins and the random extra spin

  spinStyle.value = {
    animation: `spin ${fastSpinDuration}s forwards, final-spin 2s ease-out forwards`,
    animationDelay: `0s, ${fastSpinDuration}s`,
  };

  setTimeout(() => {
    spinCompleted.value = true; // Update spin completion status after the total animation time
  }, (fastSpinDuration + 2) * 1000); // Wait for both animations to complete

  // Define keyframes for the final spin dynamically
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = `
    @keyframes spin {
      from { transform: rotate(${initialSpins}deg); }
      to { transform: rotate(${totalSpin}deg); }
    }
  `;
  document.head.appendChild(styleSheet);
});


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

  async function spill2() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/flasketut');
  let bg = 0;
  while (bg < 10) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
  navigateTo('/spill/flasketut/spin');
}
  </script>
  

  <style>
  .spinner img {
    display: block;
    margin: auto;
  }
  

  </style> */
  
