<template>
    <!-- <NuxtLink to="/spill/felles/game" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink> -->
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="text-center text-white font-bold ">
        <p class="text-2xl">Ta en slurk hver gang han sier</p>
        <p class="text-3xl mt-3">Felicita (fellesfitta)!</p>
        <div class="text-center"> 
          <button @click="regler" class="rounded px-20 py-4 bg-red-600" style="z-index: 2;">Se regler her</button>

        </div>
      </div>
    </div>
  </template>  

  <script setup>
  function regler() {
      navigateTo('/spill?felles=true');
  }
  </script>