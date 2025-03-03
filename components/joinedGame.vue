<script setup>
import { ref, onMounted } from 'vue';
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();
const joinCode = ref('');

// Function to wipe joinCode and questions from localStorage and gameStore
const leaveGame = () => {
    gameStore.clearGame(); // Clear the game data from gameStore
    // navigateTo('/');
};

onMounted(() => {
    if (process.client) {
        joinCode.value = localStorage.getItem('joinCode') || '';
    }
});
</script>
<template>
    <!-- Leave Button (Top Left) -->
    <div v-if="gameStore.joinCode" class="fixed pt-8 inset-x-0 top-0 text-center bg-red-600 text-white shadow-lg flex justify-between items-center p-1">
        <!-- Leave Button -->
        <button @click="leaveGame" class="flex items-center gap-1 p-2 bg-red-700 hover:bg-red-800 rounded-lg text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" x2="9" y1="12" y2="12"/>
            </svg>
            <!-- <span>Forlat</span> -->
        </button>
        <!-- Active Game Code -->
        <h2 class="text-base font-bold text-white">
            Aktiv spill kode: {{ gameStore.joinCode }}
        </h2>
        <!-- Empty div to balance the flex layout -->
        <div class="w-10"></div>
    </div>
</template>