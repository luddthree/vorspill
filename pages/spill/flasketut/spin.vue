<template>
    <div class="spinner top-40 fixed inset-x-0" :style="spinStyle">
      <img src="/bottle.png" alt="Spinning Image">
    </div>

    <div v-if="spinCompleted" class="text-center fixed inset-x-0 bottom-20">
      <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
      <NuxtLink v-if="!mixround" to="/spill/pekeleken" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Spill igjen</NuxtLink>
      <NuxtLink v-if="mixround" to="/spill/mix" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Fortsett</NuxtLink>
  </div>

  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const mixround = computed(() => route.query.mixround === 'true')

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
  
