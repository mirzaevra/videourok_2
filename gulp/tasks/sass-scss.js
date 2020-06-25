module.exports = function () {
    $.gulp.task('scss:source', function () {
        return $.gulp.src(['source/scss/**/*.scss', '!source/scss/**/*/_*.scss'])
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                'include css': true
            })).on('error', $.gp.notify.onError())
            .pipe($.gp.autoprefixer(['last 15 versions', '> 1%', 'ie 10'], {cascade: false}))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('public/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scss:public', function () {
        return $.gulp.src(['source/scss/**/*.scss', '!source/scss/**/*/_*.scss'])
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gcmq())
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('public/css/'));
    });
}
