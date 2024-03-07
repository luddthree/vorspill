<template></template>

<script setup>
import { ref, onMounted } from 'vue';


onMounted(spill1);



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
  navigateTo('/spill/doordrink/game');
}

</script>