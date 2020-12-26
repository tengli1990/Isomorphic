const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber');
const cleanEntry = './src/server/config/index.js';
const entry = './src/server/**/*.js'


function buildDev() {
  return watch(entry, { ignoreInitial: false }, function () {
    gulp.src(entry)
      .pipe(plumber())
      .pipe(babel({
        babelrc: false,
        plugins: ["@babel/plugin-transform-modules-commonjs"]
      }))
      .pipe(gulp.dest('dist'))
  });
}


function buildProd() {
  return gulp.src(entry)
    .pipe(babel({
      babelrc: false,
      ignore: [cleanEntry],
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(gulp.dest('dist'))
}

function buildConfig() {
  return gulp
  .src(entry)
  .pipe(gulp.dest('dist'))
}

let build = gulp.series(buildDev);
if (process.env.NODE_ENV === 'production') {
  build = gulp.series(buildProd, buildConfig);
}

gulp.task('default', build);

