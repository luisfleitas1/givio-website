(function () {
  const data = {
    circleStar: `<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3334 16C29.3334 23.3638 23.3639 29.3333 16.0001 29.3333C8.63628 29.3333 2.66675 23.3638 2.66675 16C2.66675 8.63616 8.63628 2.66663 16.0001 2.66663C23.3639 2.66663 29.3334 8.63616 29.3334 16ZM21.3739 11.9595C21.7644 12.35 21.7644 12.9832 21.3739 13.3737L14.7072 20.0404C14.3167 20.4309 13.6835 20.4309 13.293 20.0404L10.6263 17.3737C10.2358 16.9832 10.2358 16.35 10.6263 15.9595C11.0168 15.569 11.65 15.569 12.0405 15.9595L14.0001 17.9191L16.9799 14.9393L19.9596 11.9595C20.3502 11.569 20.9833 11.569 21.3739 11.9595Z" fill="currentColor"/>
</svg>
`
  };
  const allIconTag = document.querySelectorAll("[data-icon]");
  allIconTag.forEach((Element) => {
    Element.innerHTML = data[Element.dataset.icon];
  });
})();
