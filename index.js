const modalElement = document.querySelector(".modal");

function openMenu() {
  modalElement.classList += " menu--open";
}

function closeMenu() {
  modalElement.classList.remove("menu--open");
}