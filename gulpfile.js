var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    minifyCSS = require("gulp-clean-css"),
    minifyJs = require("gulp-uglify"),
    concat = require("gulp-concat"),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin');

// browser syncing
gulp.task('browser-sync', function() {
    // Start the server
    browserSync.init({
        server: "app/admin-panel"
    });
});

// minifying css fails function
gulp.task("minifiCSS", function() {
	// minifying css files using "gulp-clean-css"
	gulp.src('app/admin-panel/modules/*/*.css')
    .pipe(minifyCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist/admin-panel/modules'));
});
// minifying JS files
gulp.task('compress', function () {
    gulp.src(['app/admin-panel/modules/*/*.js'])
    .pipe(minifyJs())
    .pipe(gulp.dest('dist/admin-panel/modules'));

    // minify APP.js file and constant file
    gulp.src(['app/admin-panel/modules/*.js'])
    .pipe(minifyJs())
    .pipe(gulp.dest('dist/admin-panel/modules'));
});

gulp.task('minify_html', function() {
    gulp.src(['app/admin-panel/modules/*/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/admin-panel/modules'));
    // minify index.html file
    gulp.src('app/admin-panel/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/admin-panel'));
});

// watching static files 
gulp.task('watch', function(){
	// watching the css files and then minifying 
  	gulp.watch('app/admin-panel/modules/*/*.css').on("change", browserSync.reload);

  	// watching js files and then minifying
  	gulp.watch(["app/admin-panel/modules/*/*.js"]).on("change", browserSync.reload)
  	// Other watchers for live realoding the application
    gulp.watch(['app/admin-panel/modules/*/*.html']).on("change", browserSync.reload);
});

gulp.task("default", ['browser-sync', 'watch']);