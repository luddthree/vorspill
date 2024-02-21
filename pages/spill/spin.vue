<template>
    <div class="spinner" :style="spinStyle">
      <img src="/bottle.png" alt="Spinning Image">
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const spinStyle = ref({});
  const initialSpins = 1080; // 3 full spins (360 degrees * 3)
  
  onMounted(() => {
    const fastSpinDuration = 2; // Fast spin duration in seconds for the initial spins
    const randomExtraSpin = Math.floor(Math.random() * 360); // Random angle for the extra spin
    const totalSpin = initialSpins + randomExtraSpin; // Total spin including the initial spins and the random extra spin
  
    spinStyle.value = {
      animation: `spin ${fastSpinDuration}s ease-in forwards, final-spin 2s ease-out forwards`,
      animationDelay: `0s, ${fastSpinDuration}s`,
    };
  
    // Define keyframes for the final spin dynamically
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
      @keyframes final-spin {
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
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1080deg); /* 3 full spins */
    }
  }
  </style>
  
