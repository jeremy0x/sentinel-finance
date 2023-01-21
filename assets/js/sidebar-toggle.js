// Wallet info Sidebar toggle
const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
const sidebar = document.getElementById('sidebar');

// initialize sidebar.style.transform to open on desktop and closed on mobile
if (window.innerWidth > 1024) {
  sidebar.style.transform = 'translateX(0)';
} else {
  sidebar.style.transform = 'translateX(-100%)';
}

// always open on screens greater than 1024px and always closed by default on mobile
window.addEventListener('resize', function () {
  if (window.innerWidth > 1024) {
    sidebar.style.transform = 'translateX(0)';
  }
  else {
    sidebar.style.transform = 'translateX(-100%)';
  }
});

sidebarToggleBtn.addEventListener('click', function () {
  if (sidebar.style.transform === 'translateX(-100%)') {
    sidebar.style.transform = 'translateX(0)';
  } else {
    sidebar.style.transform = 'translateX(-100%)';
  }
});
