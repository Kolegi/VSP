const newsPerPage = 6;
let currentPage = 1;
const newsItems = [
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  {
    image: "./image/news-1.png",
    title: "Перша новина",
    content: "Короткий опис першої новини...",
  },
  {
    image: "./image/news-2.png",
    title: "Друга новина",
    content: "Короткий опис другої новини...",
  },
  // ... ваші новини ...
];

function displayNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) {
    console.error("Елемент news-container не знайдено");
    return;
  }
  newsContainer.innerHTML = "";

  const start = (currentPage - 1) * newsPerPage;
  const end = start + newsPerPage;
  const pageNews = newsItems.slice(start, end);

  pageNews.forEach((news) => {
    const newsElement = document.createElement("div");
    newsElement.innerHTML = `
      <a class="group flex flex-col gap-[20px] w-full h-full" href="#">
        <div class="news-image-wrapper">
          <img class="news-image" src="${news.image}" alt="news" />
        </div>
        <div class="flex flex-col gap-[8px]">
          <h3 class="text-xl font-normal text-grey-02 group-hover:text-main">
            ${news.title}
          </h3>
          <p class="text-s font-light text-grey-03 overflow-ellipsis line-clamp-2">
            ${news.content}
          </p>
        </div>
      </a>
    `;
    newsContainer.appendChild(newsElement);
  });

  updatePagination();
  scrollToNewsTop();
}

function updatePagination() {
  const currentPageElement = document.getElementById("current-page");
  const totalPagesElement = document.getElementById("total-pages");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  if (!currentPageElement || !totalPagesElement || !prevButton || !nextButton) {
    console.error("Не знайдено необхідні елементи пагінації");
    return;
  }

  const totalPages = Math.ceil(newsItems.length / newsPerPage);

  currentPageElement.textContent = currentPage;
  totalPagesElement.textContent = totalPages;

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function scrollToNewsTop() {
  const newsContainer = document.querySelector("#body");
  if (newsContainer) {
    newsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupPaginationListeners() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayNews();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentPage < Math.ceil(newsItems.length / newsPerPage)) {
        currentPage++;
        displayNews();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayNews();
  setupPaginationListeners();
});
