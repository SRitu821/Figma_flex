document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const toggleText = this.textContent;

    if (passwordField.type === "password") {
      passwordField.type = "text";
      this.textContent = "Hide";
    } else {
      passwordField.type = "password";
      this.textContent = "Show";
    }
  });
document.querySelector(".Enroll_btn").addEventListener("click", function () {
  const dropdownContent = document.querySelector(".EnrollBtn_options");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

const onlineIdTag = document.querySelector(".onlineId_tag");
const onlineIdInput = document.getElementById("online_id");

onlineIdTag.addEventListener("click", function () {
  if (
    onlineIdInput.style.display === "none" ||
    onlineIdInput.style.display === ""
  ) {
    onlineIdInput.style.display = "block";
    this.style.fontSize = "12px";
  } else {
    onlineIdInput.style.display = "none";
    this.style.fontSize = "16px";
  }
});

const passwordTag = document.querySelector(".password_tag");
const passwordWrapper = document.querySelector(".password-wrapper");
const passwordInput = document.getElementById("password_id");
const togglePassword = document.getElementById("togglePassword");

passwordTag.addEventListener("click", function () {
  if (
    passwordWrapper.style.display === "none" ||
    passwordWrapper.style.display === ""
  ) {
    passwordWrapper.style.display = "block";
    this.style.fontSize = "12px"; // Reduced by 4px from 16px
  } else {
    passwordWrapper.style.display = "none";
    this.style.fontSize = "16px";
  }
});

passwordInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    togglePassword.style.display = "inline";
  } else {
    togglePassword.style.display = "none";
  }
});

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.textContent = type === "password" ? "Show" : "Hide";
});

document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();

  const logoImg = document.getElementById("logoImg");
  const logoHeading = document.getElementById("logoHeading");
  const sideHead = document.getElementById("sideHead");
  const fullScreenImage = document.getElementById("fullScreenImage");

  const rect = logoImg.getBoundingClientRect();
  const initialX = rect.left + rect.width / 2;
  const initialY = rect.top + rect.height / 2;

  const finalX = window.innerWidth / 2;
  const finalY = window.innerHeight / 2;
  const deltaX = finalX - initialX;
  const deltaY = finalY - initialY;

  logoImg.classList.add("animating");
  logoImg.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(360deg)`;
  logoHeading.classList.add("hide");
  sideHead.classList.add("fade");

  setTimeout(() => {
    fullScreenImage.classList.add("fullscreen");

    setTimeout(() => {
      logoImg.classList.add("fade-out");

      setTimeout(() => {
        logoImg.classList.remove("fade-out");
        logoImg.style.transform = "translate(0, 0) rotate(-360deg)";

        fullScreenImage.classList.remove("fullscreen");

        setTimeout(() => {
          logoImg.classList.remove("animating");
          logoHeading.classList.remove("hide");
          sideHead.classList.remove("fade");
        }, 500);
      }, 1000);
    }, 500);
  }, 1000);
});
