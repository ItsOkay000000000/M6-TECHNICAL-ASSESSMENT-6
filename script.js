document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.style.display = "none";
  form.appendChild(successMessage);

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      e.preventDefault(); // Stop only if invalid
      showError("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      e.preventDefault();
      showError("Please enter a valid email address.");
      return;
    }

    // If valid, allow form to submit naturally (FormSubmit will send the email)
    successMessage.innerText = "Sending...";
    successMessage.style.display = "block";
    successMessage.style.backgroundColor = "#007bff";
    successMessage.style.color = "#fff";
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showError(msg) {
    successMessage.innerText = msg;
    successMessage.style.backgroundColor = "#dc3545";
    successMessage.style.color = "#fff";
    successMessage.style.display = "block";
  }
});

