document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

      // Input values
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      // Message display element
      const messageDiv = document.getElementById("message");
      feedbackDiv.innerHTML = "";
      feedbackDiv.className = "";   //messagesDiv

      // Validation flags
      let isValid = true;
      let messages = [];

      // Username validation
      if (username.length < 3 || !/^[a-zA-Z0-9]+$/.test(username)) {
        messages.push("Username must be at least 3 characters and contain only letters and numbers.");
        isValid = false;
      }

      // Email validation
      const atIndex = email.indexOf("@");
      const dotIndex = email.lastIndexOf(".");
      if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
        messages.push("Please enter a valid email address.");
        isValid = false;
      }

      // Password validation
      const hasNumber = /[0-9]/.test(password);
      if (password.length < 6 || !hasNumber) {
        messages.push("Password must be at least 6 characters long and contain at least one number.");
        isValid = false;
      }

      // Display result
      if (isValid) {
        feedbackDiv.style.color = "#28a745";
        feedbackDiv.className = "success";
        feedbackDiv.textContent = "Registration successful";
      } else {
        feedbackDiv.style.color = "#dc3545";
        feedbackDiv.className = "error";
        feedbackDiv.innerHTML = messages.join("<br>");
      }
    });