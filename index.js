let openHambuger = document.querySelector(".fa-bars");
let closeSide = document.querySelector(".fa-xmark");

openHambuger.addEventListener("click", openSide);

function openSide() {
  let openPage = document.querySelector(".left");
  openPage.classList.remove("my-side");
}

closeSide.addEventListener("click", () => {
  let addSide = document.querySelector(".left");
  addSide.classList.add("my-side");
});
