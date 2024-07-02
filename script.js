document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');
    const contactForm = document.getElementById('contact-form');
    const skillTags = document.querySelectorAll('.skill-tag');

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Change header style on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert('Thanks for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });

    // Skill tag interaction
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const skill = this.textContent;
            alert(`You clicked on ${skill}. Here you could show more details about this skill!`);
        });
    });

    // Add fade-in animation to elements as they come into view
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeElems.forEach(elem => observer.observe(elem));
});

document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});