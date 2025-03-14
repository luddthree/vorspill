<template>
  <joinedGame />

  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <div>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/luddthree">
          <svg class="h-6 w-6 text-white mt-10 absolute right-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </div>
      <div class="mt-20">
        <img src="/vorsspill.png" alt="logo" class="block mx-auto w-1/2 h-1/2">
      </div>
      <div>
        <p></p>
      </div>
      <div class="mt-10">
        <form @submit.prevent="addPlayer" class="text-center">
          <input type="text" v-model="playerName" placeholder="Legg til spillere..." class="shadow-xl border-2 border-gray-300 pr-24 pl-2 py-3 rounded-xl">
          <br>
          <button type="submit" class="text-gray-300 font-bold text-lg p-2  mt-1">Legg til</button>
        </form>
      </div>

      <div class="mt-4">
        <ul>
          <div class="text-center  mb-4 text-gray-400">
            <p>Spillere:</p>
          </div>
          <ul class="flex justify-center flex-wrap">
            <li v-for="(player, index) in players" :key="index" @click="deletePlayer(index)" class="shadow-lg justify-between items-center bg-slate-800 rounded-lg cursor-pointer hover:text-red-600 text-white mb-2 py-1 px-4 space-x-2 inline-flex ml-1 mr-1 text-center">
              <span class="text-lg flex-1 py-0.5">{{ player }}</span>
              <svg class="h-4 w-4 text-red-500" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <startMenu />

    <div class="text-center fixed inset-x-0 bottom-36"></div>
  </div>
</template>

<script setup>
// Meta tags
import { useHead } from '@unhead/vue';
import { ref, onMounted } from 'vue';
import joinedGame from '~/components/joinedGame.vue';
import startMenu from '~/components/startMenu.vue';

useHead({
  titleTemplate: '%s Vorspill',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Vorspill' },
    { property: 'og:title', content: 'Vorspill' },
    { property: 'og:description', content: 'Vorspill er en norsk drikkespill app.' },
    { property: 'og:url', content: 'https://Vorspill.no' },
  ],
});

// Player management logic
const playerName = ref('');
const players = ref([]);

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

function deletePlayer(index) {
  players.value.splice(index, 1);
  localStorage.setItem('players', JSON.stringify(players.value));
}

onMounted(loadPlayers);
</script>


<style scoped>
.list-disc {
  padding-left: 1rem;
}
</style>