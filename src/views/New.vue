<template>
  <div>
    <h1>Add new Word</h1> 
    <!-- Header that indicates the purpose of the page -->
    <form @submit.prevent="createOrUpdate"> 
      <!-- Form that prevents default submission behavior and triggers the createOrUpdate method -->
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i>
          English
        </div>
        <input type="text" required v-model="word.english" />
        <!-- Input field for the English word -->
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="de flag"></i>
          German
        </div>
        <input type="text" required v-model="word.german" />
        <!-- Input field for the German word -->
      </div>
      <br />
      <button type="submit" class="ui primary button">Submit</button>
      <!-- Submit button to submit the form and trigger the createOrUpdate method -->
    </form>
  </div>
</template>

<script>
// Importing the AddNewVocab function from the API helper file 
import { AddNewVocab } from "../helpers/api"; 

export default {
name: "New", // Setting the component name 
data() {
  return {
    word: {
      english: '', // Stores the English word input by the user
      german: ''   // Stores the German word input by the user
    }
  };
},
methods: {
  // Method to handle form submission for creating a new vocabulary
  createOrUpdate: async function () {
    const response = await AddNewVocab(this.word); 
    // Calls the AddNewVocab function and passes the word object to the backend for creation

    alert("Word created successfully!"); 
    // Alerts the user upon successful word creation

    this.$router.push("/"); 
    // Redirects the user to the homepage or the main page after successfully creating the word
  }
}
};
</script>
