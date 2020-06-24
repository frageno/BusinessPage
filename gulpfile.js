var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('buildcss', () => {
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./prod-assets'));
})

gulp.task('watch', ()=>{
    gulp.watch('./dev-assets/**/*.scss',gulp.series('buildcss'));
})

// Comipler to CSS