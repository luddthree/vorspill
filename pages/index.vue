<template>

  
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <div class="mt-5">
          <img src="/vorsspill.png" alt="logo" class="block mx-auto w-1/2 h-1/2">
        </div>
        <div>
            <p>

            </p>
        </div>
        <div class="mt-10">
          <form @submit.prevent="addPlayer" class="text-center">
            <input type="text" v-model="playerName" placeholder="Legg til spillere" class="border-2 border-gray-300 p-2 rounded">
            <button type="submit" class="bg-blue-500 text-white p-2 ml-2 rounded">Legg til</button>
          </form>
        </div>
        
  
        <div class="mt-4">
          <ul class="">
            <div class="text-center text-gray-400">
                <p>Spillere</p>
            </div>
            <li v-for="(player, index) in players" :key="index" @click="deletePlayer(index)" class="cursor-pointer hover:text-red-600 text-white text-center text-xl mb-2">
              {{ player }}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="text-center fixed inset-x-0 bottom-36">
        <NuxtLink to="/spill" class="text-white text-sm rounded bg-blue-500 py-3 px-4">Hvordan spille</NuxtLink>

      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
        <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-32">Start spill</NuxtLink>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">

  
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      const playerName = ref('');
      const players = ref<string[]>([]);
  
      function loadPlayers() {
        const storedPlayers = localStorage.getItem('players');
        if (storedPlayers) {
          players.value = JSON.parse(storedPlayers);
        }
      }
  
      function addPlayer() {
        if (playerName.value.trim() !== '') {
          players.value.push(playerName.value);
          localStorage.setItem('players', JSON.stringify(players.value));
          playerName.value = ''; // Clear input after adding
        }
      }


  
      function deletePlayer(index: number) {
        players.value.splice(index, 1);
        localStorage.setItem('players', JSON.stringify(players.value));
      }
  
      onMounted(loadPlayers);
  
      return {
        playerName,
        players,
        addPlayer,
        deletePlayer,
      };
    },
  });

  
  </script>
  
  <style scoped>
  .list-disc {
    padding-left: 1rem;
  }
  </style>
  