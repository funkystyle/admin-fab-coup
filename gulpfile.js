var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    ngAnnotate = require('gulp-ng-annotate'),
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

// browser sync from dist folder
gulp
    .task("distSync", function() {
        browserSync.init({
            server: "dist/admin-panel"
        })
    });

// ---- Minify html files ----
gulp.task('minify_html', function() {
    gulp.src(['app/admin-panel/modules/*/*/*.html', 'app/admin-panel/modules/*/*.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/admin-panel/modules'));

    gulp.src(['app/admin-panel/*html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/admin-panel'));
});


// ---- Minify CSS files ----
gulp.task("minify_css", function() {
    // minifying css files using "gulp-clean-css"
    gulp.src(['app/admin-panel/modules/*/*/*.css', 'app/admin-panel/modules/*/*.css'])
        .pipe(minifyCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/admin-panel/modules'));
});
// minifying JS files
gulp.task('minify_js', function() {
    gulp.src(['app/admin-panel/modules/*/*/*.js', 'app/admin-panel/modules/*/*.js', 'app/admin-panel/modules/*.js'])
        .pipe(ngAnnotate())
        .pipe(minifyJs())
        .pipe(gulp.dest('dist/admin-panel/modules'));
});

// watching static files 
gulp.task('watch', function() {
    // watching HTML files and then minifying
    gulp.watch(['app/admin-panel/modules/*/*/*.html', 'app/admin-panel/modules/*/*.html', 'app/admin-panel/*html'], function() {
        gulp.run("minify_html", browserSync.reload);
    });

    // watching JS files and then minifying
    gulp.watch([
        'app/admin-panel/modules/*/*/*.js',
        'app/admin-panel/modules/*/*.js',
        'app/admin-panel/modules/*.js'
    ], function() {
        gulp.run("minify_js", browserSync.reload);
    });

    // watching CSS files and then minifying
    gulp.watch(['app/admin-panel/modules/*/*/*.css', 'app/admin-panel/modules/*/*.css'], function() {
        gulp.run("minify_css", browserSync.reload);
    });
});

gulp.task("default", ['browser-sync', 'watch']);


gulp.task("dist", ["distSync", "watch"])