let slideIndexLibrary = 0;

function showSlidesLibrary() {
  let i;
  let slidesLibrary = document.getElementsByClassName("slide-library");
  for (i = 0; i < slidesLibrary.length; i++) {
    slidesLibrary[i].style.display = "none";
  }
  slideIndexLibrary++;
  if (slideIndexLibrary > slidesLibrary.length) {slideIndexLibrary = 1}
  slidesLibrary[slideIndexLibrary - 1].style.display = "block";
  setTimeout(showSlidesLibrary, 1000);
}

showSlidesLibrary();