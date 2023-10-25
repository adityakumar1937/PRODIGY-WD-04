document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const bullets = document.querySelectorAll(".bullets");

    // Initialize the current slide index
    let currentSlide = 0;

    // Add click event listeners to the bullets
    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
            // Remove the active class from all bullets
            bullets.forEach((b) => b.classList.remove("active-bullet"));

            // Add the active class to the clicked bullet
            bullet.classList.add("active-bullet");

            // Show the corresponding slide
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Function to show the slide at a specific index
    function showSlide(index) {
        // Hide all slides
        const slides = carousel.querySelectorAll(".item");
        slides.forEach((slide) => (slide.style.display = "none"));

        // Show the slide at the given index
        slides[index].style.display = "block";
    }

    // Initially show the first slide
    showSlide(currentSlide);
});



document.addEventListener('DOMContentLoaded', function () {
    // Get the menu button element
    const menuButton = document.querySelector('.menu-btn');

    // Get the top menu element
    const topMenu = document.querySelector('.top-menu');

    // Add a click event listener to the menu button
    menuButton.addEventListener('click', function () {
        // Toggle the "active" class on the menu button
        menuButton.classList.toggle('active');

        // Toggle the "active" class on the top menu
        topMenu.classList.toggle('active');
    });
});