<template>
    <joinedGame />
    <div class="mt-24 px-4">
        <h1 class="text-3xl text-white text-center mt-10 font-bold">Hvordan spille</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-4">Spillet er et drikkespill og går ut på å gjøre spillerne så drita som mulig. Alt er helt tilfeldig så alle har like stor sjangse til å få bra runder som dårlige. Legg til spillere på startsiden og start spill! </p>
    </div>

    <!-- Game Descriptions -->
    <div v-for="(game, index) in games" :key="index" class="px-4 mt-6 bg-gray-700 rounded-xl shadow-lg p-4">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">{{ game.title }}</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">{{ game.description }}</p>
    </div>

    <!-- Video Section -->
    <div class="px-4 mt-6 bg-gray-700 rounded-xl shadow-lg p-4">
        <h1 class="text-2xl text-white font-bold sm:text-3xl">Felles</h1>
        <p class="text-gray-200 text-sm sm:text-base md:text-lg text-center mt-2">Spilleren må drikke en slurk hver gang felicita sies i sangen. Demonstrasjons video under</p>
        <div class="flex items-center justify-center mt-4">
            <iframe class="w-full sm:w-1/2 lg:w-1/3 aspect-w-16 aspect-h-9" src="https://www.youtube.com/embed/iMRITRuseq4?si=-qT_5zeK02S0c9Ub&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>

    <div class="mb-40"></div>

    <startMenu />

    <!-- Back Button -->
    <div class="text-left fixed inset-x-0 left-6 top-20" style="z-index: 2;">
        <NuxtLink to="/" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
        </NuxtLink>
    </div>
</template>

<script setup>
import startMenu from '~/components/startMenu.vue';
import joinedGame from '~/components/joinedGame.vue';

import { useRoute } from 'vue-router'

const route = useRoute()
const felles = computed(() => route.query.felles === 'true')

// Game Data for descriptions
const games = [
  {
    title: 'Gjør eller drikk',
    description: 'Her vil en enkelt spiller få sjangsen til å gjøre eller si noe, hvis ikke må de gjøre det tildelte antallet med slurker.'
  },
  {
    title: 'Flasketuten',
    description: 'Enkelt å greit, den flasketuten peker på må gjøre det tildelte antallet med slurker.'
  },
  {
    title: 'Pekeleken',
    description: 'Her skal alle spillerne peke på en den personen i rommet de mener passer best til tittelen tildelt, den spilleren med flest fingre pekt mot seg må drikke en slurk.'
  },
  {
    title: 'Jeg har aldri',
    description: 'Hvis du har gjort det som kommer opp på skjermen må du drikke en slurk, her kan flere spillere måtte drikke slurker.'
  },
  {
    title: 'Slurk',
    description: 'En spiller blir bedt om å drikke et tilfeldig antall slurker.'
  },
  {
    title: 'Gjett og drikk',
    description: 'Du velger mellom 2 farger, hvis du gjetter den riktige fargen trenger du ikke å drikke slurker, gjetter du feil må du drikke en pushu. Den riktige fargen er helt tilfeldig.'
  },
  {
    title: 'Litt av hvert',
    description: 'Dette er en blanding av alle spillene over, der man ikke vet hva som blir det neste spillet.'
  },
  {
    title: 'Del ut slurker',
    description: 'Spilleren kan dele ut antallet slurker til en eller flere spillere.'
  },
  {
    title: 'Lag ditt eget spill',
    description: 'Her kan du lage ditt eget spill med egne spørsmål! Skriv en bli med kode som brukere kan bruke for å bli med i spillet.'
  },
  {
    title: 'Bli med i et spill',
    description: 'Her kan du bli med i et spill ved å skrive inn en bli med kode fra en allerde opprettet spill.'
  }
]
</script>
