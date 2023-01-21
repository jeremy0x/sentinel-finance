// Wallet info Sidebar toggle
const toggleBtn = document.getElementById('toggle-btn');
const walletSidebar = document.getElementById('wallet-sidebar');

// initialize sidebar to closed
walletSidebar.style.transform = 'translateX(100%)';

toggleBtn.addEventListener('click', function () {
  if (walletSidebar.style.transform === 'translateX(100%)') {
    walletSidebar.style.transform = 'translateX(0)';
  } else {
    walletSidebar.style.transform = 'translateX(100%)';
  }
});

document.addEventListener('click', function (e) {
  if (e.target !== walletSidebar && e.target !== toggleBtn && !walletSidebar.contains(e.target)) {
    walletSidebar.style.transform = 'translateX(100%)';
  }
});

