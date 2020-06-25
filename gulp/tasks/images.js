module.exports = function () {
    $.gulp.task('images:source', function () {
        return $.gulp.src('source/images/**/*')
            .pipe($.gulp.dest('public/images/'));
    });

    $.gulp.task('images:public', function () {
        return $.gulp.src('source/images/**/*')
            .pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.mozjpeg({quality: 80, progressive: true}),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]))
            .pipe($.gulp.dest('public/images/'));
    });
}
