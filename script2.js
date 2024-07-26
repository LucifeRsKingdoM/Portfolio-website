window.addEventListener('scroll', function() {
    // Show fixed links container from the second page onward
    if (window.scrollY > window.innerHeight) {
        document.getElementById('fixedLinks').style.display = 'flex';
    } else {
        document.getElementById('fixedLinks').style.display = 'none';
    }
});

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
container.classList.remove("active");
});
var typed = new Typed('#element', {
        strings: ['Web Developer', 'Data Analyst.. .', 'Software Developer.'],
        typeSpeed: 60,
        loop : true
});

document.addEventListener('DOMContentLoaded', function() {
const skillIcons = document.querySelectorAll('.skill-icon');
const progress = document.querySelector('.progress');
const percentText = document.querySelector('.percent');

skillIcons.forEach(icon => {
icon.addEventListener('mouseover', function() {
  const percent = this.getAttribute('data-percent');
  progress.style.width = percent + '%';
  percentText.textContent = percent + '%'; // Update text content
});

icon.addEventListener('mouseout', function() {
  progress.style.width = '0'; // Reset to 0% on mouse out
  percentText.textContent = '0%'; // Reset text content
});
});
});

document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Check for valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes
    alert('Submitted successfully. I will reach you as soon as possible.');

    // Redirect to the home page after submission
    setTimeout(() => {
        window.location.href = '/'; // Change this to the correct URL if needed
    }, 2000); // Delay for alert message display
});
});

(function(){
        emailjs.init("ck0hO4TFVICbAQW4X"); // Use your actual public key
    })();

    function sendEmail(e) {
        e.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('service_qjavn8k', 'template_iawlrxq', this) // Replace with your actual template ID
            .then(function() {
                alert('Message sent successfully! I will reach you as soon as possible.');
                window.location.href = 'index.html'; // Redirect to home page
            }, function(error) {
                alert('Failed to send message. Error: ' + JSON.stringify(error));
            });
    }

    document.getElementById('contact-form').addEventListener('submit', sendEmail);