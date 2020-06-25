module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('public/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('source/js/**/*.js')
            .pipe($.gulp.dest('public/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}
