module.exports = function () {
    $.gulp.task('serve', async function () {
        $.browserSync.init({
            server: {
                baseDir: "./public",
                directory: true
            },
            notify: false
        });
    });
}
