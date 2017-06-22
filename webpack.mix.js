const { mix } = require('laravel-mix');
const config = require('./resources/assets/config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        modules: [
            'node_modules'
        ],
        enforceExtension: false
    }
});

mix.js('resources/assets/scripts/main.js', 'dist/scripts')
    .sass('resources/assets/styles/main.scss', 'dist/styles')
    .options({
        processCssUrls: false
    })
    .sass('resources/assets/styles/critical.scss', 'dist/styles')
    .options({
        processCssUrls: false
    })
    .copyDirectory('resources/assets/fonts/', 'dist/fonts')
    .copyDirectory('resources/assets/images/', 'dist/images');

mix.browserSync({
    proxy: config.devUrl,
    delay: 500,
    files: [
        'app/**/*.php',
        'resources/views/**/*.php',
        'dist/scripts/**/*.js',
        'dist/styles/**/*.css'
    ]
});
