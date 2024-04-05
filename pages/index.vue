<template>

  
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <div>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/luddthree"><svg class="h-6 w-6 text-white mt-3 absolute right-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
</a>

        
        </div>
        <div class="mt-5">
          <img src="/vorsspill.png" alt="logo" class="block mx-auto w-1/2 h-1/2">
        </div>
        <div>
            <p>

            </p>
        </div>
        <div class="mt-10">
          <form @submit.prevent="addPlayer" class="text-center">
            <input type="text" v-model="playerName" placeholder="Legg til spillere..." class="border-2 border-gray-300 pr-24 pl-2 py-3 rounded-xl">
            <br>
            <button type="submit" class=" text-gray-300 font-bold text-lg p-2 mt-1">Legg til</button>
          </form>
        </div>
        
  
        <div class="mt-4">
          <ul class="">
            <div class="text-center mb-4 text-gray-400">
                <p>Spillere:</p>
            </div>
            

            <li v-for="(player, index) in players" :key="index" @click="deletePlayer(index)" class="justify-between items-center bg-slate-800 rounded-lg cursor-pointer hover:text-red-600 text-white mb-2 py-1 px-4 space-x-2 inline-flex ml-1 mr-1 text-center">
  <span class="text-lg flex-1 py-0.5">{{ player }}</span>
  <svg class="h-4 w-4 text-red-500" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
    <path stroke="none" d="M0 0h24v24H0z"/>  
    <line x1="18" y1="6" x2="6" y2="18" />  
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
</li>



          </ul>
        </div>
      </div>
  
      <div class="text-center fixed inset-x-0 bottom-36">

      </div>

      <div class="text-center fixed inset-x-0 bottom-10">
        <NuxtLink to="/spill" class="text-gray-200 text-xl rounded bg-blue-600 py-3 pl-2 pr-1 inline-flex ">Regler

          <svg class="h-8 w-8 text-gray-200 ml-2"  width="24" height="24" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />  <line x1="3" y1="6" x2="3" y2="19" />  <line x1="12" y1="6" x2="12" y2="19" />  <line x1="21" y1="6" x2="21" y2="19" /></svg>
        </NuxtLink>

        <NuxtLink to="/games" class="text-white ml-2 text-xl rounded bg-blue-500 py-3 px-14 inline-flex">Start spill 

          <svg class="h-8 w-8 text-white ml-4"  width="24" height="24" viewBox="0 0 26 26" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
        </NuxtLink>
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
  