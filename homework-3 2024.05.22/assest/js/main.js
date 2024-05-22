
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// intializeSlider()
document.addEventListener("DOMContentLoaded", intializeSlider);

function intializeSlider() {

    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide")
    intervalId = setInterval(nextSlide, 5000)

    }
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0
    }else if(index < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    })

    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide() {
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex)
}


function nextSlide() {
    slideIndex++;
    showSlide(slideIndex)
}