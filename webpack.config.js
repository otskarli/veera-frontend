const Encore = require('@symfony/webpack-encore');
const path = require("path");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // build folder location
    .setOutputPath('public/build/')

    // asset file absolute location, needed for versioning
    .setPublicPath('/public/build')

    .enableSassLoader(function(options) {}, {
        resolveUrlLoader: false
    })

    .addStyleEntry('css/home', './assets/scss/index.scss')

    //at every run we clean build folder
    .cleanupOutputBeforeBuild()
    .disableSingleRuntimeChunk()

    //if the filenames on the build folder should be hashed
    .enableVersioning(Encore.isProduction())

    //disable assets URL compiling for windows
    //this is not needed if using linux
    .configureCssLoader(function(config) {
        config.url = false;
    })
;

module.exports = Encore.getWebpackConfig();
