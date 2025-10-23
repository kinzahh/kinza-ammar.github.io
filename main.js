AOS.init();

var typed = new Typed('#typed', {
  strings: ['Software Development Engineer in Test', 'Automation Enthusiast', 'QA Engineer'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1500,
  loop: true
});

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  }
});
