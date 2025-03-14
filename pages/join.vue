<template>
    <joinedGame />
    
    <div class="p-5 mt-20 max-w-lg mx-auto">
        <h1 class="text-center font-bold text-2xl text-white mb-5">Bli med i et spill!</h1>
        
        <input 
            v-model="joinCode" 
            placeholder='Skriv en "Bli med" kode'
            class="border p-2 mb-3 w-full rounded-lg shadow-sm"
        >

        <button 
            @click="fetchQuestions" 
            class="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg font-semibold transition-all"
        >
            Bli med i spill
        </button>

        <p v-if="gameStore.message" class="mt-3 text-white text-center">{{ gameStore.message }}</p>



        <!-- Spørsmålskategorier med dropdown -->
        <div v-if="gameStore.questions.length" class="mt-5">
            <div v-for="(questions, category) in groupedQuestions" :key="category" class="mb-3">
                
                <!-- Dropdown-knapp -->
                <button 
                    @click="toggleCategory(category)" 
                    class="w-full bg-gray-800 text-white text-left font-semibold p-3 rounded-lg flex justify-between items-center"
                >
                    {{ category }}
                    <svg 
                        :class="{ 'rotate-180': expandedCategories[category] }" 
                        class="h-5 w-5 transition-transform"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Spørsmålsliste (Vises kun om kategorien er åpen) -->
                <ul v-if="expandedCategories[category]" class="bg-gray-700 text-white rounded-lg mt-2 p-3 shadow-lg">
                    <li v-for="(question, index) in questions" :key="index" class="border-b border-gray-600 py-2">
                        {{ question }}
                    </li>
                </ul>
            </div>
        </div>


        <!-- Most Played Games Section -->
        <div class="mt-10 mb-32">
    <h2 class="text-center text-white text-xl font-semibold mb-3">Mest spilte spill</h2>
    <div class="bg-gray-800 rounded-lg p-4 shadow-lg">
        <ul v-if="mostPlayedGames.length" class="divide-y divide-gray-600">
            <li 
                v-for="(game, index) in mostPlayedGames" 
                :key="game.id"
                class="flex items-center justify-between py-3 px-4 hover:bg-gray-700 rounded-lg transition-all"
            >
                <div class="flex items-center space-x-3">
                    <span v-if="index === 0" class="text-yellow-400 text-xl">🏆</span>
                    <span class="text-white font-semibold">#{{ index + 1 }}</span>
                    <span class="text-gray-300">{{ game.join_code }}</span>
                </div>
                <span class="text-gray-400">{{ game.plays }} avspillinger</span>
            </li>
        </ul>

        <!-- Spinner instead of 'Ingen spill spilt ennå' -->
        <div v-else class="flex items-center justify-center py-10 space-x-2">
    <div class="h-3 w-3 bg-blue-500 rounded-full animate-bounce"></div>
    <div class="h-3 w-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
    <div class="h-3 w-3 bg-blue-500 rounded-full animate-bounce delay-400"></div>
</div>





    </div>
</div>


    </div>

    <!-- Tilbakeknapp -->
    <div class="text-left fixed inset-x-0 left-6 top-20" style="z-index: 2;">
        <NuxtLink to="/" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            <span class="sr-only">Icon description</span>
        </NuxtLink>
    </div>

    <startMenu />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();
const joinCode = ref('');
const expandedCategories = ref({});
const mostPlayedGames = ref([]);

// Load data from localStorage on client-side
onMounted(() => {
    if (process.client) {
        joinCode.value = localStorage.getItem('joinCode') || '';
        const storedQuestions = localStorage.getItem('questions');
        if (storedQuestions) {
            gameStore.questions = JSON.parse(storedQuestions);
        }
    }

    fetchMostPlayedGames();
});

const fetchQuestions = async () => {
    await gameStore.fetchQuestions(joinCode.value);

    if (process.client) {
        localStorage.setItem('joinCode', joinCode.value);
        localStorage.setItem('questions', JSON.stringify(gameStore.questions));
    }


};

// Fetch most played games
const fetchMostPlayedGames = async () => {
    try {
        const response = await fetch('https://vorspill.no/api/games/most-played');
        // const response = await fetch('http://127.0.0.1:8000/api/games/most-played');
        const data = await response.json();
        mostPlayedGames.value = data;
    } catch (error) {
        console.error('Error fetching most played games:', error);
    }
};

// Group questions by category
const groupedQuestions = computed(() => {
    const groups = {
        1: 'Gjør eller drikk',
        2: 'Jeg har aldri',
        3: 'Peleken',
        4: 'Gjør eller drikk duo',
    };

    return gameStore.questions.reduce((acc, q) => {
        const categoryName = groups[q.category] || 'Ukjent kategori';
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(q.text);
        return acc;
    }, {});
});

// Toggle dropdown visibility
const toggleCategory = (category) => {
    expandedCategories.value[category] = !expandedCategories.value[category];
};

// Watch for changes in questions and update localStorage
watch(
    () => gameStore.questions,
    (newQuestions) => {
        if (process.client) {
            localStorage.setItem('questions', JSON.stringify(newQuestions));
        }
    },
    { deep: true }
);

import joinedGame from '~/components/joinedGame.vue';
import startMenu from '~/components/startMenu.vue';
</script>
