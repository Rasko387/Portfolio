const carousel = document.getElementById('carousel');

let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 220; // largeur d'une carte

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`;
}

// défile toutes les 2 secondes
setInterval(autoScroll, 2000);
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('flex');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}