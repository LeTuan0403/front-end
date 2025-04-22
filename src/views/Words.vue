<template>
    <div>
        <!-- Search input for vocabulary -->
        <div class="ui input" style="margin-bottom: 1em;"> 
            <input type="text" v-model="searchQuery" placeholder="Search English or German..." />
        </div>

        <!-- Table displaying vocabulary list -->
        <table class="ui celled table">
            <thead>
                <tr>
                    <th colspan="5">WORD LIST</th> 
                </tr>
                <tr>
                    <th>English</th>
                    <th>German</th>
                    <th colspan="3">Menu</th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through filtered words and display them -->
                <tr v-for="(word, i) in filteredWords" :key="i">
                    <td>{{ word.english }}</td>
                    <td>{{ word.german }}</td>
                    <td>
                        <!-- Link to show word details -->
                        <router-link class="ui button green" :to="{ name: 'Show', params: { id: word._id } }">Show</router-link>
                    </td>
                    <td>
                        <!-- Link to edit word -->
                        <router-link class="ui button yellow" :to="{ name: 'Edit', params: { id: word._id } }">Edit</router-link>
                    </td>
                    <td>
                        <!-- Delete word button -->
                        <a class="ui button red" @click.prevent="onDelete(word._id)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// Import API functions
import { ViewALLVocabs, DeleteVocab } from '@/helpers/api.js';
export default {
    name: 'Words', // Component name
    data() {
        return {
            words: [], // Vocabulary list
            searchQuery: '' // Search query string
        };
    },
    computed: {
        // Filter words based on search query
        filteredWords() {
            const query = this.searchQuery.trim().toLowerCase();
            return this.words.filter(word =>
                word.english.toLowerCase().includes(query) ||
                word.german.toLowerCase().includes(query)
            );
        }
    },
    // Fetch vocabulary data when component is mounted
    async mounted() {
        this.words = await ViewALLVocabs();},
    methods: {
        // Handle word deletion
        async onDelete(id) {
            const deleteConfirm = window.confirm("Are you sure to delete this word?");
            if (deleteConfirm) {
                await DeleteVocab(id);
                this.words = this.words.filter(word => word._id !== id);
                this.flash("Delete word succeed!");
            }
        }
    }
};
</script>
