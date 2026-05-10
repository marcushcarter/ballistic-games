
// async function loadComponent(selector, path) {
//     const res = await fetch(path);
//     const html = await res.text();
//     document.querySelector(selector).innerHTML = html;
// }

// loadComponent('#footer', '/src/components/footer.html');
// loadComponent('#navbar', '/src/components/navbar.html');

async function loadComponent(selector, path) {
    const res = await fetch(path);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
}

async function init() {
    await loadComponent('#navbar', '/src/components/navbar.html');
    await loadComponent('#footer', '/src/components/footer.html');

    // navbar scroll logic goes here, AFTER it's loaded
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
}

init();