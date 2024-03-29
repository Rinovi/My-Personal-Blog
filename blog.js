// // Add event listener for the back button
backBtn.addEventListener('click', function () {
    window.location.href = 'index.html'; // Redirect to the landing page
});

// Retrieve blog post data from localStorage
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Get the main element where blog posts will be displayed
const mainElement = document.querySelector('main');

// Function to display blog posts
function displayBlogPosts() {
    mainElement.innerHTML = ''; // Clear existing content

    // Loop through each blog post and create HTML elements to display them
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `By: ${post.username}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(authorElement);
        postElement.appendChild(contentElement);
        mainElement.appendChild(postElement);
        // Check the current theme mode and apply corresponding styles
        if (document.body.classList.contains('dark-mode')) {
            postElement.classList.add('dark-mode'); // Add dark mode class
        } else {
            postElement.classList.add('light-mode'); // Add light mode class
        }
    });
}
// Call the displayBlogPosts function to initially display blog posts
displayBlogPosts();

// Event delegation to handle click on individual blog posts
mainElement.addEventListener('click', function (event) {
    if (event.target.classList.contains('blog-post')) {
        const selectedPostIndex = Array.from(mainElement.children).indexOf(event.target);
        const selectedPost = blogPosts[selectedPostIndex];
        displayBlogPostDetails(selectedPost);
    }
});
