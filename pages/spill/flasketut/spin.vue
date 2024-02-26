<template>
    <div class="spinner top-40 absolute" :style="spinStyle">
      <img src="/bottle.png" alt="Spinning Image">
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const spinStyle = ref({});
  
  onMounted(() => {
    const fastSpinDuration = 10; // Fast spin duration in seconds for the initial spins
  
    spinStyle.value = {
      animation: `spin ${fastSpinDuration}s forwards, final-spin 2s ease-out forwards`,
      animationDelay: `0s, ${fastSpinDuration}s`,
    };
  });
  </script>
  

  <style>
  .spinner img {
    display: block;
    margin: auto;
  }
  

  </style>
  
