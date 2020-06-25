module.exports = function () {
    $.gulp.task('html', function () {
        return $.gulp.src('source/*.html')
            .pipe($.gulp.dest('public'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}
