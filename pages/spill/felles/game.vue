<template>

<div class="flex justify-center items-center">
    <iframe src="https://www.youtube.com/embed/gHs2Ucs3Dog?autoplay=1" allow="autoplay" frameborder="0" allowfullscreen></iframe>
</div>

<div class="text-center">
<button @click="skip" class="rounded bg-green-500 p7-3 mt-10 px-20">skip</button>
</div>

</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
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
//   navigateTo('/spill/felles/game?showParagraph=true');
}
</script>