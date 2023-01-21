let tl = gsap.timeline();
tl.fromTo(
  '.pre-load',
  { opacity: 1, scale: 1 },
  {
    opacity: 0,
    scale: 300,
    duration: 3,
    delay: 5,
    display: 'none',
    ease: 'power4.out',
  }
);
