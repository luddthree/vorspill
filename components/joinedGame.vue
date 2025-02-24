<script setup>
import { ref, onMounted } from 'vue';

const joinCode = ref('');

onMounted(() => {
    if (process.client) {
        joinCode.value = localStorage.getItem('joinCode') || '';
    }
});
</script>

<template>
      <div class="fixed inset-x-0 top-0 text-center bg-red-600 text-white shadow-lg flex justify-around">
        <h2 class="text-lg font-bold text-white">   
            {{ joinCode ? `Aktiv spill kode: ${joinCode}` : "" }}
        </h2>
    </div>
</template>
