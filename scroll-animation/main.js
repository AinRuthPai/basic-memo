const scrollText = document.querySelector(".scroll_text");

function wheelScroll() {
  if (window.innerHeight > scrollText.getBoundingClientRect().top + 300) {
    scrollText.classList.add("show");
  }
}

window.addEventListener("scroll", wheelScroll);
