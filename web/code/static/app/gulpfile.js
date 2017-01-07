'use strict'

var gulp = require('gulp');
// var livereload = require('gulp-livereload');
// var browserify = require('gulp-browserify');
// var browserify = require('gulp-browserify-globs');
var browserify = require('browserify');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cssimport = require("gulp-cssimport");
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var remember = require('gulp-remember');
var path = require('path');
var cached = require('gulp-cached');
var react = require('gulp-react');
var requirejsOptimize = require('gulp-requirejs-optimize');
var reactify = require('reactify');
var browserSync = require('browser-sync').create();
var notify = require("gulp-notify");
var combine = require('stream-combiner2').obj;
var source = require("vinyl-source-stream");
var multipipe = require('multipipe');
var plumber = require('gulp-plumber');
var historyApiFallback = require('connect-history-api-fallback');
var imagemin = require('gulp-imagemin');
var jsmin = require('gulp-jsmin');
var uglify = require('gulp-uglify');
var pump = require('pump');
var buffer = require('vinyl-buffer');
var rev = require('gulp-rev-mtime');

gulp.task('copyHtml', function() {
    return gulp.src('src/*.html')
        .pipe(cached('copyHtml'))
        .pipe(remember('copyHtml'))
        .pipe(debug({
            title: 'src'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(debug({
            title: 'dest'
        }));
});


gulp.task('browserify', function() {
    return browserify('src/js/main.jsx', {
            transform: reactify,
            debug: true
        }).bundle()
        .on('error', notify.onError(function(err) {
            return {
                title: "Gulp",
                message: err.message,
                sound: "Beep",
                subTitle: err.name
            };
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('browserify2', function() {
    return browserify('src/js/main.jsx', {
        transform: reactify,
        debug: true
    }).bundle()
        .on('error', notify.onError(function(err) {
            return {
                title: "Gulp",
                message: err.message,
                sound: "Beep",
                subTitle: err.name
            };
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/static/js'));
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('imagemin2', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/static/img'));
});

gulp.task('styles', function() {
    return gulp.src('src/css/**/*.*')
        .pipe(cached('styles'))
        .pipe(sourcemaps.init())
        .pipe(remember('styles'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(debug({
            title: 'dest'
        }));
})
gulp.task('styles2', function() {
    return gulp.src('src/css/**/*.*')
        .pipe(cached('styles2'))
        .pipe(sourcemaps.init())
        .pipe(remember('styles2'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/static/css'))
        .pipe(debug({
            title: 'dest'
        }));
})

gulp.task('copyFonts', function () {
	return gulp.src('src/fonts/**/*.*')
		.pipe(cached('copyFonts'))
		.pipe(remember('copyFonts'))
		.pipe(gulp.dest('dist/fonts'));
});
gulp.task('copyFonts2', function () {
    return gulp.src('src/fonts/**/*.*')
        .pipe(cached('copyFonts2'))
        .pipe(remember('copyFonts2'))
        .pipe(gulp.dest('dist/static/fonts'));
});
gulp.task('copyAdmin', function () {
    return gulp.src('src/admin/**/*.*')
        .pipe(cached('copyAdmin'))
        .pipe(remember('copyAdmin'))
        .pipe(gulp.dest('dist/admin'));
});

gulp.task('rev2', function () {
    return gulp.src('dist/index.html')
        .pipe(rev({
            'cwd': 'dist/',
            'suffix': 'rev',
            'fileTypes': ['css', 'js']
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('clean', function() {
    return del('dist');
})



gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "dist",
            middleware: [historyApiFallback()]
        }
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('src/*.*', gulp.series('copyHtml')).on('unlink', function(filepath) {
        remember.forget('copyHtml', path.resolve(filepath));
        delete cached.caches.copyHtml[path.resolve(filepath)];
    });
    gulp.watch('src/img/*.*', gulp.series('imagemin')).on('unlink', function(filepath) {
        remember.forget('imagemin', path.resolve(filepath));
        delete cached.caches.imagemin[path.resolve(filepath)];
    });
    gulp.watch('src/img/*.*', gulp.series('imagemin2')).on('unlink', function(filepath) {
        remember.forget('imagemin2', path.resolve(filepath));
        delete cached.caches.imagemin2[path.resolve(filepath)];
    });
    gulp.watch('src/css/**/*.*', gulp.series('styles')).on('unlink', function(filepath) {
        remember.forget('styles', path.resolve(filepath));
        delete cached.caches.styles[path.resolve(filepath)];
    });
    gulp.watch('src/css/**/*.*', gulp.series('styles2')).on('unlink', function(filepath) {
        remember.forget('styles2', path.resolve(filepath));
        delete cached.caches.styles2[path.resolve(filepath)];
    });
    gulp.watch('src/fonts/**/*.*', gulp.series('copyFonts')).on('unlink', function(filepath) {
        remember.forget('copyFonts', path.resolve(filepath));
        delete cached.caches.copyImg[path.resolve(filepath)];
    });
    gulp.watch('src/fonts/**/*.*', gulp.series('copyFonts2')).on('unlink', function(filepath) {
        remember.forget('copyFonts2', path.resolve(filepath));
        delete cached.caches.copyFonts2[path.resolve(filepath)];
    });
    gulp.watch('src/admin/**/*.*', gulp.series('copyAdmin')).on('unlink', function(filepath) {
        remember.forget('copyAdmin', path.resolve(filepath));
        delete cached.caches.copyAdmin[path.resolve(filepath)];
    });
    gulp.watch('src/js/**', gulp.series('browserify')).on('unlink', function(filepath) {
        remember.forget('browserify', path.resolve(filepath));
        delete cached.caches.copyImg[path.resolve(filepath)];
    });
    gulp.watch('src/js/**', gulp.series('browserify2')).on('unlink', function(filepath) {
        remember.forget('browserify2', path.resolve(filepath));
        delete cached.caches.browserify2[path.resolve(filepath)];
    });
    gulp.watch('src/js/**', gulp.series('rev2'));
    gulp.watch('src/css/**/*.*', gulp.series('rev2'));
})


gulp.task('default', gulp.series('clean', gulp.parallel('copyHtml', 'styles', 'styles2', 'browserify', 'browserify2', 'imagemin','imagemin2', 'copyFonts', 'copyFonts2', 'copyAdmin'), gulp.parallel('rev2','watch' ,'serve')));
