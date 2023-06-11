// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');
const contactForm = document.getElementById("contactForm");
const toggleModeBtn = document.getElementById('toggleModeBtn');
const body = document.body;


function submitContactForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Display alert with contact information
    alert("Call Morgan: +254 745750096 or Email Morgan: 420morganjason@gmail.com");

    // Reset the form fields after submitting
    contactForm.reset();
}


function scrollToSection(e) {
    e.preventDefault();

    const target = document.querySelector(e.target.hash);
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
}

function toggleNightMode() {
    const isNightMode = body.classList.contains('night-mode');

    if (isNightMode) {
        body.classList.remove('night-mode');
        toggleModeBtn.textContent = 'Toggle Dark Mode';
    } else {
        body.classList.add('night-mode');
        toggleModeBtn.textContent = 'Toggle Light Mode';
    }
}

contactForm.addEventListener("submit", submitContactForm);
navLinks.forEach(link => link.addEventListener('click', scrollToSection));
toggleModeBtn.addEventListener('click', toggleNightMode);
