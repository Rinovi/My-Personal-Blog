const form = document.getElementById('blogForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please complete all required fields.');
    } else {
        // Retrieve existing blog posts from localStorage or initialize an empty array
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Create an object with the new blog post data
        let blogPost = {
            username: username,
            title: title,
            content: content
            
        };

        // Add the new blog post to the array
        blogPosts.push(blogPost);

        // Store the updated blog posts array in localStorage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Redirect the user to the posts page
        window.location.href = 'blog.html';
    }
});

