<template>
    <div class="spinner top-40 absolute" :style="spinStyle">
      <img src="/bottle.png" alt="Spinning Image">
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const spinStyle = ref({});
  const initialSpins = 4080; // 3 full spins (360 degrees * 3)
  
  onMounted(() => {
    const fastSpinDuration = 8; // Fast spin duration in seconds for the initial spins
    const randomExtraSpin = Math.floor(Math.random() * 360 + 3000); // Random angle for the extra spin
    const totalSpin = initialSpins + randomExtraSpin; // Total spin including the initial spins and the random extra spin
  
    spinStyle.value = {
      animation: `spin ${fastSpinDuration}s forwards, final-spin 2s ease-out forwards`,
      animationDelay: `0s, ${fastSpinDuration}s`,
    };
  
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
  
