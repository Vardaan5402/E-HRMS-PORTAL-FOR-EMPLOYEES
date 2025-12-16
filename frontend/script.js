const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (!form) {
      console.error("loginForm not found — make sure your <form id=\"loginForm\"> exists.");
      return;
    }
  
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent actual form submission / page reload
  
      // basic validation (optional but useful)
      const username = form.querySelector('input[type="text"]')?.value.trim() || "";
      const password = form.querySelector('input[type="password"]')?.value.trim() || "";
      if (!username || !password) {
        alert("Please enter username and password.");
        return;
      }
  
      // redirect to admin.html (must be in same folder or adjust the path)
      window.location.href = "admin.html";
    });
  });
  