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

mix.js('resources/assets/scripts/main.js', 'dist/scripts')
   .sass('resources/assets/styles/main.scss', 'dist/styles');

mix.browserSync({
  proxy: config.devUrl,
  files: [
    'app/**/*.php',
    'resources/views/**/*.php',
    'dist/scripts/**/*.js',
    'dist/styles/**/*.css'
  ]
});
