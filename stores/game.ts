import { defineStore } from 'pinia';
import axios from 'axios';

export const useGameStore = defineStore('game', {
  state: () => ({
    questions: [],
    message: '',
  }),

  actions: {
    async createGame(joinCode: string, questions: { text: string; category: string }[]) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/questions/create', {
          join_code: joinCode,
          questions: questions
        });

        this.message = response.data.message;
      } catch (error: any) {
        this.message = error.response?.data?.message || 'Error creating game';
        console.error(error.response?.data);
      }
    },

    async fetchQuestions(joinCode: string) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/questions/${joinCode}`);
        this.questions = response.data;
      } catch (error: any) {
        this.message = 'Error fetching questions';
        console.error(error);
      }
    }
  }
});
