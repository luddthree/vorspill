<script setup>
import { ref } from 'vue';
import { Play, Home, Users, PlusCircle, BookOpen } from 'lucide-vue-next';

const showPopup = ref(false);

const confirmStart = () => {
    const players = JSON.parse(localStorage.getItem('players')) || [];

    if (!players.length) {
        alert('Du må legge til spillere før du kan starte spillet!');
        return;
    }

    showPopup.value = true;
};

const startGame = () => {
    // console.log('Spillet startet!');
    showPopup.value = false;
    navigateTo('/games');
};
</script>

<template>
    <div class="fixed inset-x-0 bottom-0 pb-5 bg-black/60 backdrop-blur-lg shadow-2xl border-t border-white/10 text-white py-3 flex justify-around rounded-t-xl">

        <NuxtLink to="/" class="flex flex-col items-center text-gray-400 hover:text-white" exact-active-class="text-white font-medium">
            <Home class="h-6 w-6" />
            <span class="text-[11px] mt-1">Hjem</span>
        </NuxtLink>

        <NuxtLink to="/create" class="flex flex-col items-center text-gray-400 hover:text-white" exact-active-class="text-white font-medium">
            <PlusCircle class="h-6 w-6" />
            <span class="text-[11px] mt-1">Opprett</span>
        </NuxtLink>

        <button 
            @click="confirmStart" 
            class="flex flex-col items-center text-white scale-125"
        >
            <Play class="h-8 w-8" />
            <span class="text-[12px] mt-1">Start</span>
        </button>

        <NuxtLink to="/join" class="flex flex-col items-center text-gray-400 hover:text-white" exact-active-class="text-white font-medium">
            <Users class="h-6 w-6" />
            <span class="text-[11px] mt-1">Bli med</span>
        </NuxtLink>

        <NuxtLink to="/spill" class="flex flex-col items-center text-gray-400 hover:text-white" exact-active-class="text-white font-medium">
            <BookOpen class="h-6 w-6" />
            <span class="text-[11px] mt-1">Regler</span>
        </NuxtLink>
    </div>

    <!-- Confirmation Popup -->
    <transition name="fade">
        <div v-if="showPopup" class="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center">
            <div class="bg-white text-black rounded-3xl p-6 w-80 shadow-xl">
                <h2 class="text-lg font-semibold text-center">Vil du virkelig starte et spill?</h2>
                <div class="flex justify-around mt-4">
                    <button @click="showPopup = false" class="bg-gray-300 text-black px-4 py-2 rounded-lg w-1/3">
                        Avbryt
                    </button>
                    <button @click="startGame" class="bg-blue-500 text-white px-4 py-2 rounded-lg w-1/3">
                        Start
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
