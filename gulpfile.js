/*
-------------------------------------------------------------------
gh_pages/gulpfile.js

Defining tasks related to compiling CSS and JS.
-------------------------------------------------------------------
*/

const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');

const jsFiles = '_assets/js/**/*.js';
const jsDest = 'static/js/';
const sassFiles = '_assets/scss/**/*.scss';
const cssDest = 'static/css/';

/* Compile and Minify JS */
gulp.task('scripts', function(cb){
    return gulp.src(jsFiles)
                .pipe(babel({presets: ['env']}))
            .pipe(concat('main.js'))
            .pipe(gulp.dest(jsDest))
            .pipe(rename('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(jsDest));
});

gulp.task('style', function(){
    return gulp.src(sassFiles)
                .pipe(sass())
                .pipe(gulp.dest(cssDest))
                .pipe(cleancss())
                .pipe(rename({suffix:'.min'}))
                .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(jsFiles, ['scripts', ]);
    gulp.watch(sassFiles, ['style', ]);
});

gulp.task('default', ['scripts', 'style', 'watch']);
