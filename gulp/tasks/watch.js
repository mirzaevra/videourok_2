module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('source/*.html', $.gulp.series('html'));
        $.gulp.watch('source/scss/**/*.scss', $.gulp.series('scss:source'));
        $.gulp.watch('source/js/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('source/images/**/*', $.gulp.series('images:source'));
    });
}
