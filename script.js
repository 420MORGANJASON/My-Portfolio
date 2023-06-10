// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = "New Message from Portfolio Contact Form";
    let body = "Name: " + name + "\nEmail: " + email;

    let mailtoLink = "mailto:420morganjason@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open the email client or show a prompt for email if not supported
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        window.location.href = mailtoLink;
    } else {
        alert("Please send an email to 420morganjason@gmail.com or call +254 745750096");
    }

    // Reset the form fields after submitting
    document.getElementById("contactForm").reset();
});


navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(e.target.hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});


