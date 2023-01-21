// add highlight to selected insurance
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.currentTarget.parentElement.classList.add("selected");
    e.currentTarget.textContent = "EDIT";
  });
});
