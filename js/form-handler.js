/* ============================================================================
   Form Handler - Contact form validation and submission
   ============================================================================ */

(function () {
  "use strict";

  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    console.log("No contact form found");
    return;
  }

  const nameInput = form.querySelector("[name='nome']");
  const emailInput = form.querySelector("[name='email']");
  const messageInput = form.querySelector("[name='mensagem']");
  const submitBtn = form.querySelector("button[type='submit']");
  const successMessage = form.querySelector(".form-success");

  /* ========================================================================
     VALIDATION
     ======================================================================== */

  const validators = {
    nome: (value) => {
      if (!value.trim()) {
        return "Nome é obrigatório";
      }
      if (value.trim().length < 2) {
        return "Nome deve ter pelo menos 2 caracteres";
      }
      return null;
    },

    email: (value) => {
      if (!value.trim()) {
        return "E-mail é obrigatório";
      }
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "E-mail inválido";
      }
      return null;
    },

    mensagem: (value) => {
      if (!value.trim()) {
        return "Mensagem é obrigatória";
      }
      if (value.trim().length < 10) {
        return "Mensagem deve ter pelo menos 10 caracteres";
      }
      return null;
    },
  };

  /* ========================================================================
     SHOW / CLEAR ERROR
     ======================================================================== */

  function showError(input, message) {
    const group = input.closest(".form-group");
    if (!group) return;

    group.classList.add("error");

    // Remove any existing error message
    const existingError = group.querySelector(".form-error");
    if (existingError) {
      existingError.remove();
    }

    // Create and append new error
    const errorEl = document.createElement("div");
    errorEl.className = "form-error";
    errorEl.textContent = message;
    errorEl.setAttribute("aria-live", "polite");
    input.after(errorEl);
  }

  function clearError(input) {
    const group = input.closest(".form-group");
    if (!group) return;

    group.classList.remove("error");

    const errorEl = group.querySelector(".form-error");
    if (errorEl) {
      errorEl.remove();
    }
  }

  /* ========================================================================
     VALIDATE FIELD
     ======================================================================== */

  function validateField(input) {
    const fieldName = input.name;
    const validator = validators[fieldName];

    if (!validator) return true;

    const error = validator(input.value);

    if (error) {
      showError(input, error);
      return false;
    } else {
      clearError(input);
      return true;
    }
  }

  /* ========================================================================
     REAL-TIME VALIDATION (on blur)
     ======================================================================== */

  [nameInput, emailInput, messageInput].forEach((input) => {
    if (input) {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      // Also validate on input change to clear errors
      input.addEventListener("input", function () {
        if (this.closest(".form-group").classList.contains("error")) {
          validateField(this);
        }
      });
    }
  });

  /* ========================================================================
     FORM SUBMISSION
     ======================================================================== */

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (input && !validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    // Show loading state
    form.classList.add("form-loading");
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    // Prepare form data
    const formData = new FormData(form);

    // Send to server (PHP endpoint)
    fetch("/api/contact.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          // Show success message
          successMessage.classList.add("show");
          successMessage.setAttribute("role", "alert");

          // Reset form
          form.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.classList.remove("show");
          }, 5000);
        } else {
          // Show error from server
          alert(data.message || "Erro ao enviar mensagem. Tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Erro ao enviar mensagem. Por favor, tente novamente.");
      })
      .finally(() => {
        // Reset loading state
        form.classList.remove("form-loading");
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar mensagem";
      });
  });

  console.log("✓ Form handler initialized");
})();
