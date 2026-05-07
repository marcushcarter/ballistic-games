document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            entry.target.style.animationDelay = delay + 'ms';
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade__up').forEach(el => observer.observe(el));

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});