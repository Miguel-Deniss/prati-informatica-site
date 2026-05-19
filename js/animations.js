const cards = document.querySelectorAll(
  ".service-card, .testimonial-card"
);

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";

  });

});