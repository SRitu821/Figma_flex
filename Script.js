document.getElementById("togglePassword").addEventListener("click", function () {
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

script>
  document.querySelector('.Enroll_btn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.EnrollBtn_options');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });