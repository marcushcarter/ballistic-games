document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
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

const navbarImg = document.querySelector('.navbar__btn img');
const navbarBtns = document.querySelectorAll('.navbar__btn');
const darkSections = document.querySelectorAll('.banner, .footer, .full-width-image');

function updateNavbar() {
    const navbarMid = 60;
    let isDark = false;

    darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarMid && rect.bottom >= navbarMid) {
            isDark = true;
        }
    });

    if (isDark) {
        navbarImg.src = '/public/branding/favicon_white.png';
        navbarBtns.forEach(btn => btn.style.color = '#fff');
    } else {
        navbarImg.src = '/public/branding/favicon_black.png';
        navbarBtns.forEach(btn => btn.style.color = '#000');
    }
}

window.addEventListener('scroll', updateNavbar);
updateNavbar();