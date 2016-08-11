"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var exists = require('path-exists').sync;
var mainBowerFiles = require('main-bower-files');

var jsFiles = ['app/**/*.js', '!app/bower_components/**/*.js'];

var prodDest = 'dist';

//global array to store a name of all bower dependencies (files) to replace scripts
//paths in index.html for prod
var bowerFileNames = [];

gulp.task('default', ['clean'], function() {
    gulp.start('scripts', 'minify-css', 'replaceSrciptLink', 'copySrc', 'copy-bower-dep', 'images');
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('app.min.js'))        
        .pipe(uglify())
        .pipe(gulp.dest(prodDest));
});

gulp.task('minify-css', function() {
    return gulp.src('app/*.css')
        .pipe(cleanCSS({ compatibility: 'ie9' }))
        .pipe(gulp.dest(prodDest));
});

gulp.task('images', function() {
    gulp.src('app/img/icon/*')
        .pipe(imagemin())
        .pipe(gulp.dest(prodDest + '/img/icon'));
});

gulp.task('copySrc', function() {
    gulp.src(['app/views/**/*', 'app/favicon.ico'], { base: './app' })
        .pipe(gulp.dest(prodDest));
});

gulp.task('copy-bower-dep', function() {

    // Replace files by their minified version when possible
    var bowerWithMin = mainBowerFiles(['**/*', '!**/*.less', '!**/*2010-2020*'], {
            "overrides": {
                "bootstrap": {
                    "main": [
                        "dist/css/bootstrap.css",
                        "dist/js/bootstrap.js"
                    ]
                },
                "angular-loading": {
                    "main": [
                        "angular-loading.css",
                        "angular-loading.js"
                    ]
                },
                "moment": {
                    "main": [
                        "min/moment.min.js"
                    ]
                }
            }
        })
        .map(function(path) {
            var newPath = path.replace(/.([^.]+)$/g, '.min.$1');
            var verifiedPath = exists(newPath) ? newPath : path;

            //Get filenames into global array
            bowerFileNames.push(prodDest + '/' + verifiedPath.substring(verifiedPath.lastIndexOf("/") + 1));
            return verifiedPath;
        });

    // Copy them to another directory
    gulp.src(bowerWithMin).pipe(gulp.dest('./dist/dist'));
});

gulp.task('replaceSrciptLink', function() {
    gulp.src('app/index.html')
        .pipe(htmlreplace({
            'app-js': 'app.min.js',
            'bower': bowerFileNames
        }))
        .pipe(gulp.dest(prodDest));
});

gulp.task('clean', function() {
    return gulp.src(prodDest, { read: false })
        .pipe(clean());
});
