/* ============================================================================
   Main JavaScript - Global functionality
   ============================================================================ */

(function () {
  "use strict";

  /* ========================================================================
     MOBILE MENU TOGGLE
     ======================================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuClose = document.querySelector(".menu-close");
  const body = document.body;

  if (menuToggle && mobileMenu) {
    // Open menu
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isOpen);
      mobileMenu.setAttribute("aria-hidden", isOpen);

      if (!isOpen) {
        body.classList.add("menu-open");
        // Trap focus in mobile menu
        trapFocus(mobileMenu);
      } else {
        body.classList.remove("menu-open");
      }
    });

    // Close menu via close button
    if (menuClose) {
      menuClose.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        body.classList.remove("menu-open");
        menuToggle.focus();
      });
    }

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        body.classList.remove("menu-open");
      });
    });

    // Close menu on Escape
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        menuToggle.getAttribute("aria-expanded") === "true"
      ) {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        body.classList.remove("menu-open");
        menuToggle.focus();
      }
    });
  }

  /* ========================================================================
     HEADER SCROLL EFFECT
     ======================================================================== */

  const header = document.querySelector("header");
  let lastScrollY = 0;
  const scrollThreshold = 24; // 24px scroll before header changes

  if (header && header.classList.contains("hero-header")) {
    window.addEventListener("scroll", debounce(handleScroll, 10));

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        if (!header.classList.contains("scrolled")) {
          header.classList.add("scrolled");
        }
      } else {
        if (header.classList.contains("scrolled")) {
          header.classList.remove("scrolled");
        }
      }

      lastScrollY = currentScrollY;
    }
  }

  /* ========================================================================
     UTILITY: Focus Trap
     ======================================================================== */

  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a, button, input, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement) return;

    firstElement.focus();

    element.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab on first element -> focus last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab on last element -> focus first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }

  /* ========================================================================
     UTILITY: Debounce
     ======================================================================== */

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /* ========================================================================
     SMOOTH SCROLL for anchor links
     ======================================================================== */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if href is just "#"
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  /* ========================================================================
     INITIALIZE
     ======================================================================== */

  console.log("✓ Main.js initialized");
})();
