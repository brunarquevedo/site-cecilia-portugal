/* ============================================================================
   Intersection Observer - Scroll entrance animations
   ============================================================================ */

(function () {
  "use strict";

  // Check if IntersectionObserver is supported
  if (!("IntersectionObserver" in window)) {
    console.warn(
      "IntersectionObserver is not supported. Animations will not work."
    );
    return;
  }

  // Get all elements that should animate on scroll
  const revealElements = document.querySelectorAll(
    "[data-reveal], .fade-rise, .fade-in, .scale-up"
  );

  if (revealElements.length === 0) {
    console.log("No elements to animate");
    return;
  }

  // IntersectionObserver options
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: "0px 0px -100px 0px", // Start animation 100px before reaching viewport
  };

  // Callback function
  function onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is visible - add animation class
        entry.target.classList.add("animated");

        // Optionally stop observing (one-time animation)
        observer.unobserve(entry.target);
      }
    });
  }

  // Create observer
  const observer = new IntersectionObserver(onIntersection, observerOptions);

  // Observe all elements
  revealElements.forEach((element) => {
    observer.observe(element);
  });

  console.log("✓ Intersection Observer initialized for", revealElements.length, "elements");
})();
