const sideNav = document.querySelector(".sidenav");
const menuButton = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-close");
const modal = document.querySelector(".modal");
const trending = document.querySelector(".trending");
const exploreBtn = document.querySelectorAll(".explore");
const instagram = document.querySelector(".fa-instagram");

// OPENING THE MENU ON CLICK
menuButton.addEventListener("click", () => {
  try {
    sideNav.classList.add("active");
    modal.classList.add("active");
  } catch (err) {
    console.log(err);
  }
});

// CLOSING MENU ON CLICK
closeMenu.addEventListener("click", () => {
  sideNav.classList.remove("active");
  modal.classList.remove("active");
});

// SMOOTH SCROLL
exploreBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    trending.scrollIntoView({ behavior: "smooth" });
  });
});

// Handling share
const data = {
  title: "Sommy blog",
  tetx: "7 Key Strategies for Unlocking Your Full Potential and Personal Growth",
  url: "https://kingtony.cloud",
};

instagram.addEventListener("click", async () => {
  try {
    await navigator.share(data);
  } catch (err) {
    console.log(err);
  }
});
