// Get the toggle buttons and back button
const modeToggle = document.getElementById('mode-toggle');
const backBtn = document.getElementById('backBtn');
const body = document.body;
// Add event listeners for light/dark mode toggle buttons
modeToggle.addEventListener('click', function() {
    this.classList.toggle('dark-mode');
    if(this.classList.toggle('light-mode')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    
} else {
    body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
}
})
 


