<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div v-if="randomString" class="text-center font-bold">
        <p class="text-xl">Den flasketuten peker på...</p>
        <p class="text-2xl">{{ randomString }}</p>
      </div>
      <!-- <button @click="pickRandomString" class="mt-5 bg-blue-500 text-white p-2 rounded"> -->
        <!-- Pick a Random String
      </button> -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const randomString = ref(''); // Reactive variable to store the random string
  const stringList = ['kan dele ut 3 slurker!', 'må drikke 2 slurker!']; // Your list of strings
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); // Get a random index
    randomString.value = stringList[randomIndex]; // Select a random string from the list
  }
  
  onMounted(pickRandomString); // Call pickRandomString when the component mounts
  </script>
  