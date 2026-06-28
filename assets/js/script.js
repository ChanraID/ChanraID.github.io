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

const counters1 = document.querySelectorAll(".persen");

counters1.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let current = 0;
    const updateCounter = () => {
        const increment = Math.ceil(target / 100);
        if (current < target) {
            current += increment;
            if (current > target) {
                current = target;
            }
            counter.textContent = current + "%";
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + "%";
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

document.addEventListener("DOMContentLoaded", () => {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("nav a:not(.nav-pmb)");

    links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
    });
});

// ini adalah bagian untuk halaman profil
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
    tabs.forEach(btn =>
        btn.classList.remove("active")
    );
    contents.forEach(content =>
        content.classList.remove("active")
    );
    tab.classList.add("active");
    const target =
        document.getElementById(
        tab.dataset.tab
        );
    target.classList.add("active");
});
});