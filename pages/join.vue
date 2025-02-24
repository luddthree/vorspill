<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();
const joinCode = ref('');
const questions = ref([]);

// Load data from localStorage on client-side
onMounted(() => {
    if (process.client) {
        joinCode.value = localStorage.getItem('joinCode') || '';
        const storedQuestions = localStorage.getItem('questions');
        if (storedQuestions) {
            gameStore.questions = JSON.parse(storedQuestions);
        }
    }
});

const fetchQuestions = async () => {
    await gameStore.fetchQuestions(joinCode.value);

    if (process.client) {
        // Store join code in localStorage
        localStorage.setItem('joinCode', joinCode.value);

        // Store questions in localStorage
        localStorage.setItem('questions', JSON.stringify(gameStore.questions));
    }
};

// Group questions by category
const groupedQuestions = computed(() => {
    const groups = {
        1: 'Gjør eller drikk',
        2: 'Jeg har aldri',
        3: 'Peleken',
    };

    return gameStore.questions.reduce((acc, q) => {
        const categoryName = groups[q.category] || 'Unknown';
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(q.text);
        return acc;
    }, {});
});

// Watch for changes in questions and update localStorage (only on client)
watch(
    () => gameStore.questions,
    (newQuestions) => {
        if (process.client) {
            localStorage.setItem('questions', JSON.stringify(newQuestions));
        }
    },
    { deep: true }
);



import joinedGame from '~/components/joinedGame.vue'
import startMenu from '~/components/startMenu.vue'

</script>

<template>
    <joinedGame />
    <div class="p-5 mt-10">
        <input v-model="joinCode" placeholder="Enter Join Code" class="border p-2 mb-3 w-full">
        <button @click="fetchQuestions" class="bg-blue-500 text-white p-2">Bli med i spill</button>

        <p class="mt-3 text-red-500">{{ gameStore.message }}</p>

        <div v-if="gameStore.questions.length">
            <div v-for="(questions, category) in groupedQuestions" :key="category">
                <h3 class="font-bold mt-4">{{ category }}</h3>
                <ul>
                    <li v-for="(question, index) in questions" :key="index" class="border p-2 mt-2">
                        {{ question }}
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <div class="text-left fixed inset-x-0 left-6 top-8" style="z-index: 2;">
      <NuxtLink to="/" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </NuxtLink>
    </div>


    <startMenu />
</template>
