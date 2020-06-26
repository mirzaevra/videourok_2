module.exports = function () {
    $.gulp.task('favicon', function () {
        return $.gulp.src('source/*.ico')
            .pipe($.gulp.dest('public'))
    });
}
