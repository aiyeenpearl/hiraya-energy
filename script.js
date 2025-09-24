// Set year
document.getElementById("year").textContent = new Date().getFullYear();

// Modal
function openModal(kind) {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Form handling
document
  .getElementById("waitlistForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    document.getElementById("formMsg").textContent = `Thanks ${
      name || ""
    }! We'll contact ${email} soon. (Demo only)`;
    this.reset();
    setTimeout(closeModal, 2200);
  });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href").slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Sticky transparent-to-blur header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Highlight active nav link (excluding Contact)
const navLinks = document.querySelectorAll("nav ul li a:not(.cta-nav)");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon. (Demo only)");
  this.reset();
});

const header = document.querySelector("header");
const contactSection = document.getElementById("contact-us");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const contactTop = contactSection.offsetTop;
  const contactBottom = contactTop + contactSection.offsetHeight;

  if (scrollY >= contactTop && scrollY < contactBottom) {
    // If user is in the Contact Us section, make header transparent
    header.classList.remove("scrolled");
  } else if (scrollY > 50) {
    // Normal green blur for other sections after scrolling down
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
