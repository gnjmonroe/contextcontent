let slideIndexSyllabi = 0;

function showSlidesSyllabi() {
  let i;
  let slidesSyllabi = document.getElementsByClassName("slide-syllabi");
  for (i = 0; i < slidesSyllabi.length; i++) {
    slidesSyllabi[i].style.display = "none";
  }
  slideIndexSyllabi++;
  if (slideIndexSyllabi > slidesSyllabi.length) {slideIndexSyllabi = 1}
  slidesSyllabi[slideIndexSyllabi - 1].style.display = "block";
  setTimeout(showSlidesSyllabi, 1000);
}

showSlidesSyllabi();