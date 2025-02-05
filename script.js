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

document.addEventListener("DOMContentLoaded", function () {
    // Sign-up button functionality
    const signUpButton = document.querySelector(".sign-up");
    if (signUpButton) {
        signUpButton.addEventListener("click", function () {
            alert("Sign-up functionality coming soon!");
        });
    }


    // Hover effect for session summary box
    const summaryBox = document.querySelector(".session-summary");
    summaryBox.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "#b3e5fc"; // Light blue effect
    });

    summaryBox.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "#e3f2fd"; // Original color
    });

    // New User Button Click Effect
    const newUserButton = document.querySelector(".new-user button");
    newUserButton.addEventListener("click", function () {
        this.innerText = "Loading...";
        setTimeout(() => {
            this.innerText = "Services";
        }, 2000);
    });
});
