const button = document.querySelector('.header__btn-style');
const modal = document.querySelector('.modal__block');
const close = document.querySelector('.button__close_modal');

button.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
})

function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

close.addEventListener("click", closeModal)

modal.addEventListener("click", (event) => {
    if (event.target===modal) {
        closeModal();
    }
});
