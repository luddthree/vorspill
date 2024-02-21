<template>
    <div class="text-center font-bold mt-3">
        <NuxtLink to="/">
            <img src="/vorsspill.png" alt="logo" class="w-1/4 h-1/4 mx-auto">
        </NuxtLink>
    </div>
  
    <div class=" text-center mt-8 ">
    <button  @click="spill1()" class="rounded mt-4 rotate-1 text-white transition ease-in-out delay-50 bg-orange-500 py-3 px-32 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-50 ...">spill 1</button>
  
      <button @click="spill2()" class="rounded mt-4 -rotate-1 text-white transition ease-in-out delay-50 bg-red-600 py-3 px-32 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-50 ...">spin</button>
  
      <button @click="spill3()" class="rounded text-white mt-4 rotate-1 transition ease-in-out delay-50 bg-yellow-400 py-3 px-20 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-50 ...">Hvem i rommet</button>
  
      <button class="rounded text-white mt-4 rotate-0 transition ease-in-out delay-50 bg-lime-500 py-3 px-32 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-lime-600 duration-50 ...">spill 4</button>

      <button class="rounded text-white mt-4 -rotate-1 transition ease-in-out delay-50 bg-teal-500 py-3 px-32 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-50 ...">spill 5</button>

      <button class="rounded text-white mt-4 rotate-1 transition ease-in-out delay-50 bg-blue-500 py-3 px-32 text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-50 ...">spill 6</button>

    </div>

  </template>
  
  <script setup lang="ts">
import type { NuxtLink } from '#build/components';

function spill1() {
    const originalBackgroundColor = document.body.style.backgroundColor;
  setTimeout(() => {
    navigateTo('/spill/playername');
  }, 320); 

  setTimeout(() => {
    document.body.style.backgroundColor = "red";
  }, 720); 

  setTimeout(() => {
    document.body.style.backgroundColor = "blue";
  }, 1120);
  
  setTimeout(() => {
    document.body.style.backgroundColor = "green";
  }, 1520);

  setTimeout(() => {
    document.body.style.backgroundColor = "orange";
  }, 1920);

  setTimeout(() => {
    document.body.style.backgroundColor = originalBackgroundColor;
  }, 2420); 

  setTimeout(() => {
    navigateTo('/spill/doordrink');
  }, 2820); 

}


    function spill2() {
        setTimeout(() => {
            navigateTo('/spill/spin')
        }, 320)
    }


    function spill3() {
        setTimeout(() => {
            navigateTo('/spill/whointheroom')
        }, 320)
    }
  </script>