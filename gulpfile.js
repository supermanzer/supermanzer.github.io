/*
-------------------------------------------------------------------
gh_pages/gulpfile.js

Defining tasks related to compiling CSS and JS.
-------------------------------------------------------------------
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');

var ndbcFiles = 'js/_ndbc/*.js';
var jsFiles = 'js/_js/*.js';
var jDest = 'js';

gulp.task('NDBC_JS', function(){
    return gulp.src(ndbcFiles)
        .pipe(babel())
        .pipe(concat('NDBC.js'))
        .pipe(gulp.dest(jDest))
        .pipe(rename('NDBC.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jDest));
});

gulp.task('Gen_JS', function(){
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(concat('general.js'))
        .pipe(gulp.dest(jDest))
        .pipe(rename('general.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jDest));
})

gulp.task('default', ['NDBC_JS', 'Gen_JS']);
