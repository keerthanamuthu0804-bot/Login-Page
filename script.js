const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

// Show/Hide password
togglePassword.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "Show" : "Hide";
});

// Login button click
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login Successful! "); 
  document.getElementById("email").value = "";
  password.value = "";
});
