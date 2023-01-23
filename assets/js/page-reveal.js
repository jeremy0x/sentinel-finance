document.addEventListener('DOMContentLoaded', function () {
  let tl = gsap.timeline();
  tl.fromTo(
    '.pre-load',
    { opacity: 1 },
    { opacity: 0, duration: 0.5, delay: 3, display: 'none', ease: 'power4.out' }
  );
});
