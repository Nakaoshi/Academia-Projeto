const mix = require('laravel-mix');
      mix.js('resources/js/app.js', 'public/js')
      .vue()
      .sass('resources/sass/app.scss', 'public/css')
      .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    
    
    mix.webpackConfig({
        stats: {
            children: true,
        },
    });

mix.disableNotifications();