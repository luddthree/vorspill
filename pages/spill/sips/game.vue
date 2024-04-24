<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-white">
      <div v-if="velgslurker" class="text-center font-bold">
        <p class="text-2xl mb-2">Må ta</p>
        
        <p class="text-3xl">{{ velgslurker }} pushups!</p>


      </div>

      <div class="text-left fixed inset-x-0 left-6 top-12" style="z-index: 2;">
      <NuxtLink to="/games" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </NuxtLink>
    </div>

    <NuxtLink v-if="!showParagraph" to="/spill/sips" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    <NuxtLink v-if="showParagraph" to="/spill/mix?slurk=true" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    </div>

    <div class="text-center text-white fixed inset-x-0 bottom-16">
        <p  v-if="!showParagraph" class="text-xs">Trykk på skjermen for å spille igjen</p>
        <p  v-if="showParagraph" class="text-xs">Trykk på skjermen for å gå videre</p>
        </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const showParagraph = computed(() => route.query.showParagraph === 'true')

  const velgslurker = ref(''); 
  const slurker = ['2', '3', '4']; 
    
  function pickRandomString() {
    const randomslurker = Math.floor(Math.random() * slurker.length); 
    velgslurker.value = slurker[randomslurker]; 
  }

  onMounted(pickRandomString);
  </script>
  