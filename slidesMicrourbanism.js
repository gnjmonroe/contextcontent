let slideIndexMicrourbanism = 0;

function showSlidesMicrourbanism() {
  let i;
  let slidesMicrourbanism = document.getElementsByClassName("slide-microurbanism");
  for (i = 0; i < slidesMicrourbanism.length; i++) {
    slidesMicrourbanism[i].style.display = "none";
  }
  slideIndexMicrourbanism++;
  if (slideIndexMicrourbanism > slidesMicrourbanism.length) {slideIndexMicrourbanism = 1}
  slidesMicrourbanism[slideIndexMicrourbanism - 1].style.display = "block";
  setTimeout(showSlidesMicrourbanism, 1000);
}

showSlidesMicrourbanism();