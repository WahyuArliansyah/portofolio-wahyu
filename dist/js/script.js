// humburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Tutup modal ketika mengklik di luar gambar
document.querySelectorAll('[id^="modal"]').forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal(this.id);
    }
  });
});

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll('[id^="modal"]').forEach((modal) => {
      if (!modal.classList.contains("hidden")) {
        closeModal(modal.id);
      }
    });
  }
});

function openImageModal(imageSrc, title) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");

  modalImage.src = imageSrc;
  modalImage.alt = title;
  modalTitle.textContent = title;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeImageModal();
  }
});
