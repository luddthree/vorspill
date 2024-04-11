<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const flasketut = computed(() => route.query.flasketut === 'true');
const felles = computed(() => route.query.felles === 'true'); 
const doordrink = computed(() => route.query.doordrink === 'true');
const jegharaldri = computed(() => route.query.jegharaldri === 'true');
const pekeleken = computed(() => route.query.pekeleken === 'true');
const slurk = computed(() => route.query.slurk === 'true');
const gjett = computed(() => route.query.gjett === 'true');

// console.log(flasketut.value, doordrink.value, jegharaldri.value, pekeleken.value, slurk.value, gjett.value);

onMounted(() => {
nav();
});

function nav() {
let next, selectedRoute;
do {
  next = Math.floor(Math.random() * 10);
  if (next <= 12 && !flasketut.value) {
    selectedRoute = '/spill/felles?showParagraph=true';
  } else if (next <= 13 && !felles.value) {
    selectedRoute = '/spill/felles?showParagraph=true';
  } else if (next <= 34 && !doordrink.value) {
    selectedRoute = '/spill/doordrink?showParagraph=true';
  } else if (next <= 51 && !jegharaldri.value) {
    selectedRoute = '/spill/jegharaldri?showParagraph=true';
  } else if (next <= 70 && !pekeleken.value) {
    selectedRoute = '/spill/pekeleken?showParagraph=true';
  } else if (next <= 85 && !slurk.value) {
    selectedRoute = '/spill/sips?showParagraph=true';
  } else if (next <= 100 && !gjett.value) {
    selectedRoute = '/spill/gjett?showParagraph=true';
  } else if (next >= 100) {
    selectedRoute = '/';
  }
  console.log(next)
} while (!selectedRoute); 

if (selectedRoute) {
  console.log('Navigating to:', selectedRoute);
  router.push(selectedRoute);
}
}
</script>
