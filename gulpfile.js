/**
 * @author: Artha Prihardana 
 * @Date: 2019-06-09 15:05:10 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-10-22 13:45:35
 */
const { series, src, dest } = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const path = require('path');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');
const rollupIncludePaths = require('rollup-plugin-includepaths');

const plugins = gulpLoadPlugins();

const paths = {
    include: ['./**/*.js', '!dist/**', '!node_modules/**', '!gulpfile.babel.js', '!src/bin/**'],
    file: [
        'src/config',
        'src/controllers',
        'src/models',
        'src/models/mysql',
        'src/routes',
        'src/services'
    ],
    entry: 'src/app.js'
};

function clean() {
    return del(['dist/app.js', 'dist/app.js.map', '!dist'])
}

function cleanMinified() {
    return del(['dist/app.min.js', 'dist/app.min.js.map', '!dist'])
}

function build() {
    return src([...paths.include], { base: '.' })
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
                })
            ]
        }))
        .pipe(plugins.babel())
        .pipe(javascriptObfuscator({
            compact: true
        }))
        .on('error', plugins.util.log)
        .pipe(plugins.rename('app.js'))
        .pipe(plugins.sourcemaps.write('.', {
            includeContent: false,
            sourceRoot(file) {
                return path.relative(file.path, __dirname);
            }
        }))
        .pipe(dest('dist'));
}

exports.clean = clean;
exports.cleanMinified = cleanMinified;
exports.build = series(clean, cleanMinified, build)