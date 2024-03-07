<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div v-if="randomString" class="text-center text-white font-bold ">
        <p class="text-2xl mb-1">Pek på den som...</p>
        <p class="text-3xl mb-2">{{ randomString }}!</p>
      </div>
      <p v-if="counter > 0" class="text-white font-bold text-3xl mt-10">{{ counter }}</p>
      <p v-else class="text-4xl text-white mt-10">PEEEK!</p>

    <div class="text-center fixed inset-x-0 bottom-20">
      <NuxtLink to="/spill/pekeleken" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Spill igjen</NuxtLink>
      <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
      <NuxtLink v-if="mix" to="/spill/mix" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Fortsett</NuxtLink>

  </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  let mix = true;
  const randomString = ref(''); // Reactive variable to store the random string
  const stringList = ['har dårligst musikksmak', 'kommer til å havne i fengsel']; // Your list of strings
  const counter = ref(7); // Reactive variable for the countdown
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); // Get a random index
    randomString.value = stringList[randomIndex]; // Select a random string from the list
    startCounter(); // Initialize the counter
  }
  
  function startCounter() {
    const interval = setInterval(() => {
      if (counter.value > 0) {
        counter.value--; // Decrease counter
      } else {
        clearInterval(interval); // Stop the countdown when it reaches 0
      }
    }, 1000); // Decrease every second
  }
  
  onMounted(pickRandomString); // Call pickRandomString when the component mounts

  </script>