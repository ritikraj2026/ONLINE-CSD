const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let sliderNum = 1;
let isAnimating = false; // Flag to prevent multiple animations

const autoplayInterval = 2000; // Time in milliseconds between automatic slides

function slideRight() {
  if (sliderNum < images.length && !isAnimating) {
    isAnimating = true; // Set flag to prevent concurrent animations

    slider.style.transform = `translateX(-${sliderNum * 800}px)`;
    sliderNum++;

    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => isAnimating = false);
  } else {
    slider.style.transform = `translateX(0px)`;
    sliderNum = 1;
  }
}

function slideLeft() {
  if (sliderNum > 1 && !isAnimating) {
    isAnimating = true; // Set flag to prevent concurrent animations

    slider.style.transform = `translateX(-${(sliderNum - 2) * 800}px)`;
    sliderNum--;

    requestAnimationFrame(() => isAnimating = false);
  } else {
    slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
    sliderNum = images.length;
  }
}

right.addEventListener('click', slideRight);
left.addEventListener('click', slideLeft);

// Start the autoplay loop (optional)
let autoplayTimeout = setTimeout(slideRight, autoplayInterval);

// Handle user interaction to pause/resume autoplay (optional)
slider.addEventListener('mouseover', () => {
  clearTimeout(autoplayTimeout);
});

slider.addEventListener('mouseout', () => {
  autoplayTimeout = setTimeout(slideRight, autoplayInterval);
});

// Pre-calculate image widths for smoother transitions (optional)
const imageWidths = Array.from(images).map(img => img.offsetWidth);


//search ke liye button function kardiya

const btn=document.querySelector('.');
const body=document.querySelector('body');
btn.addEventListener('click',()=>{
    location.href=".cont-blur";
})
