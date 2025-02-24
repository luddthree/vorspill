<template>
    <!-- <NuxtLink to="/spill/felles/game" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink> -->
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="text-center text-white font-bold ">
        <p class="text-2xl">Gjett riktig farge eller ta en slurk!</p>
        <div class="mt-10">
          <div class="flex justify-center">
            <div class="flex flex-col items-center">

              <div v-if="!showParagraph" class="flex justify-center">
                <NuxtLink to="/spill/gjett/game?farge=true"class="w-28 h-28 bg-white rounded"></NuxtLink>
                <p class="text-3xl mt-9 mr-2 ml-2">eller</p>
                <NuxtLink to="/spill/gjett/game?farge=false"class="w-28 h-28 bg-black rounded"></NuxtLink>
              </div>

              <div v-if="showParagraph" class="flex justify-center">
                <NuxtLink to="/spill/gjett/game?farge=true&showParagraph=true"class="w-28 h-28 bg-white rounded"></NuxtLink>
                <p class="text-3xl mt-9 mr-2 ml-2">eller</p>
                <NuxtLink to="/spill/gjett/game?farge=false&showParagraph=true"class="w-28 h-28 bg-black rounded"></NuxtLink>
              </div>
              

            </div>
          </div>
        <p class="text-3xl mt-3"></p>

      </div>
        <div class="text-center"> 
          <!-- <button @click="regler" class="rounded px-20 py-4 bg-blue-900" style="z-index: 2;">Se regler her</button> -->

          <div class="text-center text-white fixed inset-x-0 bottom-16">
        <p class="text-xs">Velg en farge for å gå videre</p>
        </div>

        <!-- <div>
    <NuxtLink v-if="!showParagraph" to="/spill/felles/game" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    <NuxtLink v-if="showParagraph" to="/spill/mix" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    </div> -->

        </div>
      </div>
    </div>
  </template>  

  <script setup>
    import { useRoute } from 'vue-router'
  
const route = useRoute()
const showParagraph = computed(() => route.query.showParagraph === 'true')

  
  function regler() {
      navigateTo('/spill?felles=true');
  }
  </script>