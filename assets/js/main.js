const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.getElementById("current-year");
const galleryLinks = document.querySelectorAll("[data-lightbox]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("figcaption");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

if (lightbox && lightboxImage && lightboxCaption && "showModal" in lightbox) {
  let lastTrigger = null;

  galleryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const target = event.currentTarget;
      const image = target.querySelector("img");

      if (!image) {
        return;
      }

      lastTrigger = target;
      lightboxImage.src = target.getAttribute("href") || image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = target.dataset.caption || image.alt;
      lightbox.showModal();
      lightboxClose?.focus();
    });
  });

  const closeLightbox = () => {
    lightbox.close();

    if (lastTrigger instanceof HTMLElement) {
      lastTrigger.focus();
    }
  };

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    const dialogBounds = lightbox.getBoundingClientRect();
    const clickedOutside =
      event.clientX < dialogBounds.left ||
      event.clientX > dialogBounds.right ||
      event.clientY < dialogBounds.top ||
      event.clientY > dialogBounds.bottom;

    if (clickedOutside) {
      closeLightbox();
    }
  });

  lightbox.addEventListener("close", () => {
    lightboxImage.src = "";
    lightboxCaption.textContent = "";
  });
}
