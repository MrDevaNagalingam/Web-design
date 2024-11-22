document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form fields
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
  
    // Reset error messages
    resetErrors();
  
    // Validation flags
    let isValid = true;
  
    // Username validation
    if (username.value.trim() === "") {
      showError(username, "Username is required");
      isValid = false;
    }
  
    // Email validation
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!validateEmail(email.value.trim())) {
      showError(email, "Invalid email format");
      isValid = false;
    }
  
    // Password validation
    if (password.value.trim() === "") {
      showError(password, "Password is required");
      isValid = false;
    } else if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters");
      isValid = false;
    }
  
    // Confirm Password validation
    if (confirmPassword.value.trim() === "") {
      showError(confirmPassword, "Please confirm your password");
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match");
      isValid = false;
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });
  
  // Function to show error message
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
  
  // Function to reset errors
  function resetErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.style.display = "none"));
  }
  
  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  