// highlight the current tab
let tab = document.querySelectorAll(".tab");
tab.forEach(function (tabs) {
  tabs.addEventListener("click", function () {
    tab.forEach(function (tabs) {
      tabs.classList.remove("active");
    });

    tabs.classList.add("active");
  });
});

// tab switch
const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabValue);

    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove('active');
    });
    target.classList.add('active');
  });
});
