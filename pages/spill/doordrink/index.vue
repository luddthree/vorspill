<template>
    <div></div>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const showParagraph = computed(() => route.query.showParagraph === 'true')

  onMounted(() => {
    nav();
  });


  function nav() {
    if (showParagraph.value == true) {
        const next = Math.floor(Math.random() * 2);
        if (next === 0) {
        navigateTo('/spill/doordrink/1player?showParagraph=true');
        } else if (next === 1) {
            navigateTo('/spill/doordrink/2player?showParagraph=true');
        } else {
        navigateTo('/');}
    
    } else {

    const next = Math.floor(Math.random() * 2);
    if (next === 0) {
      navigateTo('/spill/doordrink/1player');
    } else if (next === 1) {
        navigateTo('/spill/doordrink/2player');
    } else {
      navigateTo('/');}
  }
  }

  </script>
  