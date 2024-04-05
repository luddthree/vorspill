<template>
    <div :class="svar ? 'bg-green-500' : 'bg-red-500'" class="min-h-screen flex flex-col items-center justify-center text-white">
  
  <div class="min-h-screen flex flex-col items-center justify-center text-white">
    <div class="text-center font-bold">
      <p class="text-3xl mb-2">{{ msg }}</p>
    </div>
    
    <div v-if="randomBoolean" class="w-28 h-28 bg-white rounded"></div>

    <div v-if="!randomBoolean" class="w-28 h-28 bg-black rounded"></div>

    
    <div class="text-left fixed inset-x-0 left-6 top-12" style="z-index: 2;">
      <NuxtLink to="/games" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </NuxtLink>
    </div>

    
    <NuxtLink v-if="!showParagraph" to="/spill/gjett" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
    <NuxtLink v-if="showParagraph" to="/spill/mix" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink>
  </div>

  <div class="text-center text-white fixed inset-x-0 bottom-16">
      <p v-if="!showParagraph" class="text-xs">Trykk på skjermen for å spille igjen</p>
      <p v-if="showParagraph" class="text-xs">Trykk på skjermen for å gå videre</p>
  </div>
</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showParagraph = computed(() => route.query.showParagraph === 'true');
const farge = computed(() => route.query.farge.toString() === 'true');

const msg = ref('');
const svar = ref(false);

const randomBoolean = Math.random() < 0.5;

function color() {
  if ((randomBoolean && farge.value) || (!randomBoolean && !farge.value)) {
    msg.value = "riktig, du slipper å drikke!";
    svar.value = true; 
  } else {
    msg.value = "feil, du må drikke en slurk!";
    svar.value = false; 
  }
}


// console.log(`farge: ${farge.value}, randomBoolean: ${randomBoolean}`);

onMounted(color);
</script>

