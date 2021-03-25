//HEADER COLLAPSIBLE CONTENT
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//IMG GALLERY - slideshow ------------- https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery-slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  

  }
  slides[slideIndex-1].style.display = "block";  
}
/*const gallerySlide = document.querySelector('.gallery-slide');
const galleryImgs = document.querySelectorAll('.gallery-slide img');

//buttons
const prevBtn = document.querySelector('.prevBtn');
const nxtBtn = document.querySelector('.nxtBtn');

//counter
let counter = 1;
const size = galleryImgs[0].clientWidth;

gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nxtBtn.addEventListener('click',() => {
	if (counter >= galleryImgs.length - 1) return;

	gallerySlide.style.transition = "none";
	counter++;

	gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',() => {
	if (counter <= 0) return;

	gallerySlide.style.transition = "none";
	counter--;

	gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//loop back to img
gallerySlide.addEventListener('transitionend', () => {
	if (galleryImgs[counter].id === 'lastImg') {
		gallerySlide.style.transition = "none";
		counter = galleryImgs.length - 2;
		gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}

	if (galleryImgs[counter].id === 'firstImg') {
		gallerySlide.style.transition = "none";
		counter = galleryImgs.length - counter;
		gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});*/