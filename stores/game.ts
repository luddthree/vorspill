// stores/game.ts
import { defineStore } from 'pinia';
import axios from 'axios';

export const useGameStore = defineStore('game', {
  state: () => ({
    questions: [],
    message: '',
    joinCode: '',
  }),
  actions: {
    async createGame(joinCode: string, questions: { text: string; category: number }, turnstileToken: string) {
      try {
          const config = useRuntimeConfig();
          const apiBase = config.public.apiBase;
          const response = await axios.post(`${apiBase}/api/questions/create`, {
              join_code: joinCode,
              questions: questions,
              turnstileToken: turnstileToken,
          });
          this.message = response.data.message;
          this.joinGame(joinCode); 
      } catch (error: any) {
          this.message = error.response?.data?.message || 'Ooops, noe gikk galt!';
          console.error(error.response?.data);
      }
  },
  
    async joinGame(joinCode: string) {
      try {
        // Use runtimeConfig to get the API base URL
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;
        const response = await axios.get(`${apiBase}/api/questions/${joinCode}`);
        this.questions = response.data;
        this.joinCode = joinCode;
        this.message = 'Spillet er oprettet!';

        // Save to localStorage
        if (process.client) {
          localStorage.setItem('joinCode', joinCode);
          localStorage.setItem('questions', JSON.stringify(response.data));
        }
      } catch (error: any) {
        this.message = 'Feil ved tilkobling til spill';
        console.error(error);
      }
    },
    async fetchQuestions(joinCode: string) {
      try {
        // Use runtimeConfig to get the API base URL
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;
        const response = await axios.get(`${apiBase}/api/questions/${joinCode}`);
        this.questions = response.data;
        this.joinCode = joinCode;
        this.message = 'Du er med i spillet!';
        navigateTo('/');

        

        // Save to localStorage
        if (process.client) {
          localStorage.setItem('joinCode', joinCode);
          localStorage.setItem('questions', JSON.stringify(response.data));
        }
      } catch (error: any) {
        this.message = 'Denne "bli med" koden er ugyldig';
        console.error(error);
      }
    },
    loadFromLocalStorage() {
      if (process.client) {
        const storedJoinCode = localStorage.getItem('joinCode');
        const storedQuestions = localStorage.getItem('questions');
        if (storedJoinCode) {
          this.joinCode = storedJoinCode;
        }
        if (storedQuestions) {
          this.questions = JSON.parse(storedQuestions);
        }
      }
    },
    clearGame() {
      this.questions = [];
      this.joinCode = '';
      this.message = '';

      // Clear localStorage
      if (process.client) {
        localStorage.removeItem('joinCode');
        localStorage.removeItem('questions');
      }
    },
  },
});