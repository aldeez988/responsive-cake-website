
var originalImageCarousel = document.getElementById("image-carosusel");
images = [];
curImage = 0;
orignalSrc = originalImageCarousel.src;
slideNumberText = document.getElementById("sild-number");

slideNumber = 1;

var slideShow = function (smallImagesContainer) {

   for (i = 0; i < smallImagesContainer.childElementCount; i++) {
      images.push(smallImagesContainer.children[i]);
      //  this.images[i].style.display = "none";
   }
};
var nextSlide = function () {

   if (curImage <= images.length - 1 && slideNumber < 5) {
      originalImageCarousel.src = images[curImage].src;
      slideNumber++;
      if (curImage < images.length - 1)
         curImage++;

   }
   slideNumberText.textContent = (slideNumber) + "/5";

};

var prevSlide = function () {
   curImage--;
   if (curImage < 0) {
      originalImageCarousel.src = orignalSrc;
      curImage = 0;
      slideNumber = 1;
      slideNumberText.textContent = (slideNumber) + "/5";
   } else {
      originalImageCarousel.src = images[curImage].src;
      slideNumber--;
      slideNumberText.textContent = (slideNumber) + "/5";
   }
};

slideShow(document.getElementById("small-pics-container"));
document.getElementsByClassName("next")[0].addEventListener("click", nextSlide);
document.getElementsByClassName("prev")[0].addEventListener("click", prevSlide);