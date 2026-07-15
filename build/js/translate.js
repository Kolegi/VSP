// Функція ініціалізації Google Translate (повинна бути глобальною)
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "uk", // Мова оригіналу сайту
      includedLanguages: "en,uk", // Доступні для перекладу мови
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false, // Не показувати стандартний віджет
    },
    "google_translate_element"
  );
}

// Функція зміни мови через Cookies
function setLang(lang) {
  // Використовуємо /auto/auto для примусового скидання на українську
  // 'uk' вказує на повернення до мови оригіналу
  const cookieValue = lang === "uk" ? "/auto/auto" : "/auto/" + lang;

  // Встановлюємо термін дії кукі (1 рік)
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + expiryDate.toUTCString();

  // Встановлюємо кукі
  document.cookie =
    "googtrans=" +
    cookieValue +
    "; " +
    expires +
    "; path=/; domain=" +
    window.location.hostname;
  document.cookie = "googtrans=" + cookieValue + "; " + expires + "; path=/;";

  // Перезавантажуємо сторінку, щоб переклад застосувався
  window.location.reload();
}

// 2. Основна логіка запуску після завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
  console.log("Translate script loaded");

  // Блок коду для примусового повернення на UA ВИДАЛЕНО,
  // тепер сайт запам'ятовує останній вибір користувача.

  // --- Динамічні CSS стилі для приховування та оформлення ---
  const style = document.createElement("style");
  style.innerHTML = `
        /* Стилі для контейнера з прапорцями (ВГОРІ ПРАВОРУЧ) */
        #custom-lang-switcher {
            position: fixed;
            top: 25px;       /* Розміщення вгорі */
            right: 25px;     /* Розміщення справа */
            z-index: 10000;
            background: rgba(255, 255, 255, 0.95); /* Напівпрозорий фон */
            padding: 10px 18px; 
            border-radius: 8px; 
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            display: flex;
            gap: 20px; 
            align-items: center;
            transition: 0.3s;
        }
        #custom-lang-switcher:hover {
            background: #fff;
            transform: scale(1.08); /* Легкий ефект при наведенні */
        }
        /* Стилі для кнопок-прапорців (ЗБІЛЬШЕНИЙ РОЗМІР) */
        .lang-btn {
            width: 45px;     /* Збільшений розмір */
            height: 30px;    /* Збільшений розмір */
            cursor: pointer;
            border-radius: 4px; /* Прямокутні прапорці */
            overflow: hidden;
            border: 3px solid transparent;
            transition: transform 0.2s, border-color 0.2s;
        }
        .lang-btn:hover { 
            border-color: #007bff; 
            transform: scale(1.1); 
        }
        .lang-btn img { 
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
        }
        
        /* Приховуємо ВСІ елементи Google Translate, щоб не заважали дизайну */
        #google_translate_element, .goog-te-banner-frame, .skiptranslate {
            display: none !important;
        }
        body { top: 0 !important; } 
    `;
  document.head.appendChild(style);

  // --- HTML контейнер для прапорців ---
  const wrapper = document.createElement("div");
  wrapper.id = "custom-lang-switcher";

  // Кнопка UA (повернення до оригіналу)
  const btnUA = document.createElement("div");
  btnUA.className = "lang-btn";
  btnUA.onclick = function () {
    setLang("uk"); // Викликаємо setLang('uk')
  };
  btnUA.innerHTML = '<img src="https://flagcdn.com/w80/ua.png" alt="UA">';

  // Кнопка EN (переклад на англійську)
  const btnEN = document.createElement("div");
  btnEN.className = "lang-btn";
  btnEN.onclick = function () {
    setLang("en"); // Викликаємо setLang('en')
  };
  btnEN.innerHTML = '<img src="https://flagcdn.com/w80/gb.png" alt="EN">';

  wrapper.appendChild(btnUA);
  wrapper.appendChild(btnEN);
  document.body.appendChild(wrapper);

  // --- Додаємо прихований div для ініціалізації Google ---
  const googleDiv = document.createElement("div");
  googleDiv.id = "google_translate_element";
  document.body.appendChild(googleDiv);

  // --- Підключаємо сам скрипт Google ---
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(script);
});
