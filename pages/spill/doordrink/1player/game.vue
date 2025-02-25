<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-white">
      <div v-if="randomString" class="text-center font-bold">
          <p class="text-3xl mb-2">{{ randomString }}!</p>
          <p class="text-2xl">eller drikk {{ velgslurker }} slurker</p>
      </div>

      <div class="text-left fixed inset-x-0 left-6 top-12" style="z-index: 2;">
          <NuxtLink to="/games" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              <span class="sr-only">Icon description</span>
          </NuxtLink>
      </div>

      <NuxtLink v-if="!showParagraph" to="/spill/doordrink" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
      <NuxtLink v-if="showParagraph" to="/spill/mix?doordrink=true" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
  </div>

  <div class="text-center text-white fixed inset-x-0 bottom-16">
      <p v-if="!showParagraph" class="text-xs">Trykk på skjermen for å spille igjen</p>
      <p v-if="showParagraph" class="text-xs">Trykk på skjermen for å gå videre</p>
  </div>

  <div v-if="gameStore.questions.length">
      <div v-for="(questions, category) in groupedQuestions" :key="category">
          <div v-if="category === 'Gjør eller drikk'">
              <ul>
                  <li v-for="(question, index) in questions" :key="index" class="">
                      {{ question }}
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '~/stores/game';

const route = useRoute();
const showParagraph = computed(() => route.query.showParagraph === 'true');

const randomString = ref('');
const velgslurker = ref('');
const stringList = [
  'Pek på den som har verst musikksmak', 'Pek på den som har dårligst stil', 
  'Pek på den som er minst attraktiv', 'Spill de neste 3 rundene i bare undertøy', 
  'Legg ut at du støtter putin på mystory', 'Ta en backflip', 'Hvem i rommet skulle du ønske ikke var her', 
  'Vipps 100kr til 90550266', 'La alle få kile deg i 20 sek', 'Dra hjem', 'bytt klær med en i rommet', 
  'La de andre gå igjennom telefonen din', 'pek på den du kunne banket i en slosskamp', 'si en hemmelighet du aldri har fortalt noen',
  'hvilken person i rommet har du mest lyst til å kysse', 'hvem i rommer ser ut som de har minst penis', 'stå på henda i 5 sekunder',
  'Dans en fortnite dans', 'hvem i rommet er den dårligste vennen', 'hvem i rommet hadde du brydd deg minst om døde',
  'la en annen slappe deg på rumpa', 'hvis du måtte ligget med et dyr, hvilket?', 'hvem i rommet ville du helt gitt oralsex?', 
  'Dans uten musikk i ett minutt', 'les den siste teksmeldingen du skrev høyt'
];
const slurker = ['2', '3', '4', '5'];

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
  pickRandomString(); // Call this after loading questions
});

const fetchQuestions = async () => {
  await gameStore.fetchQuestions(joinCode.value);

  if (process.client) {
      localStorage.setItem('joinCode', joinCode.value);
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

// Pick a random string from localStorage questions or fallback to stringList
function pickRandomString() {
  let availableQuestions = [];

  // Check if there are questions in localStorage
  if (gameStore.questions.length > 0) {
      // Filter questions from category 1 (Gjør eller drikk)
      availableQuestions = gameStore.questions
          .filter(q => q.category === 1)
          .map(q => q.text);
  }

  // If no questions are available in localStorage, use stringList
  if (availableQuestions.length === 0) {
      availableQuestions = stringList;
  }

  // Pick a random question
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  randomString.value = availableQuestions[randomIndex];

  // Pick a random number of slurker
  const randomslurker = Math.floor(Math.random() * slurker.length);
  velgslurker.value = slurker[randomslurker];
}
</script>