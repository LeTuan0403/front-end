<template>
  <div class="ui container">
    <h2 class="ui header">Vocabulary Test</h2>
    <!-- Display when the quiz is finished -->
    <div v-if="quizEnded" class="ui segment">
      <h3>Your final score: {{ score }} / {{ totalQuestions }}</h3>
      <button class="ui button primary" @click="restartQuiz">Restart Quiz</button>
    </div>
     <!-- Display when a question is active -->
    <div v-else-if="currentWord" class="ui segment">
      <p><strong>Question {{ questionNumber }} of {{ totalQuestions }}</strong></p>
      <p><strong>Translate this word:</strong></p>
      <!-- Show either German or English word based on `showGerman` -->
      <h3>{{ showWord ? currentWord.german : currentWord.english }}</h3>
      <!-- Answer input form -->
      <form class="ui form" @submit.prevent="checkAnswer">
        <div class="field">
          <input
            type="text"
            v-model="userAnswer"
            placeholder="Enter translation..."
            autocomplete="off"
            :disabled="answered"  
          />
        <!-- Disable input after answering -->
        </div>
        <button class="ui primary button" type="submit" :disabled="answered">Check</button>
      </form>
      <!-- Feedback for answer -->
      <div v-if="feedback" :class="['ui message', isCorrect ? 'positive' : 'negative']">
        {{ feedback }}
      </div>
      <!-- Current score -->
      <div class="ui divider"></div>
      <p><strong>Score:</strong> {{ score }}</p>
    </div>
  </div>
</template>

<script>
import { ViewALLVocabs } from '@/helpers/api'; // Import API to get all vocab

export default {
  name: 'Test',
  data() {
    return {
      words: [],              // List of all vocabulary words
      currentWord: null,      // Word currently being asked
      showWord: true,         // If true, show German(English) word and expect English(German) input
      userAnswer: '',         // User's answer input
      score: 0,               // Current score
      feedback: '',           // Feedback message
      isCorrect: false,       // Whether the last answer was correct
      questionNumber: 1,      // Current question number
      totalQuestions: 5,      // Total number of quiz questions
      quizEnded: false,       // Whether the quiz has ended
      answered: false         // If current question is already answered
    };
  },

  // Load vocabulary when the component mounts
  async mounted() {
    this.words = await ViewALLVocabs();
    this.pickRandomWord();
  },

  methods: {
    // Pick a random word from the list
    pickRandomWord() {
      const randomIndex = Math.floor(Math.random() * this.words.length);
      this.currentWord = this.words[randomIndex];
      this.userAnswer = '';
      this.feedback = '';
      this.isCorrect = false;
      this.answered = false;
      this.showWord = Math.random() < 0.5;
    },

    // Check the user's answer
    checkAnswer() {
      if (!this.currentWord || this.answered) return;

      const correctAnswer = (this.showWord ? this.currentWord.english : this.currentWord.german)
        .trim()
        .toLowerCase();
      const userInput = this.userAnswer.trim().toLowerCase();

      this.answered = true;

      if (userInput === correctAnswer) {
        this.score++;
        this.feedback = 'Correct! 🎉';
        this.isCorrect = true;
      } else {
        this.feedback = `Incorrect. Correct answer is: "${correctAnswer}"`;
        this.isCorrect = false;
      }

      // After 1 second, move to the next question or end the quiz
      setTimeout(() => {
        if (this.questionNumber >= this.totalQuestions) {
          this.quizEnded = true;
        } else {
          this.questionNumber++;
          this.pickRandomWord();
        }
      }, 1000);
    },

    // Reset quiz to start again
    restartQuiz() {
      this.score = 0;
      this.questionNumber = 1;
      this.quizEnded = false;
      this.pickRandomWord();
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
}
</style>
