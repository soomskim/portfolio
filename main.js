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
//------------- multiple sliders on 1pg- https://stackoverflow.com/questions/54085770/how-to-get-multiple-slider-on-one-page
var slideIndex = [1, 1];
var slideId = ["gallery-slide1", "gallery-slide2"]
showSlides (1, 0);
showSlides (1, 1);

//showSlides(slideIndex);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  

  }
  slides[slideIndex[no]-1].style.display = "block";  
}