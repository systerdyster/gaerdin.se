var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cleanCss    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var gutil       = require('gutil');
var watch       = require('gulp-watch');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');

var tsc         = require('gulp-typescript');

var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');
var batch       = require('gulp-batch');


gulp.task('compile:sass', function () {
    return gulp.src('./Static/src/scss/*.scss')
      .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sass())
      .pipe(gulp.dest("./Static/css"))
      .pipe(cleanCss())
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest("./Static/css"))
      .pipe(notify({ onLast: true, message: 'Compiled Sass' }));
});

var tsProject   = tsc.createProject('./tsconfig.json');

gulp.task('compile:typescript', function (){
    return gulp.src('./Static/src/ts/**/*.ts')
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(tsc(tsProject))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./Static/src/ts/'))
      .pipe(notify({ onLast: true, message: 'Compiled Typescript' }));
});

gulp.task("bundle:typescript", function () {
    var b = browserify({
        entries: "./Static/src/ts/application.js",
        debug: true
    });

    return b.bundle()
      .pipe(source("main.min.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./Static/js"))
      .pipe(notify({ onLast: true, message: "Compiled Scripts" }));
});

gulp.task("default", ["compile:sass", "compile:typescript"]);


// Watch tasks
gulp.task("watch:sass", function () {
    watch("./Static/src/scss/**/*.scss", batch(function (events, done) {
        gulp.start("compile:sass", done);
    }));
});

gulp.task("watch:typescript", function () {
    watch("./Static/src/ts/**/*.ts", batch(function (events, done) {
        gulp.start("compile:typescript", done);
    }));
});
