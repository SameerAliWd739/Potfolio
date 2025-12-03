// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    if (mobileMenu.style.maxHeight) {
    mobileMenu.style.maxHeight = null;
    } else {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    }
});

// Close mobile menu on link click
document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
    mobileMenu.style.maxHeight = null;
    });
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
    scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
    }
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fake form submit (frontend only)
const sendBtn = document.getElementById("send-btn");
const formStatus = document.getElementById("form-status");
sendBtn.addEventListener("click", () => {
    formStatus.textContent = "This is a demo form. Connect it with backend (EmailJS, Formspree, or Django) to make it work.";
});


// design-proejct


const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const captions = [
      "SaaS Dashboard UI · Analytics widgets and navigation layout.",
      "Developer Portfolio · Hero, case studies, and contact sections.",
      "Food Delivery App · Category filters and checkout flow."
    ];
    const captionEl = document.getElementById('figma-caption');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-slate-300', i === index);
        dot.classList.toggle('bg-slate-600', i !== index);
      });
      captionEl.textContent = captions[index];
      currentIndex = index;
    }

    document.getElementById('next-btn').addEventListener('click', () => {
      const next = (currentIndex + 1) % slides.length;
      showSlide(next);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
      const prev = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prev);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
    });

    // Auto-slide every 6 seconds (optional)
    setInterval(() => {
      const next = (currentIndex + 1) % slides.length;
      showSlide(next);
    }, 6000);