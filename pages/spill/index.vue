<template>
    <joinedGame />
    <div class=" mt-24 px-4">
        <h1 class="text-3xl text-white text-center mt-10 font-bold">Hvordan spille</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-4">Spillet er et drikkespill og går ut på å gjøre spillerne så drita som mulig. Alt er helt tilfeldig så alle har like stor sjangse til å få bra runder som dårlige. Legg til spillere på startsiden og start spill! </p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Gjør eller drikk</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Her vil en enkelt spiller få sjangsen til å gjøre eller si noe, hvis ikke må de gjøre det tildelte antallet med slurker.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Flasketuten</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Enkelt å greit, den flasketuten peker på må gjøre det tildelte antallet med slurker.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Pekeleken</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Her skal alle spillerne peke på en den personen i rommet de mener passer best til tittelen tildelt, den spilleren med flest fingre pekt mot seg må drikke en slurk.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Jeg har aldri</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Hvis du har gjort det som kommer opp på skjermen må du drikke en slurk, her kan flere spillere måtte drikke slurker.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Slurk</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">En spiller blir bedt om å drikke et tilfeldig antall slurker.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Felles</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Spilleren må drikke en slurk  hver gang felicita (fellesfitta), sies i sangen. Demonstrasjons video under</p>
        <div class="flex items-center justify-center mt-4">
            <iframe class="w-full sm:w-1/2 lg:w-1/3 aspect-w-16 aspect-h-9" src="https://www.youtube.com/embed/iMRITRuseq4?si=-qT_5zeK02S0c9Ub&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Gjett og drikk</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Du velger mellom 2 farger, hvis du gjetter den riktige fargen trenger du ikke å drikke slurker, gjetter du feil må du drikke en pushu. Den riktige fargen er helt tilfeldig.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Litt av hvert</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Dette er en blanding av alle spillene over, der man ikke vet hva som blir det neste spillet.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">slurker</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Spilleren må drikke antallet slurker.</p>
    </div>

    <div class="px-4 mt-6">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Del ut slurker</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Spilleren kan dele ut antallet slurker til en eller flere spillere.</p>
    </div>

    <div class="mb-40"></div>

    <startMenu />

    <div class="text-left fixed inset-x-0 left-6 top-20" style="z-index: 2;">
        <NuxtLink to="/" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            <span class="sr-only">Icon description</span>
        </NuxtLink>
    </div>
</template>

<script setup>
import startMenu from '~/components/startMenu.vue';
import joinedGame from '~/components/joinedGame.vue';

import { useRoute } from 'vue-router'

const route = useRoute()
const felles = computed(() => route.query.felles === 'true')
</script>
