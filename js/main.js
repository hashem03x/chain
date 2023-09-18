let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-white");
  } else {
    nav.classList.add("bg-transparent");
    nav.classList.remove("bg-white");
  }
});

let clients = document.querySelectorAll(".clients .menu div.client");
let cards = document.querySelectorAll(".clients .talks li");
clients.forEach((client) => {
  client.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("client")) {
      clients.forEach((c) => c.classList.remove("active"));
      e.target.parentElement.classList.add("active");
      cards.forEach((card) => {
        if (
          card.getAttribute("data-id") ==
          e.target.parentElement.getAttribute("data-id")
        ) {
          cards.forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
        }
      });
    }
  });
});

let navlinks = document.querySelectorAll("nav .navbar-nav .nav-link");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navlinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});
