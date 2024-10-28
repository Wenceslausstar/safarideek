// JavaScript to toggle the navbar when the hamburger is clicked
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Hide sidebar on back button click
backButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
// // Handle scroll indicators
// document.addEventListener("DOMContentLoaded", function () {
//   const smallCards = document.querySelector(".small-cards");
//   const largeCards = document.querySelector(".right-column");
//   const smallIndicators = document.querySelectorAll(
//     ".small-indicators .indicator"
//   );
//   const largeIndicators = document.querySelectorAll(
//     ".large-indicators .indicator"
//   );

//   function updateIndicators(container, indicators) {
//     if (window.innerWidth <= 640) {
//       const scrollPosition = container.scrollLeft;
//       const cardWidth = container.querySelector(".card").offsetWidth;
//       const activeIndex = Math.round(scrollPosition / (cardWidth + 16)); // 16 is gap

//       indicators.forEach((indicator, index) => {
//         indicator.classList.toggle("active", index === activeIndex);
//       });
//     }
//   }

//   if (smallCards && smallIndicators.length) {
//     smallCards.addEventListener("scroll", () => {
//       updateIndicators(smallCards, smallIndicators);
//     });
//   }

//   if (largeCards && largeIndicators.length) {
//     largeCards.addEventListener("scroll", () => {
//       updateIndicators(largeCards, largeIndicators);
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const textOverflowing = () => {
    document.querySelectorAll(".js-text-overflowing").forEach((elm) => {
      const isTextOverflowing = elm.clientHeight < elm.scrollHeight;
      elm.classList.toggle("is-text-overflowing", isTextOverflowing);
    });
  };
  textOverflowing();
  window.onresize = throttle(textOverflowing, 100);

  const toggleCards = () => {
    console.log("js-toggle-card !");
    const toggleCards = document.querySelectorAll(".js-toggle-card");
    if (window.DetectIt.primaryInput === "mouse") {
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
      toggleCards.forEach((elm) => {
        elm.onclick = (e) => {
          e.currentTarget
            .querySelector(".mea-item__inner")
            .classList.toggle("show-backface");
        };
      });
    }
  };

  const meaMobileSlider = {
    container: "#mea-slider",
    nav: false,
    loop: false,
    edgePadding: 32,
    gutter: 20,
    controls: false,
    swipeAngle: false,
    preventScrollOnTouch: "auto",
    items: 1,
    responsive: {
      576: {
        items: 2,
      },
    },
  };

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
