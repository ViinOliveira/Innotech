particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: { value: "#0056b3" }, // Azul escuro
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#0056b3",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.6,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  },
  retina_detect: true
});
