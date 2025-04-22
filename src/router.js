import Vue from 'vue'; 
import Router from 'vue-router'; 
// Import the Vue components corresponding to different views/pages
import Words from './views/Words.vue';   
import New from './views/New.vue';      
import Show from './views/Show.vue';   
import Edit from './views/Edit.vue';     
import Test from './views/Test.vue';     

Vue.use(Router); // Tell Vue to use vue-router plugin

// Export a new Router instance with defined route configuration
export default new Router({
    mode: 'history', 
    routes: [ 
        {
            path: '/', // Default route (homepage)
            name: 'words', // Name of the route
            component: Words // The component to load for this route
        },
        {
            path: '/new', // Route to add a new vocabulary word
            name: 'New',
            component: New
        },
        {
            path: '/test', // Route to the vocabulary test page
            name: 'Test',
            component: Test
        },
        {
            path: '/:id', // Dynamic route to view a word's details by ID (e.g., /123)
            name: 'Show',
            component: Show 
        },
        {
            path: '/:id/edit', // Dynamic route to edit a word by ID (e.g., /123/edit)
            name: 'Edit',
            component: Edit
        },
    ]
});
