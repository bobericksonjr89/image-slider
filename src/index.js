(() => {
  // DOM Capture
  const images = document.querySelectorAll(".picture");
  const dots = document.querySelectorAll(".dot");
  const leftArrow = document.querySelector(".previous");
  const rightArrow = document.querySelector(".next");

  // Variables
  const imageIds = [0, 1, 2, 3, 4];
  let index = 0;
  window.index = index;

  // Functions

  function toggleActivePicture(image) {
    image.classList.toggle("picture--visible");
  }

  function toggleActiveDot(dot) {
    dot.classList.toggle("dot--active");
  }

  function nextImage(imgIndex = index) {
    index = imgIndex;
    toggleActivePicture(images[index]);
    toggleActiveDot(dots[index]);

    index++;
    if (index === imageIds.length) {
      index = 0;
    }

    toggleActivePicture(images[index]);
    toggleActiveDot(dots[index]);
  }

  function previousImage(imgIndex) {
    toggleActivePicture(images[imgIndex]);
    toggleActiveDot(dots[imgIndex]);
    index = index - 1;
    if (index < 0) {
      index = imageIds.length - 1;
    }
    toggleActivePicture(images[index]);
    toggleActiveDot(dots[index]);
  }

  let intervalID = setInterval(nextImage, 5000);

  function showSlide() {
    clearInterval(intervalID);

    const currentSlide = document.querySelector(".picture--visible");
    const slideIndex = parseInt(this.dataset.id);

    toggleActivePicture(currentSlide);
    toggleActiveDot(dots[parseInt(currentSlide.dataset.picture)]);

    index = slideIndex;

    toggleActivePicture(images[index]);
    toggleActiveDot(dots[index]);

    intervalID = setInterval(nextImage, 5000);
  }

  // Events
  dots.forEach((dot) => dot.addEventListener("click", showSlide));
  rightArrow.addEventListener("click", () => {
    nextImage(index);
    clearInterval(intervalID);
    intervalID = setInterval(nextImage, 5000);
  });
  leftArrow.addEventListener("click", () => {
    previousImage(index);
    clearInterval(intervalID);
    intervalID = setInterval(nextImage, 5000);
  });
})();
