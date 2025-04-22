<template>
  <div>
    <h1>Edit Word</h1>
    <!-- Form for editing a vocabulary word -->
    <form @submit.prevent="onSubmit">
      <!-- English input field with label -->
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i>
          English
        </div>
        <input type="text" required v-model="word.english" />
      </div>
      <br />
      <!-- German input field with label -->
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="de flag"></i> 
          German
        </div>
        <input type="text" required v-model="word.german" />
      </div>
      <br />
      <!-- Submit button -->
      <button type="submit" class="ui primary button">Submit</button>
    </form>
  </div>
</template>

<script>
// Import API helper functions for fetching and editing vocabulary
import { ViewVocabById, EditVocab } from '@/helpers/api';

export default {
  name: "Edit", 
  data() {
    return {
      // Object to hold the vocabulary word's data
      word: {
        english: '', 
        german: ''   
      }
    };
  },
  // Lifecycle hook: fetch word data when component is mounted
  async mounted() {
    this.word = await ViewVocabById(this.$route.params.id); // Fetch word by ID
  },
  methods: {
    // Handle form submission for updating the word
    async onSubmit() {
      await EditVocab(this.$route.params.id, this.word); // Send updated word to backend
      alert("Edit word succeed!"); // Show success alert
      this.$router.push("/"); // Redirect back to main word list
    }
  }
};
</script>
