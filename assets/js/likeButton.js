// add red color to liked button
let likeButtons = document.querySelectorAll(".like");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
    likeButton.classList.toggle("wiggle");
  });
});
