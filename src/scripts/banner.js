const banner = document.querySelector('.sale-banner');
setTimeout(() => {
    banner.style.animation = 'none';
    banner.style.transform = 'translateY(0)';
    banner.offsetHeight;
    banner.style.transition = 'transform 0.6s ease';
    banner.style.transform = 'translateY(-100%)';
}, 5000);