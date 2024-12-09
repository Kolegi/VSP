const newsPerPage = 6;
let currentPage = 1;
const newsItems = [
  {
    link: "./image/news/world_cleanup_day/1.pdf",
    image: "./image/news/world_cleanup_day/1.jpg",
    img_descr: "День прибирання",
    title: "Всесвітня акція World Cleanup Day",
    content:
      "Щороку в третю суботу вересня проходить акція Всесвітній день прибирання «World Cleanup Day»...",
  },
  {
    link: "./image/news/den_seluscha/1.pdf",
    image: "./image/news/den_seluscha/1.jpg",
    img_descr: "День селища",
    title: "День селища скажемо «ДЯКУЮ» нашим захисникам",
    content:
      "Багата та розмаїта історія Новоушицького краю налічує близько шести століть. Вперше назва селища згадується в середині XV століття. В 1439 році польський шляхтич Сенько...",
  },
  {
    link: "./image/news/pravula_povedinku/1.pdf",
    image: "./image/news/pravula_povedinku/1.jpg",
    img_descr: "Виховна година",
    title: "Культура поведінки здобувачів фахової передвищої освіти",
    content:
      "18.09  кураторами академічних груп проведено виховні години на тему: «Культура поведінки здобувачів фахової передвищої освіти»...",
  },
  {
    link: "./image/news/den_fizuchnoi_kyltyru_i_sporty/1.pdf",
    image: "./image/news/den_fizuchnoi_kyltyru_i_sporty/1.jpg",
    img_descr: "День фізичної культури і спорту України!",
    title: "З днем фізичної культури і спорту України!",
    content:
      "Загальноколежанський патріотичний забіг «Біжу за ГЕРОЇВ України» присвячується пам’яті Героїв, випускників коледжу…",
  },
  {
    link: "./image/news/tyrnir_z_voleiboly/1.pdf",
    image: "./image/news/tyrnir_z_voleiboly/1.jpg",
    img_descr: "Турнір з волейболу",
    title: "Турнір з волейболу",
    content:
      "14 вересня з нагоди Дня фізичної культури і спорту УКРАЇНИ відбувся турнір з волейболу серед команд Новоушицької територіальної громади...",
  },
  {
    link: "./image/news/tujden_pershokyrsnuka/1.pdf",
    image: "./image/news/tujden_pershokyrsnuka/1.jpg",
    img_descr: "Тиждень першокурсника",
    title: "Тиждень першокурсника в бібліотеці",
    content:
      "У вересні місяці в бібліотеці  коледжу розпочався комплексний захід «Тиждень першокурсника». Головна мета цього заходу – ознайомлення здобувачів першого курсу з книжковим фондом...",
  },
  {
    link: "./image/news/perevirka_gyrtojutok/1.pdf",
    image: "./image/news/perevirka_gyrtojutok/1.jpg",
    img_descr: "Гуртожиток коледжу",
    title: "Перевірка гуртожитку",
    content:
      "12 вересня 2024 року проводився рейд перевірки санітарного стану кімнат мешканців третього і четвертого поверхів - студентів коледжу...",
  },
  {
    link: "./image/news/den_gramotnosti/1.pdf",
    image: "./image/news/den_gramotnosti/1.jpg",
    img_descr: "Міжнародний день грамотності",
    title: "До міжнародного дня грамотності",
    content:
      "Щорічно 8 вересня у всьому світі святкується Міжнародний день грамотності. Його започатковано ЮНЕСКО у вересні 1965 року...",
  },
  {
    link: "./image/news/ivan_rozgonyuk/ivan_rozgonyuk.pdf",
    image: "./image/news/ivan_rozgonyuk/1.jpg",
    img_descr: "Вічна шана герою!",
    title: "Вічна шана герою!",
    content:
      "Прийшла сумна, трагічна звістка в нашу колежанську родину. На Донецькому напрямку загинув випускник нашого коледжу 2017 ...",
  },
  {
    link: "./image/news/den_zapobigannya_samogybstvam/den_zapobigannya_samogybstvam.pdf",
    image: "./image/news/den_zapobigannya_samogybstvam/1.jpg",
    img_descr: "Психічне здоров’я молоді",
    title: "Психічне здоров’я молоді",
    content:
      "10 вересня щорічно відзначається Всесвітній день запобігання самогубствам. Починаючи із 2024 по 2026 рік основна тема цього ...",
  },
  {
    link: "./image/news/pedahohichna_rada_09_09/pedahohichna_rada_09_09.pdf",
    image: "./image/news/pedahohichna_rada_09_09/1.jpg",
    img_descr: "Засідання педагогічної ради коледжу  ",
    title: "Засідання педагогічної ради коледжу ",
    content:
      "9 вересня 2024 року під головуванням директора коледжу Мирослави ІВАСИК  відбулося засідання педагогічної ради коледжу...",
  },
  {
    link: "./image/news/onayomlyvalna_praktuka/onayomlyvalna_praktuka.pdf",
    image: "./image/news/onayomlyvalna_praktuka/1.jpg",
    img_descr:
      "Практичне навчання – основа професійного зростання  здобувачів освіти ",
    title:
      "Практичне навчання – основа професійного зростання  здобувачів освіти",
    content:
      "Мета і зміст ОЗНАЙОМЛЮВАЛЬНОЇ практики визначені освітньо-кваліфікаційною характеристикою...",
  },
  {
    link: "./image/news/pravovui_ta_socialnui_zahust.pdf",
    image: "./image/news/pravovui_ta_socialnui_zahust/1.jpg",
    img_descr: "Правовий та соціальний  захист  здобувачів  освіти",
    title: "Правовий та соціальний  захист  здобувачів  освіти»",
    content:
      "У світі, де дитинство повинно бути безтурботним та наповненим мріями, є діти, для яких ця безтурботність – розкіш. Це діти з сімей ...",
  },
  {
    link: "./image/news/04_09.pdf",
    image: "./image/news/myltumediina_platforma/1.jpg",
    img_descr: "UNITED 24 MEDIA",
    title: "Про мультимедійну платформу «UNITED 24 MEDIA»",
    content:
      "Міністерство освіти і науки України рекомендує керівникам закладів загальної середньої, професійної (професійно-технічної)освіти, фахової передвищої освіти й директорам ...",
  },
  {
    link: "./image/news/03_09.pdf",
    image: "./image/news/narada_kyratoriv_03_09/1.jpg",
    img_descr: "Нарада кураторів",
    title: "Нарада кураторів 03 вересня 2024 року",
    content:
      "3 вересня 2024 відбулась робоча нарада кураторів академічних груп під головуванням Валентини ШИНКАРЕНКО, голови Ради соціально-гуманітарної та виховної роботи за участю завідуючої...",
  },
  {
    link: "./image/news/02_09.pdf",
    image: "./image/news/01_veresnia/01_veresnia.jpg",
    img_descr: "1 вересня",
    title: "З новим 2024-2025 навчальним роком!  З Днем Знань!",
    content:
      "Працюємо  заради перемоги! З новим 2024-2025 навчальним роком!  З Днем Знань! Перемагає той, хто пам'ятає, - проголошувала студентсько-викладацька родина сьогодні, 2 вересня , в особливий для нас день. ",
  },
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
      <a class="group flex flex-col gap-[20px] w-full h-full" href="${news.link}">
        <div class="news-image-wrapper">
          <img class="news-image" src="${news.image}" alt="${news.img_descr}" />
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
