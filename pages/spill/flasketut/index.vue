<template>
    <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const showParagraph = computed(() => route.query.showParagraph === 'true')

onMounted(spill2);

  
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

async function spill2() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  if (showParagraph.value == true) {
    navigateTo('/spill/flasketut/game?showParagraph=true');
  } else {
  navigateTo('/spill/flasketut/game');}
  let bg = 0;
  while (bg < 10) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
  if (showParagraph.value == true) {
    navigateTo('/spill/flasketut/spin?showParagraph=true');
  } else {
  navigateTo('/spill/flasketut/spin');}
}
</script>