const newsPerPage = 6;
let currentPage = 1;
const newsItems = [
  {
    link: "/news/goduna_spilkyvania.html",
    image: "./image/news/goduna_spilkyvania/1.jpg",
    img_descr: "Освіта для мене-це...",
    title: "«Освіта для мене-це...»",
    content:
      "30 жовтня 2024 року зі студентами АЛ11 грпи та спільно з завідувачем відділенням...",
  },
  {
    link: "/news/konkyrs_petra-yacuka.html",
    image: "./image/news/konkyrs_petra-yacuka/1.jpg",
    img_descr: "Конкурс Петра ЯЦИКА",
    title: "«Конкурс Петра ЯЦИКА»",
    content:
      "29 жовтня 2024 року у Відокремленому структурному підрозділі «Новоушицький фаховий коледж Закладу вищої освіти...",
  },

  {
    link: "/news/den_avtomobilista.html",
    image: "./image/news/den_avtomobilista/1.jpg",
    img_descr: "«День автомобіліста і дорожника»",
    title: "«День автомобіліста і дорожника»",
    content:
      "З нагоди Дня автомобіліста і дорожника, який відзначають в цьому році 27 жовтня  зі студентами спеціальностей 275...",
  },
  {
    link: "/news/vidkrute_zanyattya.html",
    image: "./image/news/vidkrute_zanyattya/1.jpg",
    img_descr: "Атестаційна  кампанія - 2025 в дії",
    title: "Атестаційна  кампанія - 2025 в дії",
    content:
      "ВСП Новоушицький фаховий коледж ЗВО ПДУ: підготовка майбутніх спеціалістів поєднується з практичною діяльністю та освоєнням необхідних професійних компентентостей...",
  },
  {
    link: "/news/26_jovtniya.html",
    image: "./image/news/26_jovtniya/1.jpg",
    img_descr:
      "26 жовтня у м. Хмельницький відбувся Кубок Хмельницької області з армрестлінгу",
    title:
      "26 жовтня у м. Хмельницький відбувся Кубок Хмельницької області з армрестлінгу",
    content:
      "Здобувачі освіти учасники спортивної секції СИЛОВІ ВИДИ СПОРТУ взяли активну участь у Чемпіонаті Хмельницької області з армрестлінгу та вибороли 14 медалей!...",
  },
  {
    link: "/news/mo_kyratoriv.html",
    image: "./image/news/mo_kyratoriv/1.jpg",
    img_descr: "Методоб'єднання кураторів навчальних груп.",
    title: "Методоб'єднання кураторів навчальних груп.",
    content:
      "«24 жовтня 2024 року, відбулося засідання методичного об’єднання кураторів груп...",
  },
  {
    link: "/news/zasidanya_atestaciinoi_komisii.html",
    image: "./image/news/zasidanya_atestaciinoi_komisii/1.jpg",
    img_descr:
      "Засідання атестаційної комісії: ключові питання та плани на 2024-2025 н.р.",
    title:
      "Засідання атестаційної комісії: ключові питання та плани на 2024-2025 н.р.",
    content:
      "«22 жовтня відбулося засідання атестаційної комісії  у змішаному форматі...",
  },
  {
    link: "/news/den_borotbu_z_torgivley_lydmu.html",
    image: "./image/news/den_borotbu_z_torgivley_lydmu/1.jpg",
    img_descr:
      "Європейський день боротьби з торгівлею людьми: як не стати жертвою?",
    title:
      "Європейський день боротьби з торгівлею людьми: як не стати жертвою?",
    content:
      "«18 жовтня в Україні відзначається Європейський день боротьби з торгівлею людьми. З цієї...",
  },
  {
    link: "/news/klasufikaciya_medy.html",
    image: "./image/news/klasufikaciya_medy/1.jpg",
    img_descr:
      "Лабораторно-практичне заняття на тему: КЛАСИФІКАЦІЯ РІЗНИХ СОРТІВ МЕДУ",
    title:
      "Лабораторно-практичне заняття на тему: КЛАСИФІКАЦІЯ РІЗНИХ СОРТІВ МЕДУ",
    content:
      "«Просте насадження знань – це не освіта!» - стверджують відомі педагоги...",
  },
  {
    link: "/news/praktuchne_navchannya_djivaldis.html",
    image: "./image/news/praktuchne_navchannya_djivaldis/1.jpg",
    img_descr:
      "Проведення практичних занять на ПП «Дживальдіс» для здобувачі освіти Х14 групи",
    title:
      "Проведення практичних занять на ПП «Дживальдіс» для здобувачі освіти Х14 групи",
    content:
      "ПП «Дживальдіс» стало дієвою  платформою проведення практичних занять для здобувачів освіти за освітньо-професійною програмою...",
  },
  {
    link: "/news/tujden_kosmosy.html",
    image: "./image/news/tujden_kosmosy/1.jpg",
    img_descr: "Досліджуючи безмежний всесвіт",
    title: "Досліджуючи безмежний всесвіт",
    content:
      "У США космонавтів називають астронавтами, у Китаї – тайконавтами...",
  },
  {
    link: "/news/vsesvitniy_den_psuhichnogo_zdorovya.html",
    image: "./image/news/vsesvitniy_den_psuhichnogo_zdorovya/1.jpg",
    img_descr: "Всесвітній день психічного здоров'я",
    title: "Всесвітній день психічного здоров'я",
    content:
      "Світ переживає складні часи. Не встигнувши оговтатися від наслідків пандемії COVID-19...",
  },
  {
    link: "/news/shkola_molodogo_pedagoga.html",
    image: "./image/news/shkola_molodogo_pedagoga_08_10/1.jpg",
    img_descr: "Школа молодого педагога",
    title: "Перше у цьому році засідання школи молодого педагога відбулося  ",
    content: "«Зібратися разом – це початок, триматися разом – це процес...",
  },
  {
    link: "/news/zasidanya_stydraru.html",
    image: "./image/news/zasidanya_stydradu/1.jpg",
    img_descr: "Засідання студради: плани та ініціативи",
    title: "Засідання студради: плани та ініціативи",
    content:
      "7 жовтня відбулося планове засідання студентської ради коледжу. Активісти обговорили низку важливих питань...",
  },
  {
    link: "/news/den_osvityanuna.html",
    image: "./image/news/den_osvityanuna/1.jpg",
    img_descr: "День освітянина",
    title: "День освітянина",
    content:
      "У коледжі  відбулося урочисте відзначення працівників освіти з нагоди їхнього професійного свята...",
  },
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
