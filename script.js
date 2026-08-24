document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE NAVIGATION
     ========================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });
  }


  /* =========================================
     GLOBAL COMMUNITY CONSTELLATION
     ========================================= */

  const regionNodes = document.querySelectorAll(".region-node");
  const regionCards = document.querySelectorAll(".region-card");

  regionNodes.forEach(node => {
    node.addEventListener("click", () => {

      const region = node.dataset.region;

      regionNodes.forEach(item => {
        item.classList.remove("active");
      });

      regionCards.forEach(card => {
        card.classList.remove("active");
      });

      node.classList.add("active");

      const selectedCard = document.querySelector(
        `.region-card[data-region="${region}"]`
      );

      if (selectedCard) {
        selectedCard.classList.add("active");
      }
    });
  });


  /* =========================================
     SMOOTH SCROLLING
     ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });

  });


  /* =========================================
     ESCAPE KEY
     ========================================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (nav) {
        nav.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.classList.remove("active");
      }

    }

  });

});
