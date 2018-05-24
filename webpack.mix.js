let mix = require('laravel-mix');

mix.sourceMaps();

mix.version();

mix.options({
    // не обрабатывать картинки в свойствах background-image: url(...)
    processCssUrls: false
});

mix.setPublicPath('./');

mix.js('assets/js/app.js', 'dist/app.js');

mix.combine([
    'assets/vendor/jquery-3.3.1.min.js',
    'assets/vendor/bootstrap.bundle.min.js',
    'assets/vendor/jquery.validate.min.js',
    'assets/vendor/inputmask.min.js',
    'assets/vendor/jquery.inputmask.min.js',
    'assets/vendor/owl.carousel.min.js',
    // 'assets/vendor/nouislider.min.js',
    // 'assets/vendor/jquery.fullpage.min.js',
    // 'assets/vendor/selectize.min.js',
    'dist/app.js',
], 'dist/bundle.js');

mix.sass('assets/styles/app.scss', 'dist/app.css')
    .options({
        autoprefixer: {
            options: {
                browsers: [
                    'last 40 versions'
                ]
            }
        }
    });

mix.combine([
    'assets/vendor/bootstrap.min.css',
    'assets/vendor/owl.carousel.min.css',
    // 'assets/vendor/nouislider.min.css',
    // 'assets/vendor/jquery.fullpage.min.css',
    // 'assets/vendor/selectize.default.css',
    'dist/app.css',
], 'dist/bundle.css');
