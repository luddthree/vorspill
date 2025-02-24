<script setup>
import { ref } from 'vue';
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();
const joinCode = ref('');
const questions = ref({
    'Do or Drink': [''],
    'Never Have I Ever': [''],
    'Pointing Game': ['']
});

const addQuestion = (category) => {
    questions.value[category].push('');
};

const createGame = () => {
    const formattedQuestions = [];

    for (const category in questions.value) {
        questions.value[category].forEach(text => {
            if (text.trim()) {
                formattedQuestions.push({ text, category });
            }
        });
    }

    gameStore.createGame(joinCode.value, formattedQuestions);
};
</script>

<template>
    <div class="p-5">
        <input v-model="joinCode" placeholder="Enter Join Code" class="border p-2 mb-3 w-full">

        <div v-for="(questionList, category) in questions" :key="category">
            <h3 class="font-bold mt-3 text-white">{{ category }}</h3>

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
</template>
