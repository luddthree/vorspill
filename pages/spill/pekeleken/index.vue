  <template></template>

  <script setup lang="ts">

import { ref, onMounted } from 'vue';


onMounted(spill3);
import { useRoute } from 'vue-router'

const route = useRoute()
const showParagraph = computed(() => route.query.showParagraph === 'true')

  
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
async function spill3() {
  const originalBackgroundColor = document.body.style.backgroundColor;
  if (showParagraph.value == true) {
    navigateTo('/spill/everyone?showParagraph=true');

} else {
  navigateTo('/spill/everyone');}
  let bg = 0;
  while (bg < 7) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  if (showParagraph.value == true) {
    navigateTo('/spill/pekeleken/game?showParagraph=true');

} else {
  navigateTo('/spill/pekeleken/game');}
  bg = 0;
  while (bg < 14) {
    document.body.style.backgroundColor = generateRandomColor();
    await sleep(500);
    bg++;
  }
  document.body.style.backgroundColor = originalBackgroundColor;
}
</script>