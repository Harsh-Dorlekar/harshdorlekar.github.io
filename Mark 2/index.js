// Select the slider element
const slider = document.querySelector('.slider');

// Set the initial slide index and total number of slides
let currentSlide = 0;
const totalSlides = slider.children.length;

// Function to move to the next slide
function nextSlide() {
  // Calculate the index of the next slide
  const nextIndex = (currentSlide + 1) % totalSlides;

  // Scroll the slider to the next slide
  slider.scrollTo({
    left: slider.offsetWidth * nextIndex,
    behavior: 'smooth'
  });

  // Update the current slide index
  currentSlide = nextIndex;
}

// Automatically move to the next slide every 3 seconds
const slideInterval = setInterval(nextSlide, 3000);
