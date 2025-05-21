var swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: '.prev-button',
        prevEl: '.next-button',
      },
});


let header = document.querySelector(".header-section");
const handleScroll = () => {
  window.scrollY > 0 ? header.classList.add("header-scroll") : header.classList.remove("header-scroll");

}
if (header) {
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("load", handleScroll)
}
