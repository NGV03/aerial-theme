import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import del from 'del';

//using gulp build tool to compile scss to css
const paths = {
    styles: {
        src: 'private/sass/main.scss',
        dest: 'assets/css'
    },
    scripts: {
        src: 'private/js/main.js',
        dest: 'assets/js'
    }
};

export const clean = () => del([ 'assets/css/main.css', 'assets/js/main.js' ]);

export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest))
}

export function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel())
        .pipe(gulp.dest(paths.scripts.dest))
}

function watchFiles() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}
export { watchFiles as watch };

const build = gulp.series(clean, gulp.parallel(styles, scripts));

export default build;

