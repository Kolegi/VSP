function loadComponent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((error) => console.error("Помилка завантаження компонента:", error));
}

// Завантаження хедера
loadComponent("/header.html", "header-container");

// Завантаження футера
loadComponent("/footer.html", "footer-container");
