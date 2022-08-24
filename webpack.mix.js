const mix = require("laravel-mix");
const path = require("path");
mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
    ])
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve("resources/assets/sass"),
            },
        },
        stats: {
            children: true,
        },
    });

mix.disableNotifications();
