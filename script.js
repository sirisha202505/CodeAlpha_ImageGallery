// IMAGE FILTER

function filterImages(category) {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(function(image) {

        if (category === "all" || image.classList.contains(category)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });
}


// LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;


// OPEN IMAGE

galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentIndex = index;

        lightbox.style.display = "flex";

        lightboxImg.src = galleryImages[currentIndex].src;

    });

});


// SHOW IMAGE

function showImage(index) {

    if (index < 0) {
        index = galleryImages.length - 1;
    }

    if (index >= galleryImages.length) {
        index = 0;
    }

    currentIndex = index;

    lightboxImg.src = galleryImages[currentIndex].src;
}


// NEXT IMAGE >

nextBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].src;

});


// PREVIOUS IMAGE <

prevBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    lightboxImg.src = galleryImages[currentIndex].src;

});


// CLOSE X

closeBtn.addEventListener("click", function() {

    lightbox.style.display = "none";

});


// CLOSE OUTSIDE

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


// KEYBOARD

document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextBtn.click();
        }

        if (event.key === "ArrowLeft") {
            prevBtn.click();
        }

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }

    }

});
