<template>
    <div class="text-center font-bold mt-3">
        <NuxtLink to="/">
            <img src="/vorsspill.png" alt="logo" class="w-1/4 h-1/4 mx-auto">
        </NuxtLink>
    </div>
  
    <div class=" text-center mt-8 ">
    <button  @click="spill1()" class="rounded mt-4 rotate-1 text-white transition ease-in-out delay-50 bg-orange-500 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-50 ...">Gjør elr drikk</button>
  
      <button @click="spill2()" class="rounded mt-4 -rotate-1 text-white transition ease-in-out delay-50 bg-red-600 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-50 ...">flasketuten</button>
  
      <button @click="spill3()" class="rounded text-white mt-4 rotate-1 transition ease-in-out delay-50 bg-yellow-400 py-3 px-24 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-50 ...">Pekeleken</button>
  
      <button class="rounded text-white mt-4 rotate-0 transition ease-in-out delay-50 bg-lime-500 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-lime-600 duration-50 ...">Jeg har aldri</button>

      <button class="rounded text-white mt-4 -rotate-1 transition ease-in-out delay-50 bg-teal-500 py-3 px-28 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-50 ...">spill 5</button>

      <button class="rounded text-white mt-4 rotate-1 transition ease-in-out delay-50 bg-blue-500 py-3 px-28 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-50 ...">spill 6</button>

    </div>

  </template>
  
  <script setup lang="ts">
import type { NuxtLink } from '#build/components';

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
  navigateTo('/spill/doordrink');
}

async function spill2() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  navigateTo('/spill/flasketut/spm');
  let bg = 0;
  while (bg < 20) {
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