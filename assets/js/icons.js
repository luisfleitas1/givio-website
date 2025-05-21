(function () {
    const data = {
    };
    const allIconTag = document.querySelectorAll("[data-icon]");
    allIconTag.forEach((Element) => {
      Element.innerHTML = data[Element.dataset.icon];
    });
  })();
  