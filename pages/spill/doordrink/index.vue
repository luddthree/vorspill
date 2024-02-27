<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <!-- Display the randomly selected player's name -->
      <div v-if="randomPlayer2" class="text-center">
        <!-- <h2 class="text-2xl font-bold">Randomly Selected Player:</h2> -->
        <p class="text-3xl text-white font-bold">{{ randomPlayer2 }}...</p>
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
  const randomPlayer2 = ref(null);

  
  onMounted(() => {
    pickRandomPlayer();
  });
  

  function pickRandomPlayer() {
  const storedPlayers = localStorage.getItem('players');
  if (storedPlayers) {
    const players = JSON.parse(storedPlayers);
    if (players.length > 1) { // Ensure there's at least 2 players to pick from
      let randomIndex = Math.floor(Math.random() * players.length);
      randomPlayer.value = players[randomIndex];

      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * players.length);
      } while (randomIndex2 === randomIndex); // Repeat until a different player is selected

      randomPlayer2.value = players[randomIndex2];
    } else if (players.length === 1) {
      randomPlayer.value = players[0];
      randomPlayer2.value = "Only one player available.";
    } else {
      randomPlayer.value = 'No players available.';
      randomPlayer2.value = 'No players available.';
    }
  } else {
    randomPlayer.value = 'No players stored in the game.';
    randomPlayer2.value = 'No players stored in the game.';
  }
}

  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  