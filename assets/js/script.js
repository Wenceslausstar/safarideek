document.addEventListener("DOMContentLoaded", () => {
  // Text overflow handling
  const textOverflowing = () => {
    document.querySelectorAll(".js-text-overflowing").forEach((elm) => {
      const isTextOverflowing = elm.clientHeight < elm.scrollHeight;
      elm.classList.toggle("is-text-overflowing", isTextOverflowing);
    });
  };

  textOverflowing();
  window.onresize = throttle(textOverflowing, 100);

  // Card interaction handling
  const toggleCards = () => {
    const toggleCards = document.querySelectorAll(".js-toggle-card");

    if (window.DetectIt.primaryInput === "mouse") {
      // Mouse interaction
      toggleCards.forEach((elm) => {
        elm.onmouseenter = (e) => {
          e.currentTarget
            .querySelector(".mea-item__inner")
            .classList.add("show-backface");
        };
        elm.onmouseleave = (e) => {
          e.currentTarget
            .querySelector(".mea-item__inner")
            .classList.remove("show-backface");
        };
      });
    } else {
      // Touch interaction
      toggleCards.forEach((elm) => {
        elm.onclick = (e) => {
          e.currentTarget
            .querySelector(".mea-item__inner")
            .classList.toggle("show-backface");
        };
      });
    }
  };

  // Mobile responsive handling
  let meaSlider;
  const mql = window.matchMedia("(max-width:767px)");

  const onMediaQueryChange = () => {
    if (mql.matches) {
      document
        .querySelector(".mea")
        .prepend(document.querySelector("#mea-intro"));
      meaSlider = tns(meaMobileSlider);
      toggleCards();
    } else {
      if (meaSlider !== undefined) {
        meaSlider.destroy();
      }
      document
        .querySelector("#mea-slider")
        .prepend(document.querySelector("#mea-intro"));
      toggleCards();
    }
  };

  mql.onchange = onMediaQueryChange;
  onMediaQueryChange();
});
