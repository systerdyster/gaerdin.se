var gulp        = require('gulp');
var less        = require('gulp-less');
var sass        = require('gulp-sass');
var cleanCss    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var gutil       = require('gutil');
var concat      = require('gulp-concat');
var watch       = require('gulp-watch');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');

var gulpTypings = require("gulp-typings");
var tsc         = require('gulp-typescript');

var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');
var batch       = require('gulp-batch');

var tsProject   = tsc.createProject('./tsconfig.json');
var tslint      = require('gulp-tslint');

// Less
//gulp.task('less', function () {
//    return gulp.src('./Static/src/less/*.less')
//        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
//        .pipe(less())
//        .pipe(gulp.dest("./Static/css"))
//        .pipe(cleanCss())
//        .pipe(rename({ suffix: '.min' }))
//        .pipe(gulp.dest("./Static/css"))
//        .pipe(notify({ onLast: true, message: 'Compiled Less' }));
//});

gulp.task('sass', function () {
    return gulp.src('./Static/src/scss/*.scss')
      .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
      .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass())
        .pipe(gulp.dest("./Static/css"))
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("./Static/css"))
        .pipe(notify({ onLast: true, message: 'Compiled Sass' }));
});

gulp.task('compile-ts', function () {
    var tsResult = gulp
    .src('./Static/src/ts/**.*.ts')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(tsc(tsProject));

    return tsResult.js
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./Static/src/ts/'));
});

gulp.task('lint-ts' , function () {
    return gulp.src('./Static/src/ts/**/*.ts')
      .pipe(tslint())
      .pipe(tslint.report('prose', { emitError: false }));
});


gulp.task('scripts:ts', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './Static/js/ts/application.js',
        debug: true
    });

    return b.bundle()
      .pipe(source('application.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest("./Static/js"))
      .pipe(notify({ onLast: true, message: 'Compiled Scripts' }));
});

gulp.task("installTypings", function () {
    return gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline.
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src(['./node_modules/font-awesome/fonts/*'])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(gulp.dest("./Static/fonts"))
        .pipe(notify({ onLast: true, message: 'Copied Fonts.' }));
});


// Default build. Run to make sure all scripts, css and fonts are compiled and on right spot.
gulp.task('default', ["sass", "scripts:ts", "fonts"], function () {
    return gutil.log('Done compiling less, building script and copying fonts.');
});

// Watch tasks
gulp.task('watch:less', function () {
    watch('./Static/src/less/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
});

gulp.task('watch:scripts_ts', function () {
    watch('./Static/js/ts/**/*.js', batch(function (events, done) {
        gulp.start('scripts:ts', done);
    }));
});
