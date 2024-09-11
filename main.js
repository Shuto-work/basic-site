$(".p-header__hamburger").on("click", function () {
  $(".p-header__nav").toggleClass("is-active");
  $(".p-header__hamburger-line").toggleClass("cross");
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".p-about__img, .p-blog__img");

  const showImage = () => {
    images.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => {
          img.classList.add("show");
        }, index * 100); 
      }
    });
  };

  window.addEventListener("scroll", showImage);
  showImage();
});