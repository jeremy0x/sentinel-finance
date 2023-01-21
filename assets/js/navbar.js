// navbar transparency/colored and resize on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // disable this resize on mobile
  if (window.innerWidth < 768) {
    document.getElementById("logo").style.width = "100px";
    document.getElementById("navbar").style.padding = "0.75rem 1.5rem";
  } else if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    document.getElementById("navbar").style.background = "#100420de";
    document.getElementById("navbar").style.padding = "0.75rem 2.5rem";
    document.getElementById("logo").style.width = "125px";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.padding = "2rem 3.5rem";
    document.getElementById("logo").style.width = "150px";
  }
}
