document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeBtns = document.querySelectorAll('.close');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Open modals
    loginBtn.onclick = () => loginModal.style.display = "block";
    registerBtn.onclick = () => registerModal.style.display = "block";

    // Close modals
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        }
    });

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }

    // Handle form submissions (you would typically send this data to a server)
    document.getElementById('login-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented here');
    }

    document.getElementById('register-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Registration functionality would be implemented here');
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                role: 'consumer',
                password: document.getElementById('password').value
            })
        })
    }
});