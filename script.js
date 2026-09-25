document.addEventListener("DOMContentLoaded", () => {
  // Close the mobile navigation after selecting a section.
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.querySelector("#nav");
      if (menu && menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Small reveal animation for timeline cards.
  const cards = document.querySelectorAll(".timeline-card, .treatment-card, .image-story");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
    
  }, { threshold: 0.12 });

  cards.forEach(card => observer.observe(card));

  // Add a subtle active-state to the current navigation section.
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-25% 0px -65% 0px" });

  sections.forEach(section => sectionObserver.observe(section));
});
