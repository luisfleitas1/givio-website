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