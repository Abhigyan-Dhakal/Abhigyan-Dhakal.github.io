const carouselWrapper = document.querySelector(".carousel-image-wrapper");
const carouselImage = document.querySelectorAll(".carousel-image");
const carouselImageLength = carouselImage.length;

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

const dots = document.querySelector(".dots");

var imageIndex = 0

document.querySelectorAll(".dot").forEach(function(indicator, index){
  indicator.addEventListener("click", function(){
    const imageSize = carouselImage[0].clientWidth;
    imageIndex = index;
    document.querySelector(".dots .active-indicator").classList.remove("active-indicator");
    indicator.classList.add("active-indicator");

    carouselWrapper.style.transform = "translateX("+ (-imageSize * imageIndex) + "px)";
  })
})

nextButton.addEventListener("click",function(){
  const imageSize = carouselImage[0].clientWidth;
  imageIndex++;

  if(imageIndex === carouselImageLength){
    imageIndex = 0;
  }

  document.querySelector(".dots .active-indicator").classList.remove("active-indicator");
  dots.children[imageIndex].classList.add("active-indicator");

  carouselWrapper.style.transform = "translateX("+ (-imageSize * imageIndex) + "px)";
})

previousButton.addEventListener("click",function(){
  const imageSize = carouselImage[0].clientWidth;
  imageIndex--;
  if(imageIndex === -1){
    imageIndex = carouselImageLength -1 ;
  }

  document.querySelector(".dots .active-indicator").classList.remove("active-indicator");
  dots.children[imageIndex].classList.add("active-indicator");

  carouselWrapper.style.transform = "translateX("+ (-imageSize * imageIndex) + "px)";
})