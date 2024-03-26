<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div v-if="randomString" class="text-center text-white font-bold">
      <p class="text-2xl mb-1">Pek på den som...</p>
      <p class="text-3xl mb-2">{{ randomString }}!</p>
    </div>
    <p v-if="counter > 0" class="text-white font-bold text-5xl mt-10">{{ counter }}</p>
    <p v-else class="text-4xl text-white mt-10">PEEEK!</p>


    <div class="text-left fixed inset-x-0 left-6 top-12" style="z-index: 2;">
      <NuxtLink v-if="counter <= 0" to="/games" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </NuxtLink>
    </div>

    <NuxtLink v-if="counter <= 0 && !showParagraph" to="/spill/pekeleken" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    <NuxtLink v-if="counter <= 0 && showParagraph" to="/spill/mix" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
  </div>


  <div v-if="counter <= 0" class="text-center text-white fixed inset-x-0 bottom-16">
        <p  v-if="!showParagraph" class="text-xs">Trykk på skjermen for å spille igjen</p>
        <p  v-if="showParagraph" class="text-xs">Trykk på skjermen for å gå videre</p>
        </div>
</template>

  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const showParagraph = computed(() => route.query.showParagraph === 'true')

  const randomString = ref(''); 
  const stringList = ['har dårligst musikksmak', 'kommer til å havne i fengsel', 
  'er mest uskyldig', 'kommer til å ende opp som naver', 'har lavest iq', 'er mest nørd', 
  'hadde sugd pikk for minst penger', 'er mest sannsynlig til å bli rik', 
  'er mest sannsynlig til å bli kjendis', 'er mest sannsynlig til å bli president', 
  'er mest sannsynlig til å bli en seriemorder', 'er mest sannsynlig til å bli en pornostjerne',
  'er mest sannsynlig til å bli en narkoman', 'er mest sannsynlig til å bli en alkoholiker'];
  
  const counter = ref(7); 
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex];
    startCounter(); 
  }
  
  function startCounter() {
    const interval = setInterval(() => {
      if (counter.value > 0) {
        counter.value--; 
      } else {
        clearInterval(interval); 
      }
    }, 1000);
  }
  
  onMounted(pickRandomString); 

  </script>