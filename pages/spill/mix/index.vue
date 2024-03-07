<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-white">


      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
    <NuxtLink to="/spill/mix" class="text-white text-xl rounded bg-blue-500 py-3 px-5 mr-2">Videre</NuxtLink>
    <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';

  onMounted(() => {
    nav();
  });


  function nav() {
    const next = Math.floor(Math.random() * 3);
    if (next === 0) {
      navigateTo('/spill/doordrink');
    } else if (next === 1) {
      navigateTo('/spill/flasketut');
    } else if (next === 2) {
      navigateTo('/spill/pekeleken');
    } else if (next === 3) {
      navigateTo('/spill/jegharaldri');
    } else {
      navigateTo('/');}
  }


  </script>
  