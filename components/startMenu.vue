<script setup>
import { Play, Home, Users, PlusCircle, BookOpen } from 'lucide-vue-next';
</script>

<template>
    <div class="fixed inset-x-0 bottom-0 bg-gray-900 text-white py-3 shadow-lg flex justify-around">
        <NuxtLink to="/" class="flex flex-col items-center text-gray-300 hover:text-white">
            <Home class="h-5 w-5" />
            <span class="text-xs mt-1">Hjem</span>
        </NuxtLink>

        <NuxtLink to="/create" class="flex flex-col items-center text-gray-300 hover:text-white">
            <PlusCircle class="h-5 w-5" />
            <span class="text-xs mt-1">Opprett</span>
        </NuxtLink>

        <NuxtLink to="/games" class="flex flex-col items-center text-gray-300 hover:text-white">
            <Play class="h-7 w-7" />
            <span class="text-xs mt-1">Start spill</span>
        </NuxtLink>

        <NuxtLink to="/join" class="flex flex-col items-center text-gray-300 hover:text-white">
            <Users class="h-5 w-5" />
            <span class="text-xs mt-1">Bli med</span>
        </NuxtLink>

        <NuxtLink to="/spill" class="flex flex-col items-center text-gray-300 hover:text-white">
            <BookOpen class="h-5 w-5" />
            <span class="text-xs mt-1">Regler</span>
        </NuxtLink>
    </div>
</template>
