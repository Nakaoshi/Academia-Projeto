const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/alunos/alunos.js", "public/js/alunos/alunos.js")
    .js("resources/js/usuarios/usuarios.js", "public/js/usuarios/usuarios.js")
    .js(
        "resources/js/funcionarios/funcionarios.js",
        "public/js/funcionarios/funcionarios.js"
    )
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
