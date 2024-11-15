// Show and hide screens
function showScreen(screenId) {
  hideAllScreens();
  document.getElementById(screenId).style.display = "block";
}

function hideAllScreens() {
  document
    .querySelectorAll(".screen")
    .forEach((screen) => (screen.style.display = "none"));
}

// Login and Logout functionality
function login(event) {
  event.preventDefault();
  const email = event.target[0].value.trim();
  const password = event.target[1].value.trim();

  if (email === "student@school.com" && password === "password") {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    showScreen("home-screen");
    setActiveNav("home");
  } else {
    alert("Invalid email or password.");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  showScreen("login-screen");
  setActiveNav("home");
}

// Initialize the app based on login status
function initializeApp() {
  if (localStorage.getItem("loggedIn")) {
    showScreen("home-screen");
  } else {
    showScreen("welcome-screen");
  }
}

// Navigation bar active state handling
function setActiveNav(iconName) {
  document.querySelectorAll(".navbar a").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`.navbar a[data-icon="${iconName}"]`)
    .classList.add("active");
}

// Event Listeners for Navigation
document.querySelector('.navbar a[data-icon="home"]').onclick = () => {
  showScreen("home-screen");
  setActiveNav("home");
};
document.querySelector('.navbar a[data-icon="classes"]').onclick = () => {
  showScreen("classes-screen");
  setActiveNav("classes");
};
document.querySelector('.navbar a[data-icon="profile"]').onclick = () => {
  showScreen("dashboard-screen");
  setActiveNav("profile");
};
document.querySelector('.navbar a[data-icon="announcements"]').onclick = () => {
  showScreen("announcements-screen");
  setActiveNav("announcements");
};

// Contact form submission
function submitContactForm(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We will get back to you soon.");
  showScreen("home-screen");
}

// Initialize the app on load
window.onload = initializeApp;