// nft collateral select
let nftCollateral = document.querySelectorAll(".nft-collateral");
nftCollateral.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("selected");
  });
});
