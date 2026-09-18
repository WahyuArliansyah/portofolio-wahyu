// === HAMBURGER & NAV MENU ===
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  // Close menu on click outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });

  // Close menu on link click (mobile)
  navMenu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });
}

// === NAVBAR STICKY / SCROLL BEHAVIOR ===
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  }
  updateActiveNavLink();
});

// === SCROLLSPY (ACTIVE NAV LINK HIGHLIGHT) ===
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#nav-menu a[href^='#']");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("text-primary", "font-semibold");
          link.classList.remove("text-slate-300");
        } else {
          link.classList.remove("text-primary", "font-semibold");
          link.classList.add("text-slate-300");
        }
      });
    }
  });
}

// === PORTFOLIO CATEGORY FILTER ===
function filterProjects(category, btnElement) {
  const projectItems = document.querySelectorAll(".project-card");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Update active button state
  filterButtons.forEach((btn) => {
    btn.classList.remove("bg-primary", "text-white", "shadow-glow");
    btn.classList.add("bg-slate-800/80", "text-slate-300", "hover:bg-slate-700");
  });
  if (btnElement) {
    btnElement.classList.remove("bg-slate-800/80", "text-slate-300", "hover:bg-slate-700");
    btnElement.classList.add("bg-primary", "text-white", "shadow-glow");
  }

  // Filter projects with animation
  projectItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (category === "all" || itemCategory === category) {
      item.style.display = "block";
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      }, 50);
    } else {
      item.style.opacity = "0";
      item.style.transform = "scale(0.95)";
      setTimeout(() => {
        item.style.display = "none";
      }, 200);
    }
  });
}

// === MODAL LOGIC ===
function openImageModal(imageSrc, title, description, tags = "") {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  const modalImage = modal.querySelector("#modalImage");
  const modalTitle = modal.querySelector("#modalTitle");
  const modalDescription = modal.querySelector("#modalDescription");
  const modalTagsContainer = modal.querySelector("#modalTags");

  if (modalImage) modalImage.src = imageSrc;
  if (modalTitle) modalTitle.textContent = title;
  if (modalDescription) modalDescription.textContent = description;

  if (modalTagsContainer && tags) {
    const tagArray = tags.split(",").map(t => t.trim());
    modalTagsContainer.innerHTML = tagArray
      .map(tag => `<span class="bg-primary/20 text-primary border border-primary/30 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`)
      .join("");
  } else if (modalTagsContainer) {
    modalTagsContainer.innerHTML = "";
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Modal event listeners
document.addEventListener("DOMContentLoaded", () => {
  const closeModalButton = document.getElementById("closeModalButton");
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeImageModal);
  }

  const imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("click", function (e) {
      if (e.target === imageModal) {
        closeImageModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("imageModal");
    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeImageModal();
    }
  });
});

// === COPY EMAIL FUNCTIONALITY ===
function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    const copyToast = document.getElementById("copyToast");
    if (copyToast) {
      copyToast.classList.remove("opacity-0", "pointer-events-none");
      copyToast.classList.add("opacity-100");
      setTimeout(() => {
        copyToast.classList.remove("opacity-100");
        copyToast.classList.add("opacity-0", "pointer-events-none");
      }, 2500);
    }
  }).catch(err => {
    console.error("Could not copy email: ", err);
  });
}
