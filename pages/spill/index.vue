<template>
    <div>
        <h1 class="text-3xl text-white text-center mt-10 font-bold">Hvordan spille</h1>
        <p class="stext">Spillet er et drikkespill og går ut på å skjenke spillerne så mye som mulig. Alt er helt tilfeldig så alle har like stor sjangse til å få bra runder som dårlige. Legg til spillere på startsiden og start spill! </p>

    </div>
    <div>
        <h1 class="shead">Gjør eller drikk</h1>
        <p class="stext">Her vil en enkelt spiller få sjangsen til å gjøre eller si noe, hvis ikke må de drikke det tildelte antallet med slurker.</p>
    </div>
    <div>
        <h1 class="shead">Flasketuten</h1>
        <p class="stext">Enkelt å greit, den flasketuten peker på må drikke det tildelte antallet med slurker.</p>
    </div>
    <div>
        <h1 class="shead">Pekeleken</h1>
        <p class="stext">Her skal alle spillerne peke på en den personen i rommet de mener passer best til tittelen tildelt, den spilleren med flest fingre pekt mot seg må ta en .</p>
    </div>
    <div>
        <h1 class="shead">Jeg har aldri</h1>
        <p class="stext">Hvis du har gjort det som kommer opp på skjermen må du ta en slurk, her kan flere spillere måtte ta slurker.</p>
    </div>
    <div>
        <h1 class="shead">Drikk</h1>
        <p class="stext">En spiller blir bedt om å drikke et tilfeldig antall slurker.</p>
    </div>
    <div>
        <h1 class="shead">Litt av hvert</h1>
        <p class="stext">Dette er en blanding av alle spillene over, der man ikke vet hva som blir det neste spillet.</p>
    </div>
    <div>
        <h1 class="shead">Fellesfitta</h1>
        <p class="stext">Spilleren må ta en slurk fra drikken sin hver gang felicita (fellesfitta), sies i sangen. Demonstrasjons video under</p>
        <div class="flex items-center justify-center mt-1">
        <iframe src="https://www.youtube.com/embed/iMRITRuseq4?si=-qT_5zeK02S0c9Ub&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    <div>
        <h1 class="shead">Drikk slurker</h1>
        <p class="stext">Spilleren må drikke antallet slurker fra drikken sin.</p>
    </div>
    <div>
        <h1 class="shead">Del ut slurker</h1>
        <p class="stext">Spilleren kan dele ut antallet slurker til en eller flere spillere.</p>
    </div>
    <div  class="mb-40">
    </div>


    <div class="text-center text-white fixed inset-x-0 bottom-16">
        <p class="text-sm mb-4">Jeg er klar til å spille!</p>
        
        <NuxtLink v-if="!felles" to="/games" class="text-white text-xl rounded bg-blue-500 py-3 px-32">Start spill</NuxtLink>
        <NuxtLink v-if="felles" to="/spill/felles/text2" class="text-white text-xl rounded bg-blue-500 py-3 px-32">Tilbake</NuxtLink>

      </div>


      <div class="text-left fixed inset-x-0 left-6 top-8" style="z-index: 2;">
      <NuxtLink to="/" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </NuxtLink>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const felles = computed(() => route.query.felles === 'true')

</script>