// Utility Functions
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Mobile Slider Configuration
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
