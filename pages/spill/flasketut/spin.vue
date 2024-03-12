<template>
    <div class="spinner bottom-40 fixed inset-x-0" :style="spinStyle">
      <img src="/bottle.png" alt="Spinning Image">
    </div>

    <div v-if="spinCompleted" class="text-left fixed inset-x-0 left-6 top-12" style="z-index: 2;">
      <NuxtLink to="/games" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </NuxtLink>
    </div>
<div v-if="spinCompleted">
    <NuxtLink v-if="!showParagraph" to="/spill/flasketut" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    <NuxtLink v-if="showParagraph" to="/spill/mix" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
</div>

<div v-if="spinCompleted" class="text-center text-white fixed inset-x-0 bottom-16">
        <p  v-if="!showParagraph" class="text-xs">Trykk på skjermen for å spille igjen</p>
        <p  v-if="showParagraph" class="text-xs">Trykk på skjermen for å gå videre</p>
        </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const showParagraph = computed(() => route.query.showParagraph === 'true')

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

  </script>
  

  <style>
  .spinner img {
    display: block;
    margin: auto;
  }
  

  </style> */
  
