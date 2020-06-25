'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    gcmq: require('gulp-group-css-media-queries'),
    imagemin: require('gulp-imagemin'),
    browserSync: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('html', 'scss:source', 'scripts:lib', 'scripts', 'images:source'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('html', 'scss:public', 'scripts:lib', 'scripts', 'images:public'),
    $.gulp.parallel('watch', 'serve')
));
