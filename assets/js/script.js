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

window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (!hash) return;
    const targetId = hash.substring(1);
    const targetButton = document.querySelector(
        `.tab-btn[data-tab="${targetId}"]`
    );
    const targetContent = document.getElementById(targetId);
    if (targetButton && targetContent) {
        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));
        targetButton.classList.add("active");
        targetContent.classList.add("active");
        targetContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

// Hamburger Menu JavaScript
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    });

  // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
    });

  // Close menu when clicking outside
    document.addEventListener("click", (e) => {
    if (!e.target.closest("header")) {
        hamburgerBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
        }
    });
}

// ===== CONTACT FORM HANDLER =====
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
    // Form Validation
    const validateForm = () => {
        let isValid = true;
        const inputs = {
            nama: document.getElementById("nama"),
            email: document.getElementById("email"),
            telepon: document.getElementById("telepon"),
            keperluan: document.getElementById("keperluan"),
            pesan: document.getElementById("pesan")
        };

      // Reset all errors
        Object.values(inputs).forEach(input => {
            input?.classList.remove("error");
            const errorEl = document.getElementById(input?.id + "Error");
            if (errorEl) errorEl.textContent = "";
        });

      // Validate Nama
        if (!inputs.nama.value.trim()) {
            inputs.nama.classList.add("error");
            document.getElementById("namaError").textContent = "Nama lengkap tidak boleh kosong";
            isValid = false;
        } else if (inputs.nama.value.trim().length < 3) {
            inputs.nama.classList.add("error");
            document.getElementById("namaError").textContent = "Nama minimal 3 karakter";
            isValid = false;
        }

      // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputs.email.value.trim()) {
            inputs.email.classList.add("error");
            document.getElementById("emailError").textContent = "Email tidak boleh kosong";
            isValid = false;
        } else if (!emailRegex.test(inputs.email.value)) {
            inputs.email.classList.add("error");
            document.getElementById("emailError").textContent = "Format email tidak valid";
            isValid = false;
        }

      // Validate Telepon
        if (!inputs.telepon.value.trim()) {
            inputs.telepon.classList.add("error");
            document.getElementById("teleponError").textContent = "Nomor telepon tidak boleh kosong";
            isValid = false;
        } else if (!/^(\+62|0)[0-9]{9,12}$/.test(inputs.telepon.value.replace(/[-\s]/g, ""))) {
            inputs.telepon.classList.add("error");
            document.getElementById("teleponError").textContent = "Format nomor telepon tidak valid";
            isValid = false;
        }

      // Validate Keperluan
        if (!inputs.keperluan.value) {
            inputs.keperluan.classList.add("error");
            document.getElementById("keperluanError").textContent = "Pilih keperluan Anda";
            isValid = false;
        }

        // Validate Pesan
        if (!inputs.pesan.value.trim()) {
            inputs.pesan.classList.add("error");
            document.getElementById("pesanError").textContent = "Pesan tidak boleh kosong";
            isValid = false;
        } else if (inputs.pesan.value.trim().length < 10) {
            inputs.pesan.classList.add("error");
            document.getElementById("pesanError").textContent = "Pesan minimal 10 karakter";
            isValid = false;
        }

        return isValid;
    };

    // Form Submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateForm()) {
        showMessage("Mohon isi semua field dengan benar", "error");
        return;
        }

        const submitBtn = document.getElementById("submitBtn");
        const originalText = submitBtn.textContent;
        
      // Show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        submitBtn.textContent = "Mengirim...";

      // Submit form to Formspree
        fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
            "Accept": "application/json"
        }
        })
        .then(response => {
        if (response.ok) {
            showMessage("✓ Pesan berhasil dikirim! Kami akan segera merespon Anda.", "success");
            contactForm.reset();
            contactForm.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
            contactForm.querySelectorAll(".form-error").forEach(el => el.textContent = "");
        } else {
            showMessage("Terjadi kesalahan. Silakan coba lagi.", "error");
        }
        })
        .catch(error => {
        console.error("Form submission error:", error);
        showMessage("Terjadi kesalahan jaringan. Silakan coba lagi.", "error");
        })
        .finally(() => {
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        submitBtn.textContent = originalText;
        });
    });

    // Helper function to show messages
    function showMessage(text, type) {
        const messageEl = document.getElementById("formMessage");
        const messageText = document.getElementById("formMessageText");
        
        messageEl.className = `form-message ${type}`;
        messageText.textContent = text;
        messageEl.style.display = "flex";

      // Auto hide success message after 5 seconds
        if (type === "success") {
        setTimeout(() => {
            messageEl.style.display = "none";
        }, 5000);
        }

      // Scroll to message
        messageEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Real-time validation on blur
    const inputs = ["nama", "email", "telepon", "keperluan", "pesan"];
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
        input.addEventListener("blur", () => {
            validateForm();
        });
        }
    });
    }
});