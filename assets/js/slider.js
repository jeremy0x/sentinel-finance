/* Setting the default slide start index: */
let slideIndex = 1;
/* We call the function that is implemented below: */
showSlides(slideIndex);
/* Increase the index by 1 - show the next slide: */
function nextSlide() {
  showSlides((slideIndex += 1));
}
/* Decrease the index by 1 - show the previous slide: */
function previousSlide() {
  showSlides((slideIndex -= 1));
}
/* Set the current slide: */
function currentSlide(n) {
  showSlides((slideIndex = n));
}
/* Flip function: */
function showSlides(n) {
  let i;
  /* We refer to the elements with the class name "item", that is, to the pictures: */
  let slides = document.getElementsByClassName("slider-item");

  /* Checking the number of slides: */
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* Loop through each slide in a for loop: */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  /* Making an element block: */
  slides[slideIndex - 1].style.display = "block";
}
