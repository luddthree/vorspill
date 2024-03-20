<template>
  <div class="flex justify-center items-center mt-40">
      <!-- The `id` attribute is necessary for the YouTube API to target the iframe -->
      <iframe id="youtube-player" width="370" height="230" src="https://www.youtube.com/embed/gHs2Ucs3Dog?enablejsapi=1" allow="autoplay; fullscreen" frameborder="0"></iframe>
  </div>
  
  <div class="text-center">
      <!-- Use `v-if` to conditionally render the button based on whether the video has ended -->
      <!-- <button v-if="videoEnded" @click="skip" class="rounded bg-green-500 p-3 mt-10 px-20">Gå tilbake</button> -->
    <div class="text-center text-white fixed inset-x-0 bottom-16">
      <button v-if="!videoEnded" @click="skip" class="rounded bg-blue-900 py-4 mt-10 px-20">Jeg er for feig, skip</button>
    </div>
      <div>
    <!-- <NuxtLink v-if="videoEnded" to="/games" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink> -->
    <button v-if="videoEnded" @click="skip" class="w-full h-full absolute"style="z-index: 1;"></button>

    <!-- <NuxtLink v-if="showParagraph" to="/spill/mix" class="w-full h-full absolute" style="z-index: 1;"></NuxtLink> -->
    </div>

    <div class="text-center text-white fixed inset-x-0 bottom-16">
        <p  v-if="videoEnded" class="text-xs">Trykk på skjermen for å gå tilbake</p>
        </div>

  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  
  const router = useRouter();
  const route = useRoute();
  const videoEnded = ref(false); // This ref will control the visibility of the button
  
  // Load the YouTube IFrame Player API code asynchronously
  onMounted(() => {
      let tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      window.onYouTubeIframeAPIReady = function() {
          // This function creates an <iframe> (and YouTube player) after the API code downloads.
          var player = new YT.Player('youtube-player', {
              events: {
                  'onStateChange': onPlayerStateChange
              }
          });
      };
  
      function onPlayerStateChange(event) {
          // When video ends (state code 0), set videoEnded to true
          if (event.data == YT.PlayerState.ENDED) {
              videoEnded.value = true;
          }
      }
  });
  

  


const showParagraph = computed(() => route.query.showParagraph === 'true')

onMounted(bak);

  
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
let bg = false;

async function bak() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  while (bg == false) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(2500);
    
  }
  document.body.style.backgroundColor = originalBackgroundColor;
}

async function skip() {
  bg = true;
  navigateTo('/games');
//   navigateTo('/spill/felles/game?showParagraph=true');
}
</script>