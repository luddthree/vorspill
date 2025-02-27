<script setup>
import { ref } from 'vue';
import { useGameStore } from '~/stores/game';

const showPopup = ref(false);
const showPopup2 = ref(false);
const showPopup3 = ref(false);
const showPopup4 = ref(false);

const togglePopup = () => {
    showPopup.value = !showPopup.value;
};
const togglePopup2 = () => {
    showPopup2.value = !showPopup2.value;
};
const togglePopup3 = () => {
    showPopup3.value = !showPopup3.value;
};
const togglePopup4 = () => {
    showPopup4.value = !showPopup4.value;
};

const gameStore = useGameStore();
const joinCode = ref('');
const questions = ref({
    1: [''],
    2: [''],
    3: [''],
    4: ['']
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

import joinedGame from '~/components/joinedGame.vue';
import startMenu from '~/components/startMenu.vue';
</script>

<template>
    <joinedGame />
    <div class="p-5 mt-20 max-w-lg mx-auto">
        <h1 class="text-center font-bold text-2xl p-3 text-white">Lag ditt eget spill!</h1>
        <input 
            v-model="joinCode" 
            placeholder='Velg din "Bli med" kode' 
            class="border p-2 mb-3 w-full rounded-lg shadow-sm"
        >
        <p class="text-white text-sm mb-5">Anbefaler minst 5 spørsmål per felt</p>

        <!-- Category 1: Gjør eller drikk -->
        <div class="mb-5">
            <button 
                @click="togglePopup" 
                class="w-full bg-gray-800 text-white text-left font-semibold p-3 rounded-lg flex justify-between items-center"
            >
                Gjør eller drikk
                <svg 
                    :class="{ 'rotate-180': showPopup }" 
                    class="h-5 w-5 transition-transform"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div v-if="showPopup" class="bg-gray-700 rounded-lg mt-2 p-3 shadow-lg">
                <div v-for="(q, index) in questions[1]" :key="index" class="mb-2 flex items-center gap-2">
                    <input 
                        v-model="questions[1][index]" 
                        placeholder="f.eks Hvem skulle du ønske ikke var her" 
                        class="border rounded-lg p-1 w-full text-sm"
                    >
                    <button 
                        v-if="index === questions[1].length - 1" 
                        @click="addQuestion(1)" 
                        class="bg-blue-500 rounded-full text-white px-2 text-xl font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        <!-- Category 2: Jeg har aldri -->
        <div class="mb-5">
            <button 
                @click="togglePopup2" 
                class="w-full bg-gray-800 text-white text-left font-semibold p-3 rounded-lg flex justify-between items-center"
            >
                Jeg har aldri
                <svg 
                    :class="{ 'rotate-180': showPopup2 }" 
                    class="h-5 w-5 transition-transform"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div v-if="showPopup2" class="bg-gray-700  rounded-lg mt-2 p-3 shadow-lg">
                <div v-for="(q, index) in questions[2]" :key="index" class="mb-2 flex items-center gap-2">
                    <input 
                        v-model="questions[2][index]" 
                        placeholder="f.eks Stjålet noe" 
                        class="border rounded-lg p-1 w-full text-sm"
                    >
                    <button 
                        v-if="index === questions[2].length - 1" 
                        @click="addQuestion(2)" 
                        class="bg-blue-500 rounded-full text-white px-2 text-xl font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        <!-- Category 3: Peleken -->
        <div class="mb-5">
            <button 
                @click="togglePopup3" 
                class="w-full bg-gray-800 text-white text-left font-semibold p-3 rounded-lg flex justify-between items-center"
            >
                Peleken
                <svg 
                    :class="{ 'rotate-180': showPopup3 }" 
                    class="h-5 w-5 transition-transform"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div v-if="showPopup3" class="bg-gray-700  rounded-lg mt-2 p-3 shadow-lg">
                <div v-for="(q, index) in questions[3]" :key="index" class="mb-2 flex items-center gap-2">
                    <input 
                        v-model="questions[3][index]" 
                        placeholder="f.eks Har dårligst stil" 
                        class="border rounded-lg p-1 w-full text-sm"
                    >
                    <button 
                        v-if="index === questions[3].length - 1" 
                        @click="addQuestion(3)" 
                        class="bg-blue-500 rounded-full text-white px-2 text-xl font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        <!-- Category 4: Ekstra oppgaver -->
        <div class="mb-5">
            <button 
                @click="togglePopup4" 
                class="w-full bg-gray-800 text-white text-left font-semibold p-3 rounded-lg flex justify-between items-center"
            >
                Gjør eller drikk (2 personer)
                <svg 
                    :class="{ 'rotate-180': showPopup4 }" 
                    class="h-5 w-5 transition-transform"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div v-if="showPopup4" class="bg-gray-700  rounded-lg mt-2 p-3 shadow-lg">
                <div v-for="(q, index) in questions[4]" :key="index" class="mb-2 flex items-center gap-2">
                    <input 
                        v-model="questions[4][index]" 
                        placeholder="f.eks kyss hverandre på munnen" 
                        class="border rounded-lg p-1 w-full text-sm"
                    >
                    <button 
                        v-if="index === questions[4].length - 1" 
                        @click="addQuestion(4)" 
                        class="bg-blue-500 rounded-full text-white px-2 text-xl font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

        <!-- Centered Create Game Button -->
        <div class="flex justify-center mt-5">
            <button 
                @click="createGame" 
                class="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg font-semibold transition-all"
                >
                Lag Spill!
            </button>
        </div>

        <p class="mt-3 text-white text-center">{{ gameStore.message }}</p>
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

    <div class="mt-32"></div>
</template>