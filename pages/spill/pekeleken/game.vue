<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div v-if="randomString" class="text-center text-white font-bold">
      <p class="text-2xl mb-1">Pek på den som...</p>
      <p class="text-3xl mb-2">{{ randomString }}!</p>
    </div>
    <p v-if="counter > 0" class="text-white font-bold text-3xl mt-10">{{ counter }}</p>
    <p v-else class="text-4xl text-white mt-10">PEEEK!</p>

    <div class="text-center fixed inset-x-0 bottom-20">
      <NuxtLink v-if="counter <= 0" to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
      <NuxtLink v-if="counter <= 0 && !mixround" to="/spill/pekeleken" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Spill igjen</NuxtLink>
      <NuxtLink v-if="counter <= 0 && mixround" to="/spill/mix" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Fortsett</NuxtLink>
    </div>
  </div>
</template>

  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const mixround = computed(() => route.query.mixround === 'true')

  const randomString = ref(''); 
  const stringList = ['har dårligst musikksmak', 'kommer til å havne i fengsel'];
  const counter = ref(7); 
  
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex];
    startCounter(); 
  }
  
  function startCounter() {
    const interval = setInterval(() => {
      if (counter.value > 0) {
        counter.value--; 
      } else {
        clearInterval(interval); 
      }
    }, 1000);
  }
  
  onMounted(pickRandomString); 

  </script>