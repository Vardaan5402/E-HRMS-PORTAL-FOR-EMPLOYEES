// ================= NAV MENU =================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ================= SCROLL REVEAL =================
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h2", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".steps__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".explore__card", { duration: 1000, interval: 500 });
ScrollReveal().reveal(".offer__card", { ...scrollRevealOption, interval: 500 });

// ================= SWIPER =================
const swiper = new Swiper(".swiper", { loop: true });

// ================= DOM EVENTS =================
document.addEventListener("DOMContentLoaded", () => {

    // Register button for frontend navigation
    const registerButton = document.querySelector("nav .btn");
    registerButton.addEventListener("click", () => {
        window.location.href = "login.html";
    });

    // Alerts
    document.getElementById("alertSpan").addEventListener("click", () => {
        alert("Hello! To contact us through a call, you need to first register yourself.");
    });

    document.getElementById("viewAllBtn").addEventListener("click", () => {
        alert("To view all the jobs you need to register.");
    });

    document.getElementById("constructionCard").addEventListener("click", () => {
        alert("To browse this please login or register first");
    });

    document.getElementById("adminCard").addEventListener("click", () => {
        alert("You clicked the Admin card 💻");
    });

    document.getElementById("logdelCard").addEventListener("click", () => {
        alert("You must login or register first to browse");
    });

    document.getElementById("automobileCard").addEventListener("click", () => {
        alert("Login or register first to browse");
    });

    document.getElementById("finCard").addEventListener("click", () => {
        alert("Login or register first to browse");
    });

    document.getElementById("marketingCard").addEventListener("click", () => {
        alert("Login or register first to browse");
    });

    document.getElementById("salesCard").addEventListener("click", () => {
        alert("Login or register first to browse");
    });

    document.getElementById("designCard").addEventListener("click", () => {
        alert("Login or register first to browse");
    });
});

// ================= BACKEND CALLS =================

// Register user API call
async function registerUser() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    alert(data.message || "User registered!");
}

// Send data for /api/process endpoint
async function sendData() {
    const name = document.getElementById("name").value;

    const response = await fetch("http://localhost:8000/api/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.result;
}
