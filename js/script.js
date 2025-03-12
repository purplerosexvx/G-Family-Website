// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none"; // Hide the button
    }
};