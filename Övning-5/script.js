const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
    openModal(modal);
});

closeModalBtn.addEventListener("click", () => {
    closeModal(modal); 
});

overlay.addEventListener("click", () => {
    closeModal(modal); 
});


function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}


