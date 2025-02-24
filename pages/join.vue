<script setup>
import { ref, computed } from 'vue';
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();
const joinCode = ref('');

const fetchQuestions = () => {
    gameStore.fetchQuestions(joinCode.value);
};

// Group questions by category
const groupedQuestions = computed(() => {
    const groups = {
        1: 'Do or Drink',
        2: 'Never Have I Ever',
        3: 'Pointing Game',
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
</script>

<template>
    <div class="p-5">
        <input v-model="joinCode" placeholder="Enter Join Code" class="border p-2 mb-3 w-full">
        <button @click="fetchQuestions" class="bg-blue-500 text-white p-2">Fetch Questions</button>

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
</template>
