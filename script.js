
//Carousel
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot")
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
    intervalId = setInterval(nextSlide, 5000);
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(intervalId);
            showSlide(index);
        }
        )
    })
});

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    currentSlide = index;

    slides.forEach(slide =>
        slide.classList.remove("displaySlide")
    );
    slides[currentSlide].classList.add("displaySlide");

    dots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add("dotActive");
        } else {
            dot.classList.remove("dotActive");
        }
    })
}

function prevSlide() {
    clearInterval(intervalId);
    showSlide(currentSlide - 1);
}

function nextSlide() {
    clearInterval(intervalId);
    showSlide(currentSlide + 1);
}

//Teacher's Gallery
const gallerySlide = document.querySelectorAll(".gallery-slide");
let galleryIndex = 0;
let galleryIntervalID = 0;