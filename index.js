// Images Array for Slider
var images = [
  "product 1.jpg",
  "product 2.jpg",
  "product 3.webp",
  "product 4.jpg",
  "product 5.jpg"
];

// Current index for image
var currentIndex = 0;

function next() {
  var currentImg = document.getElementById("slider-img");
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  currentImg.src = images[currentIndex];
}
function prev() {
  var currentImg = document.getElementById("slider-img");
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  currentImg.src = images[currentIndex];
}
var currentImg = document.getElementById("slider-img");
var smallImage = document.getElementsByClassName("small_img");
console.log(smallImage);



  smallImage[0].onclick = function(){
    currentImg.src = smallImage[0].src;
  }

  smallImage[1].onclick = function(){
    currentImg.src = smallImage[1].src;
  }

  smallImage[2].onclick = function(){
    currentImg.src = smallImage[2].src;
  }

  smallImage[3].onclick = function(){
    currentImg.src = smallImage[3].src;
  }