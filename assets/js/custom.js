// ACCORDION START
let collapseEl = document.querySelectorAll(".collapse");

collapseEl.forEach((item) => {
    item.addEventListener("show.bs.collapse", (e) => {
        let parent = item.closest(".accordion-item");
        parent.classList.add("show");
    })
})

collapseEl.forEach((item) => {
    item.addEventListener("hide.bs.collapse", (e) => {
        let parent = item.closest(".accordion-item");
        parent.classList.remove("show");
    })
})
// ACCORDION END
var swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1000,
    loop:true,
    navigation: {
        prevEl: '.prev-button',
        nextEl: '.next-button',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
});


let header = document.querySelector(".header-section");
const handleScroll = () => {
  window.scrollY > 0 ? header.classList.add("header-scroll") : header.classList.remove("header-scroll");

}
if (header) {
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("load", handleScroll)
}

// HEADER
const hamburger = document.getElementById("hamburger");
const body = document.body;
const headerOverlay = document.querySelector('.header-overlay')
const navlinks = document.querySelectorAll(".header-nav-list");

hamburger.addEventListener("click", () => {
  body.classList.toggle("menu-open");
  hamburger.classList.toggle("active");
  headerOverlay.classList.toggle("overlayShow")
  console.log(navlinks);
});

headerOverlay.addEventListener("click",()=>{
  headerOverlay.classList.remove("overlayShow")
  body.classList.remove("menu-open")
  hamburger.classList.remove("active")
})

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.forEach((nav) => {
      nav.classList.remove("active");
    });
    
    headerOverlay.classList.remove("overlayShow")
    hamburger.classList.toggle("active");
    body.classList.toggle("menu-open");
    link.classList.add("active");
    
  });
});