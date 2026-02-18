const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const projectDir = "./"; // шлях до папки з HTML файлами
const outputFile = "./lang/uk.json"; // куди зберігати JSON

const jsonData = {};

// Рекурсивне проходження папок
function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
    } else if (stats.isFile() && path.extname(file) === ".html") {
      extractTexts(fullPath);
    }
  });
}

// Витягуємо тексти з HTML
function extractTexts(filePath) {
  const html = fs.readFileSync(filePath, "utf-8");
  const $ = cheerio.load(html);
  const fileBase = path.basename(filePath, ".html");

  let counter = 0;

  // 1. Тег title
  const titleText = $("title").text().trim();
  if (titleText) {
    jsonData[`${fileBase}.title`] = titleText;
  }

  // 2. placeholder і alt
  $("[placeholder]").each((i, el) => {
    const ph = $(el).attr("placeholder").trim();
    if (ph) {
      jsonData[`${fileBase}.placeholder${counter++}`] = ph;
    }
  });

  $("[alt]").each((i, el) => {
    const alt = $(el).attr("alt").trim();
    if (alt) {
      jsonData[`${fileBase}.alt${counter++}`] = alt;
    }
  });

  // 3. Видимі тексти всередині елементів
  $("*").each((i, el) => {
    const text = $(el)
      .contents()
      .filter(function () {
        return this.type === "text" && $(this).text().trim() !== "";
      })
      .text()
      .trim();

    if (text) {
      jsonData[`${fileBase}.text${counter++}`] = text;
    }
  });
}

// Запуск
walk(projectDir);

// Створюємо папку lang, якщо немає
if (!fs.existsSync("./lang")) {
  fs.mkdirSync("./lang");
}

// Запис JSON
fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2), "utf-8");

console.log(`Готово! Тексти витягнуті у ${outputFile}`);
