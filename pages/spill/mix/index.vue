<template>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';

  onMounted(() => {
    nav();
  });


  function nav() {
    const next = Math.floor(Math.random() * 6);
    if (next === 0) {
      navigateTo('/spill/flasketut?showParagraph=true');
    } else if (next === 1) {
      navigateTo('/spill/doordrink?showParagraph=true');
    } else if (next === 2) {
      navigateTo('/spill/jegharaldri?showParagraph=true');
    } else if (next === 3) {
      navigateTo('/spill/pekeleken?showParagraph=true');
    } else if (next === 4) {
      navigateTo('/spill/sips?showParagraph=true');
    } else if (next === 5) {
      navigateTo('/spill/doordrink?showParagraph=true');
    } else {
      navigateTo('/');}
  }


  </script>
  