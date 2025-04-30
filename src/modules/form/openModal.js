const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
