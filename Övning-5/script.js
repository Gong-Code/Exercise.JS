const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-btn");
const overlay = document.querySelector("#overlay");

openModalBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    openModal(modal);
});

closeModalBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
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


