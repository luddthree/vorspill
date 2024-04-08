<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  nav();
});


function nav() {
  const next = Math.floor(Math.random() * 100);
  if (next < 12) {         // 12% chance
    navigateTo('/spill/flasketut?showParagraph=true');
  } else if (next < 14) {  // 2% chance
    navigateTo('/spill/felles?showParagraph=true');
  } else if (next < 34) {  // 20% chance
    navigateTo('/spill/doordrink?showParagraph=true');
  } else if (next < 51) {  // 17% chance
    navigateTo('/spill/jegharaldri?showParagraph=true');
  } else if (next < 70) {  // 19% chance
    navigateTo('/spill/pekeleken?showParagraph=true');
  } else if (next < 85) {  // 15% chance
    navigateTo('/spill/sips?showParagraph=true');
  } else if (next < 100) { // 15% chance
    navigateTo('/spill/gjett?showParagraph=true');
    
  } else {
    navigateTo('/'); 
  }
}
</script>
