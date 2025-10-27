// === HAMBURGER & NAV MENU ===
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Buka/tutup menu saat hamburger di klik
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Tutup menu saat klik di luar area menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Tutup menu saat link navigasi di klik (untuk mobile)
navMenu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// === NAVBAR FIXED (STICKY HEADER) ===
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

// === MODAL LOGIC ===
function openImageModal(imageSrc, title, description) {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  modal.querySelector("#modalImage").src = imageSrc;
  modal.querySelector("#modalTitle").textContent = title;
  modal.querySelector("#modalDescription").textContent = description;

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
  if (event.key === "Escape" && !imageModal.classList.contains("hidden")) {
    closeImageModal();
  }
});
