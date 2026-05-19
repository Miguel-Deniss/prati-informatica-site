function initNavbar() {

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

      header.style.background = "rgba(15, 23, 42, 0.98)";
      header.style.borderBottom = "1px solid #334155";

    } else {

      header.style.background = "rgba(15, 23, 42, 0.9)";
      header.style.borderBottom = "1px solid #1e293b";

    }

  });

}