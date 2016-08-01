var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var htmlmin     = require('gulp-htmlmin');


// Vaariabili custom
var sourcePath = {
  "css":  "src/css/**/*.css",
  "js": "src/js/**/*.js",
  "img": "src/img/*.*",
  "sass": "src/sass/**/*.scss",
  "html": "src/*.html"
};

var destPath = {
  "dev": "build/dev/",
  "prod": "build/production/"
};

var destinazione;
var scope = "prod";
var htmlCollapse;
if ( scope === "dev") {
  destinazione = destPath.dev;
  htmlCollapse = false;
} else {
  destinazione = destPath.prod;
  htmlCollapse = true;
}
// HTML Minify and inject into browser

gulp.task('html', function() {
  return gulp.src(sourcePath.html)
    .pipe(htmlmin({collapseWhitespace: htmlCollapse}))
    .pipe(gulp.dest(destinazione))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: destinazione
    });

    gulp.watch(sourcePath.sass, ['sass']);
    gulp.watch(sourcePath.html, ['html']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(sourcePath.sass)
        .pipe(sass())
        .pipe(gulp.dest(destinazione + "/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'html']);
gulp.task('prod', ['serve', 'html']);
