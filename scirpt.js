// slideshow.js
let slideIndex = 1;
showSlides(slideIndex);

// Manual navigation (dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Previous/Next navigation (arrows)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Show slides
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Loop back to start/end
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
setInterval(() => {
  plusSlides(1);
}, 5000); // Change slide every 5 seconds
