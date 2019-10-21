/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-09 15:05:10 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-21 14:43:50
 */
import gulp from "gulp";
import babel from 'gulp-babel';
import path from 'path';
import del from 'del';
import pump from 'pump';
import gulpLoadPlugins from 'gulp-load-plugins';
import rollupIncludePaths from 'rollup-plugin-includepaths';

const plugins = gulpLoadPlugins();

const paths = {
    include: ['./**/*.js', '!dist/**', '!node_modules/**', '!gulpfile.babel.js', '!src/bin/**'],
    file: [
        'src/middlewares',
        'src/models',
        'src/routes',
        'src/services'
    ],
    entry: 'src/app.js'
};

gulp.task('clean-bundle', () =>
    del(['dist/app.js', 'dist/app.js.map', '!dist'])
);

gulp.task('clean-bundle-min', () => 
    del(['dist/app.min.js', 'dist/app.min.js.map', '!dist'])
);

gulp.task('bundle', ['clean-bundle', 'clean-bundle-min'], () => {
    gulp.src([...paths.include], { base: '.' })
        .pipe(plugins.rollup({
            input: paths.entry,
            sourcemap: true,
            format: 'es',
            plugins: [
                rollupIncludePaths({
                    paths: paths.file,
                }),
                plugins.babel({
                    exclude: 'node_modules/**',
                    // presets: ['es2015-rollup']
                })
            ]
        }))
        .pipe(plugins.babel())
        .on('error', plugins.util.log)
        .pipe(plugins.rename('app.js'))
        .pipe(plugins.sourcemaps.write('.', {
            includeContent: false,
            sourceRoot(file) {
                return path.relative(file.path, __dirname);
            }
        }))
        .pipe(gulp.dest('dist'));
});