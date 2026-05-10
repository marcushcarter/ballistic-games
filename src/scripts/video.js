const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            setTimeout(() => {
                video.play();
            }, 0);
            videoObserver.unobserve(video);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.lazy-video').forEach(video => videoObserver.observe(video));