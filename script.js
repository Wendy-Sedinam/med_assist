// Smooth scrolling for links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button Interaction
document.querySelector('.cta-btn').addEventListener('click', function () {
    alert("Thank you for trying our AI-powered healthcare platform!");
});
document.querySelector('.play-btn').addEventListener('click', function () {
    alert("Playing video...");
});

document.querySelector('.new-user button').addEventListener('click', function () {
    alert("Redirecting to services...");
});