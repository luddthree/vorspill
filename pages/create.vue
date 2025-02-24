<script setup>
import { ref } from 'vue';
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();
const joinCode = ref('');
const questions = ref({
    1: [''],
    2: [''],
    3: ['']
});

const addQuestion = (category) => {
    questions.value[category].push('');
};

const createGame = () => {
    const formattedQuestions = [];

    for (const category in questions.value) {
        questions.value[category].forEach(text => {
            if (text.trim()) {
                formattedQuestions.push({ text, category: parseInt(category) });
            }
        });
    }

    gameStore.createGame(joinCode.value, formattedQuestions);
};
import joinedGame from '~/components/joinedGame.vue'
import startMenu from '~/components/startMenu.vue'

</script>

<template>
    <joinedGame />
    <div class="p-5 mt-10">
        <h1 class="text-center font-bold text-2xl p-3 text-white">Lag ditt eget spill!</h1>
        <input v-model="joinCode" placeholder="Enter Join Code" class="border p-2 mb-3 w-full">

        <div v-for="(questionList, category) in questions" :key="category">
            <h3 class="font-bold mt-3 text-white">Category {{ category }}</h3>

            <div v-for="(q, index) in questionList" :key="index" class="mb-2 ">
                <input v-model="questions[category][index]" placeholder="Enter question" class="border rounded-lg p-2 w-full">
            </div>

            <button @click="addQuestion(category)" class="bg-blue-500 rounded-full text-white px-2 text-xl font-bold  m-1">
                + 
            </button>
        </div>

        <button @click="createGame" class="bg-green-500 text-white p-2 rounded-lg mt-5">Create Game</button>
        <p class="mt-3">{{ gameStore.message }}</p>
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