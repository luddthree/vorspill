<template>
    <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  nav();
});


function nav() {
  const next = Math.floor(Math.random() * 100);
  if (next < 12) {         // 12% chance
    console.log('flasketut');
    navigateTo('/spill/flasketut?showParagraph=true');
  } else if (next < 14) {  // 2% chance
    console.log('felles');
    navigateTo('/spill/felles?showParagraph=true');
  } else if (next < 34) {  // 20% chance
    console.log('gkør eller drikk');
    navigateTo('/spill/doordrink?showParagraph=true');
  } else if (next < 51) {  // 17% chance
    console.log('jeg ah aldri');
    navigateTo('/spill/jegharaldri?showParagraph=true');
  } else if (next < 70) {  // 19% chance
    console.log('pekeleken');
    navigateTo('/spill/pekeleken?showParagraph=true');
  } else if (next < 85) {  // 15% chance
    console.log('slurk');
    navigateTo('/spill/sips?showParagraph=true');
  } else if (next < 100) { // 15% chance
    console.log('gjett');
    navigateTo('/spill/gjett?showParagraph=true');
    
  } else {
    navigateTo('/'); 
  }
}
</script>

<!-- <script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  nav();
});

function nav() {
  let next = Math.floor(Math.random() * 100);
  const lastPage = localStorage.getItem('lastNavPath');

  function selectNewPath() {
    if (next < 12) {         // 12% chance
      console.log('flasketut');
      return '/spill/flasketut?showParagraph=true';
    } else if (next < 14) {  // 2% chance
      console.log('flasketut');
      return '/spill/felles?showParagraph=true';
    } else if (next < 34) {  // 20% chance
      console.log('gkør eller drikk');
      return '/spill/doordrink?showParagraph=true';
    } else if (next < 51) {  // 17% chance
      console.log('jeg ah aldri');
      return '/spill/jegharaldri?showParagraph=true';
    } else if (next < 70) {  // 19% chance
      console.log('pekeleken');
      return '/spill/pekeleken?showParagraph=true';
    } else if (next < 85) {  // 15% chance
      console.log('slurk');
      return '/spill/sips?showParagraph=true';
    } else if (next < 100) { // 15% chance
      console.log('gjett');
      return '/spill/gjett?showParagraph=true';
    } else {
      return '/';
    }
  }

  let newPath = selectNewPath();

  while (newPath === lastPage) {
    next = Math.floor(Math.random() * 100); 
    newPath = selectNewPath(); 
  }

  localStorage.setItem('lastNavPath', newPath); 
  navigateTo(newPath); 
}
</script> -->
