// Create a new Vue.js application
const app = Vue.createApp({
    data() {
        // Data properties store the application's state
        return {
            pageTitle: 'HI! JUNNIE IS COMING', // Initialize the page title
            comments: [
                'This is the first comment.',
                'Here is another comment.',
                'Feel free to add more comments!',
            ], // Initialize an array to store comments
            newComment: '', // Initialize an empty string for the new comment
        };
    },
    methods: {
        // Methods define functions that can be called in your app
        navigate(page) {
            // Function for navigating between pages
            if (page === 'home') {
                this.pageTitle = 'Home'; // Set the page title to 'Home'
            } 
            else if (page === 'about') {
                this.pageTitle = 'This page is all about me!!!'; 
            }

        },
        addComment() {
            // Function for adding a new comment
            if (this.newComment.trim() !== '') {
                // Check if the new comment is not empty (no whitespace)
                this.comments.push(this.newComment); // Add the new comment to the comments array
                this.newComment = ''; // Clear the text area after adding the comment
            }
        },
    },
});

// Mount the Vue application to an HTML element with the id 'app'
app.mount('#app')