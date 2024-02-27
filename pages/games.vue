<template>
    <div class="text-center font-bold mt-3">
        <NuxtLink to="/">
            <img src="/vorsspill.png" alt="logo" class="w-1/4 h-1/4 mx-auto">
        </NuxtLink>
    </div>
  
    <div class=" text-center mt-8 ">
    <button  @click="spill1()" class="animate-button rounded mt-4 rotate-1 text-white transition ease-in-out delay-50 bg-orange-500 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-50 ...">Gjør elr drikk</button>
  
      <button @click="spill2()" class="animate-button rounded mt-4 -rotate-1 text-white transition ease-in-out delay-50 bg-red-600 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-50 ...">flasketuten</button>
  
      <button @click="spill3()" class="animate-button rounded text-white mt-4 rotate-1 transition ease-in-out delay-50 bg-yellow-500 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 duration-50 ...">Pekeleken</button>
  
      <button class="animate-button rounded text-white mt-4 rotate-0 transition ease-in-out delay-50 bg-lime-600 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-lime-700 duration-50 ...">Jeg har aldri</button>

      <button class="animate-button rounded text-white mt-4 -rotate-1 transition ease-in-out delay-50 bg-teal-500 py-3 px-28 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-50 ...">spill 5</button>

      <button class="animate-button rounded text-white mt-4 rotate-1 transition ease-in-out delay-50 bg-blue-500 py-3 px-28 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-50 ...">spill 6</button>


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

//bakgrunssfarge endrer og viser spillsiden
async function spill1() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/playername');
  let bg = 0;
  while (bg < 10) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
  navigateTo('/spill/doordrink/spm');
}

async function spill2() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/flasketut/spm');
  let bg = 0;
  while (bg < 10) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
  navigateTo('/spill/flasketut/spin');
}

async function spill3() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/pekeleken/spm');
  let bg = 0;
  while (bg < 10) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
  navigateTo('/spill/pekeleken/spin');
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
