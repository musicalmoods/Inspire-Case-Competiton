const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function updateSun() {
    const scrollY = window.scrollY;
    const maxScroll = 2 * window.innerHeight;
    const scrollPercentage = Math.min(scrollY / maxScroll, 1);
    const sun = document.getElementById('sun');
    const sky = document.getElementById('sky');
    const sunR = 214;
    const sunG = 158;
    const sunB = 45;
    sun.style.backgroundColor = `rgb(${sunR}, ${sunG}, ${sunB})`;
    const skyR = Math.round(214 - scrollPercentage * (214 - 113));
    const skyG = Math.round(158 - scrollPercentage * (158 - 139));
    const skyB = Math.round(45 + scrollPercentage * (174 - 45));
    sky.style.backgroundColor = `rgb(${skyR}, ${skyG}, ${skyB})`;
    if (window.innerWidth < 900) {
        const maxSize = Math.min(window.innerWidth, window.innerHeight);
        const minSize = 50;
        const size = maxSize - scrollPercentage * (maxSize - minSize);
        sun.style.width = `${size}px`;
        sun.style.height = `${size}px`;
        const shadowBlur = Math.round(scrollPercentage * 50);
        const shadowSpread = Math.round(scrollPercentage * 20);
        const yellowGlowOpacity = 1 - scrollPercentage;
        const whiteGlowOpacity = scrollPercentage;
        sun.style.boxShadow = `
            0 0 ${shadowBlur}px ${shadowSpread}px rgba(255, 255, 0, ${yellowGlowOpacity}),
            0 0 ${shadowBlur}px ${shadowSpread}px rgba(255, 255, 255, ${whiteGlowOpacity})
        `;
        if (scrollPercentage > 0.1) {
            sun.style.top = `calc(1%)`;
            sun.style.left = `calc(1%)`;
            sun.style.transform = 'translate(-2%, -2%)';
        } else {
            sun.style.top = '50%';
            sun.style.left = '50%';
            sun.style.transform = 'translate(-50%, -50%)';
        }
    } else {
        const maxSize = Math.min(window.innerWidth, window.innerHeight);
        const minSize = 100;
        const size = maxSize - scrollPercentage * (maxSize - minSize);
        sun.style.width = `${size}px`;
        sun.style.height = `${size}px`;
        const shadowBlur = Math.round(scrollPercentage * 50);
        const shadowSpread = Math.round(scrollPercentage * 20);
        const yellowGlowOpacity = 1 - scrollPercentage;
        const whiteGlowOpacity = scrollPercentage;
        sun.style.boxShadow = `
            0 0 ${shadowBlur}px ${shadowSpread}px rgba(255, 255, 0, ${yellowGlowOpacity}),
            0 0 ${shadowBlur}px ${shadowSpread}px rgba(255, 255, 255, ${whiteGlowOpacity})
        `;
        const sunTop = 50 - scrollPercentage * 50;
        const sunLeft = 50 - scrollPercentage * 50;
        sun.style.top = scrollPercentage > 0.1 ? `calc(${sunTop}% + 80px)` : '50%';
        sun.style.left = scrollPercentage > 0.1 ? `calc(${sunLeft}% + 80px)` : '50%';
        sun.style.transform = 'translate(-50%, -50%)';
    }
}

window.addEventListener('scroll', updateSun);
window.addEventListener('resize', updateSun);
updateSun();
