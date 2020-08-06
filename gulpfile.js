const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch')

const entry = './src/server/**/*.js'


function buildDev() {
  return watch(entry, { ignoreInitial: false }, function () {
    gulp.src(entry)
      .pipe(babel({
        babelrc: false,
        plugins: ["@babel/plugin-transform-modules-commonjs"]
      }))
      .pipe(gulp.dest('./dist'))
  });
}


function buildProd() {


}

function buildConfig() {

}

let build = gulp.series(buildDev);
if (process.env.NODE_ENV === 'production') {
  build = gulp.series(buildprod, buildConfig);
}

gulp.task('default', build);

