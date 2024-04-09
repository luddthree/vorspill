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
  const stringList = ['Pek på den som har verst musikksmak', 'Pek på den som har dårligst stil', 
  'Pek på den som er minst attraktiv', 'Spill de neste 3 rundene i bare undertøy', 
  'Legg ut at du støtter putin på mystory', 'Ta en backflip', 'Hvem i rommet skulle du ønske ikke var her', 
  'Vipps 100kr til 90550266', 'La alle få kile deg i 20 sek', 'Dra hjem', 'bytt klær med en i rommet', 
  'La de andre gå igjennom telefonen din', 'pek på den du kunne banket i en slosskamp', 'si en hemmelighet du aldri har fortalt noen',
  'hvilken person i rommet har du mest lyst til å kysse', 'hvem i rommer ser ut som de har minst penis', 'stå på henda i 5 sekunder',
  'Dans en fortnite dans', 'hvem i rommet er den dårligste vennen', 'hvem i rommet hadde du brydd deg minst om døde',
  'la en annen slappe deg på rumpa', 'hvis du måtte hatt sex med et dyr, hvilket?', 'hvem i rommet ville du helt gitt oralsex?', 
  'Dans uten musikk i ett minutt', 'les den siste teksmeldingen du skrev høyt']; 

  const velgslurker = ref(''); 
  const slurker = ['2', '3', '4', '5']; 
    
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex];

    const randomslurker = Math.floor(Math.random() * slurker.length); 
    velgslurker.value = slurker[randomslurker]; 
  }

  onMounted(pickRandomString);
  </script>
  