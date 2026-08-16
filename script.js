// ================================
// IMAGE FILTER
// ================================

function filterImages(category) {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(function(image) {

        if (category === "all") {
            image.style.display = "block";
        }
        else if (image.classList.contains(category)) {
            image.style.display = "block";
        }
        else {
            image.style.display = "none";
        }

    });
}


// ================================
// LIGHTBOX
// ================================

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");


// Open image in lightbox
galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});


// Close lightbox
closeBtn.addEventListener("click", function() {

    lightbox.style.display = "none";

});


// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});
