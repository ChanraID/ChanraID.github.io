window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let current = 0;
    const updateCounter = () => {
        const increment = Math.ceil(target / 100);
        if (current < target) {
            current += increment;
            if (current > target) {
                current = target;
            }
            counter.textContent = current + "+";
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + "+";
        }
    };
    updateCounter();
});

window.addEventListener("load", () => {
    document
        .querySelector(".fade-left")
        ?.classList.add("show");
    document
        .querySelector(".fade-right")
        ?.classList.add("show");
});