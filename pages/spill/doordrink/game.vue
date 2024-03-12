<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-white">
      <div v-if="randomString" class="text-center font-bold">
        <p class="text-3xl mb-2">{{ randomString }}!</p>
        
        <p class="text-2xl">eller drikk {{ velgslurker }} slurker</p>


      </div>

      <div class="text-center fixed inset-x-0 bottom-20">
      <NuxtLink to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Tilbake</NuxtLink>
      <NuxtLink v-if="!mixround" to="/spill/pekeleken" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Spill igjen</NuxtLink>
      <NuxtLink v-if="mixround" to="/spill/mix" class="text-white text-xl rounded bg-blue-500 py-3 px-5 ml-2">Fortsett</NuxtLink>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const mixround = computed(() => route.query.mixround === 'true')

  const randomString = ref('');
  const stringList = ['Pek på den som har verst musikksmak', 'Pek på den som har dårligst stil', 'Pek på den som er minst attraktiv']; 

  const velgslurker = ref(''); 
  const slurker = ['2', '3', '4', '5', ]; 
    
  function pickRandomString() {
    const randomIndex = Math.floor(Math.random() * stringList.length); 
    randomString.value = stringList[randomIndex];

    const randomslurker = Math.floor(Math.random() * slurker.length); 
    velgslurker.value = slurker[randomslurker]; 
  }

  onMounted(pickRandomString);
  </script>
  