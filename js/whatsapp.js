function initWhatsappButton() {

  const button = document.querySelector(".whatsapp-float");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

      button.style.opacity = "1";
      button.style.visibility = "visible";

    } else {

      button.style.opacity = "0";
      button.style.visibility = "hidden";

    }

  });

}