<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <!-- Display the randomly selected player's name -->
      <div v-if="randomPlayer" class="text-center">
        <!-- <h2 class="text-2xl font-bold">Randomly Selected Player:</h2> -->
        <p class="text-3xl text-white font-bold">{{ randomPlayer }}...</p>
      </div>
      <div v-else>
        <p>No players found.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomPlayer = ref(null);
  
  onMounted(() => {
    pickRandomPlayer();
  });
  
  function pickRandomPlayer() {
    const storedPlayers = localStorage.getItem('players');
    if (storedPlayers) {
      const players = JSON.parse(storedPlayers);
      if (players.length > 0) {
        const randomIndex = Math.floor(Math.random() * players.length);
        randomPlayer.value = players[randomIndex];
      } else {
        randomPlayer.value = 'No players available.';
      }
    } else {
      randomPlayer.value = 'No players stored in the game.';
    }
  }
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  