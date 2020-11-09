const mix = require('laravel-mix');






mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                '#': __dirname + '/node_modules',
                '@': __dirname + '/resources'
            },
        },
    });