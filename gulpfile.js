'use strict';

const gulp = require('gulp');
const master = [];

const eslint = require('gulp-eslint');
gulp.task('lint:javascript', () =>
  gulp.src('src/**.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);
master.push('lint:javascript');


gulp.task('default', master);
