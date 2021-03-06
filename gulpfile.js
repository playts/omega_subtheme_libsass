'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var importer = require('node-sass-globbing');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var browserSync = require('browser-sync').create();
var bulkSass = require('gulp-sass-glob-import');

var sass_config = {
  importer: importer,
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
    'node_modules/singularitygs/stylesheets/',
    'node_modules/compass-mixins/lib/'
  ]
};

gulp.task('browser-sync', function() {
    browserSync.init({
        //injectChanges: true,
        proxy: "127.0.0.1/your_Drupal_directory"
    });
    gulp.watch("./sass/**/*.scss", ['sass']).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(bulkSass ({ extensions: ['.scss'] }))
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(sourcemaps.write('.'))
    // .pipe(cssmin())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', [ 'browser-sync']);