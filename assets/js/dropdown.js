let dropdown = document.querySelectorAll(".dropdown-btn");
dropdown.forEach((item) => {
  item.addEventListener("click", function () {
    let dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("active-dropdown");
    let dropdownIcon = this.children[1];
    dropdownIcon.classList.toggle("active-chevron");
  });
});

let filterDropdown = document.querySelectorAll(".filter-dropdown-btn");
filterDropdown.forEach((item) => {
  item.addEventListener("click", function () {
    // Close all other dropdowns
    let dropdowns = document.querySelectorAll(".filter-dropdown-content");
    let dropdownIcons = document.querySelectorAll(".filter-dropdown-icon");
    dropdowns.forEach((item) => {
      item.classList.remove("active-dropdown");
    });
    dropdownIcons.forEach((item) => {
      item.classList.remove("active-chevron");
    });
    // Open the dropdown
    let dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("active-dropdown");
    let dropdownIcon = this.children[0];
    dropdownIcon.classList.toggle("active-chevron");
  });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".filter-dropdown-btn")) {
    let dropdowns = document.querySelectorAll(".filter-dropdown-content");
    let dropdownIcons = document.querySelectorAll(".filter-dropdown-icon");
    dropdowns.forEach((item) => {
      item.classList.remove("active-dropdown");
    });
    dropdownIcons.forEach((item) => {
      item.classList.remove("active-chevron");
    });
  }
};
