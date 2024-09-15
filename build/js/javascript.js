$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinity: true,
    speed: 1000,
    // adaptiveHeight: true,
    easing: "ease",
    dots: true,
  });
});

function loadComponent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((error) => console.error("Помилка завантаження компонента:", error));
}

// Завантаження хедера
loadComponent("header.html", "header-container");

// Завантаження футера
loadComponent("footer.html", "footer-container");
