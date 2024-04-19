const images = document.querySelectorAll('.slides img');
let slideIndex = 0;
let interval = null;

document.addEventListener('DOMContentLoaded', initialiseSlider);

function initialiseSlider() {
    if (images.length > 0) {
        images[slideIndex].classList.add('displayslide');
        // interval = setInterval(nextSlide, 1000);
    }
}

function showSlide(index) {

    images.forEach(image => {
        image.classList.remove('displayslide')
    })
    images[index].classList.add('displayslide')

}

function prevSlide() {
    clearInterval(interval)
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    } 
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > images.length - 1) {
        slideIndex = 0
    }

    showSlide(slideIndex);
}