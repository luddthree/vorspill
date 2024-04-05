<template>
  
    <div class="text-center font-bold mt-3">
        <NuxtLink to="/">
            <img src="/vorsspill.png" alt="logo" class="w-1/4 h-1/4 mx-auto">
        </NuxtLink>
    </div>
  
    <div class=" text-center mt-8 font-bold">
    <button  @click="spill1()" class="animate-button rounded mt-4 rotate-1 text-orange-900 transition ease-in-out delay-50 bg-orange-500 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-50 ...">Gjør eller drikk</button>
  
      <button @click="spill2()" class="animate-button rounded mt-4 -rotate-1 text-red-900 transition ease-in-out delay-50 bg-red-600 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-50 ...">Flasketuten</button>
  
      <button @click="spill3()" class="animate-button rounded text-yellow-800 mt-4 rotate-1 transition ease-in-out delay-50 bg-yellow-500 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 duration-50 ...">Pekeleken</button>
  
      <button @click="spill4()" class="animate-button rounded text-green-900 mt-4 rotate-0 transition ease-in-out delay-50 bg-lime-600 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-lime-700 duration-50 ...">Jeg har aldri</button>

      <button @click="spill5()" class="animate-button rounded text-teal-800 mt-4 -rotate-1 transition ease-in-out delay-50 bg-teal-500 py-3 px-32 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-50 ...">Drikk</button>

      <button @click="spill6()" class="animate-button rounded text-blue-900 mt-4 rotate-1 transition ease-in-out delay-50 bg-blue-500 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-50 ...">Fellesfitta</button>

      <button @click="spill7()" class="animate-button rounded text-purple-900 mt-4 rotate-0 transition ease-in-out delay-50 bg-purple-500 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 duration-50 ...">Gjett og drikk</button>

    </div>
    <div class="text-center text-white fixed inset-x-0 bottom-30">
      <button @click="mix()" class="animate-button rounded text-white mt-16 font-bold rotate-0 transition ease-in-out delay-50 bg-pink-500 py-4 px-16 text-4xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-50 ...">Litt av hvert!</button>
</div>

  </template>
  
  <script setup>
  
  import { onMounted, ref } from 'vue';
// import type { NuxtLink } from '#build/components';
//loop for å kjøre animasjonen
async function animate() {
  let ani = 0;
  while (ani < 69) {
    animateButtonsSequentially();
    await sleep(11000);
  }
}
//copypaste knapp animasjon
const buttons = ref([]);
onMounted(() => {
  buttons.value = document.querySelectorAll('.animate-button'); 
  animate();
});

function animateButtonsSequentially(index = 0) {
  if (index >= buttons.value.length) return;

  buttons.value[index].classList.add('grow-animation');

  buttons.value[index].addEventListener('animationend', () => {
    buttons.value[index].classList.remove('grow-animation');
    
    animateButtonsSequentially(index + 1);
  }, { once: true });
}

//random farger
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r},${g},${b})`; 
}
//@ts-ignore
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function spill1() {
  navigateTo('/spill/doordrink');
}
function spill2() {
  navigateTo('/spill/flasketut');
}
function spill3() {
  navigateTo('/spill/pekeleken');
}
function spill4() {
  navigateTo('/spill/jegharaldri');
}
function spill5() {
  navigateTo('/spill/sips');
}
function spill6() {
  navigateTo('/spill/felles');
}
function spill7() {
  navigateTo('/spill/gjett');
}


function mix() {
  navigateTo('/spill/mix');

}
  </script>

<style>
@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.grow-animation {
  animation: grow 0.5s ease-in-out;
}


</style>
