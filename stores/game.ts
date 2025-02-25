import { defineStore } from 'pinia';
import axios from 'axios';

export const useGameStore = defineStore('game', {
  state: () => ({
    questions: [],
    message: '',
  }),

  actions: {
    async createGame(joinCode: string, questions: { text: string; category: number }[]) {
      try {
        // Use runtimeConfig to get the API base URL
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;

        const response = await axios.post(`${apiBase}/questions/create`, {
          join_code: joinCode,
          questions: questions,
        });

        this.message = response.data.message;
      } catch (error: any) {
        this.message = error.response?.data?.message || 'Error creating game';
        console.error(error.response?.data);
      }
    },

    async fetchQuestions(joinCode: string) {
      try {
        // Use runtimeConfig to get the API base URL
        const config = useRuntimeConfig();
        const apiBase = config.public.apiBase;

        const response = await axios.get(`${apiBase}/questions/${joinCode}`);
        this.questions = response.data;
      } catch (error: any) {
        this.message = 'Error fetching questions';
        console.error(error);
      }
    },
  },
});