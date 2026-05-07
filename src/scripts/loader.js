
async function loadComponent(selector, path) {
    const res = await fetch(path);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
}

loadComponent('#footer', '/src/components/footer.html');
loadComponent('#footer', '/src/components/banner.html');