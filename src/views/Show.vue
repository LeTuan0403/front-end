<template>
    <div>
        <h1>Show Word</h1>
        <!-- Display the English word -->
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag"></i>
                English
            </div>
            <input type="text" :value="word.english" readonly/>
        </div>
        <br/>

        <!-- Display the German word -->
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="de flag"></i>
                German
            </div>
            <input type="text" :value="word.german" readonly/>
        </div>
        <br/>

        <!-- Button that links to the Edit page for the current word -->
        <div>
            <router-link :to="{ name: 'Edit', params: { id:this.$route.params.id}}"
                class="ui yellow button">Edit</router-link>
            <!-- Router link that navigates to the Edit page, passing the word's ID as a parameter -->
        </div>
    </div>
</template>

<script>
// Import the API function to fetch word data by ID
import { ViewVocabById } from '@/helpers/api';

export default {
    name: "Show", // Component name is "Show", indicating it displays a word
    data () {
        return {
            word: {
                english: '', 
                german: ''   
            }
        };
    },
    async mounted() {
        // Call the API to get the word details by ID from the URL
        this.word = await ViewVocabById(this.$route.params.id);
        // After fetching the data, update the word object with the fetched values
    }
};
</script>

