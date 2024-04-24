<template>
    <!-- <NuxtLink to="/spill/felles/game" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink> -->
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="text-center text-white font-bold ">
        <p class="text-2xl">Ta en pushup hver gang han sier</p>
        <p class="text-3xl mt-3">Felicita (fellesfi**a)!</p>
        <div class="text-center"> 
          <button @click="regler" class="rounded px-20 py-4 bg-blue-900" style="z-index: 2;">Se regler her</button>

          <div class="text-center text-white fixed inset-x-0 bottom-16">
        <p class="text-xs">Trykk på skjermen for å gå videre</p>
        </div>

        <div>
    <button @click="spill()" class="w-full h-full absolute" style="z-index: 1;"></button>
    <!-- <NuxtLink v-if="showParagraph" to="/spill/mix" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink> -->
    </div>

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

  function spill(){
  if (showParagraph.value == true) {
    navigateTo('/spill/felles/game?showParagraph=true');
  } else {
    navigateTo('/spill/felles/game');}
  }
  </script>