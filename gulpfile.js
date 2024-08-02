const gulp =require("gulp");
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const clean = require('gulp-clean');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const { exec } = require('child_process');

function js() {
  return gulp
    .src("./src/javascript.js")
    .pipe(gulp.dest("./build"));
}

function css() {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./build"));
}

function clear() {
  return gulp.src('build', { read: false}).pipe(clean());
}

function tailwind(cb) {
  exec('npx tailwindcss -i ./src/scss/input.css -o ./src/scss/output.css', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

function copyfolder() {
  return src('./slink/**/*')  // Вибирає всі файли та папки в папці src/slink
    .pipe(dest('build/slink'))  // Копіює їх у папку build/slink
    .on('error', function(err) {
      console.error('Error:', err.toString());
    });
  }

function copy() {
  return gulp
    .src("./src/assets/**/*", {
      encoding: false, 
    }).pipe(gulp.dest("./build"));
}

function watching() {
  gulp.watch("./src/scss/**/*.scss", css);
  gulp.watch("./src/*.html", html).on('change', browserSync.reload);
  gulp.watch('./src/input.css', tailwind).on('change', browserSync.reload);
}

function tailwindWatch() {
  exec('npx tailwindcss -i ./src/scss/input.css -o ./src/scss/output.css --watch', function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
  });
}

function server() {
  browserSync.init({
    server: {
        baseDir: "./build"
    }
});
}

function defaultTask(cb) {
  console.log("HELLO !!")
  cb();
}

exports.default = defaultTask;
exports.css = css;
exports.clear = clear;
exports.build = gulp.series(
  clear,
  gulp.parallel(css, html, copy, tailwind),
);
exports.start = gulp.series(
clear,
gulp.parallel(css, html, js, copy, tailwind),
gulp.parallel(watching, tailwindWatch,  server));