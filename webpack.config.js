const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Ensure runtime env is configured (recommended by Encore)
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

if (Encore.isProduction()) {
    // PROD ENV
    Encore
        .setOutputPath('public/build/')
        .setPublicPath('https://guatemala.mayawork.com/build')
        //.setPublicPath('https://elsalvador.mayawork.com/build')
        // keep manifest keys prefixed with "build/" when using absolute publicPath/CDN
        .setManifestKeyPrefix('build/');
} else {
    // DEV ENV
    Encore
        .setOutputPath('public/build/')
        // If you serve via MAMP at http://localhost:8888/mayaexpress/work_process_new, your assets resolve from:
        //.setPublicPath('http://localhost:8888/mayaexpress/work_process_new/public/build')
        .setPublicPath('/build')
        .setManifestKeyPrefix('build/');
}

Encore

/* =======================
 * ENTRY CONFIG (unchanged)
 * ======================= */
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/modernizr', './assets/css/portoadmin/vendor/modernizr/modernizr-custom.js')
    .addEntry('js/jquery', './assets/css/portoadmin/vendor/jquery/jquery.js')
    .addEntry('js/jquery.browser.mobile', './assets/css/portoadmin/vendor/jquery-browser-mobile/jquery.browser.mobile.js')
    .addEntry('js/popper.min', './assets/css/portoadmin/vendor/popper/umd/popper.min.js')
    .addEntry('js/bootstrap', './assets/css/portoadmin/vendor/bootstrap/js/bootstrap.js')
    .addEntry('js/bootstrap-datepicker', './assets/css/portoadmin/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js')
    .addEntry('js/common', './assets/css/portoadmin/vendor/common/common.js')
    .addEntry('js/nanoscroller', './assets/css/portoadmin/vendor/nanoscroller/nanoscroller.js')
    .addEntry('js/jquery.magnific-popup', './assets/css/portoadmin/vendor/magnific-popup/jquery.magnific-popup.js')
    .addEntry('js/jquery.placeholder', './assets/css/portoadmin/vendor/jquery-placeholder/jquery.placeholder.js')

    .addEntry('js/jquery-ui', './assets/css/portoadmin/vendor/jquery-ui/jquery-ui.js')
    .addEntry('js/jquery.ui.touch-punch', './assets/css/portoadmin/vendor/jqueryui-touch-punch/jquery.ui.touch-punch.js')
    .addEntry('js/jquery.appear', './assets/css/portoadmin/vendor/jquery-appear/jquery.appear.js')
    .addEntry('js/bootstrap-multiselect', './assets/css/portoadmin/vendor/bootstrap-multiselect/js/bootstrap-multiselect.js')

    .addEntry('js/theme', './assets/js/portoadmin/theme.js')
    .addEntry('js/custom', './assets/js/portoadmin/custom.js')
    .addEntry('js/theme.init', './assets/js/portoadmin/theme.init.js')
    .addEntry('js/jquery-validation', './assets/css/portoadmin/vendor/jquery-validation/jquery.validate.js')
    .addEntry('js/jquery-validation-localization', './assets/css/portoadmin/vendor/jquery-validation/localization/messages_es.js')

    .addEntry('js/select2', './assets/css/portoadmin/vendor/select2/js/select2.js')
    .addEntry('js/dataTables.bootstrap4.min', './assets/css/portoadmin/vendor/datatables/media/js/dataTables.bootstrap4.min.js')
    .addEntry('js/dataTables.buttons.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/dataTables.buttons.min.js')
    .addEntry('js/buttons.bootstrap4', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap4.min.js')
    .addEntry('js/buttons.colVis.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js')
    .addEntry('js/buttons.flash.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.flash.min.js')
    .addEntry('js/buttons.html5.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js')
    .addEntry('js/buttons.print.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.print.min.js')
    .addEntry('js/jszip.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/JSZip-2.5.0/jszip.min.js')
    .addEntry('js/pdfmake.min', './assets/css/portoadmin/vendor/datatables/extras/TableTools/pdfmake-0.1.32/pdfmake.min.js')
    .addEntry('js/vfs_fonts', './assets/css/portoadmin/vendor/datatables/extras/TableTools/pdfmake-0.1.32/vfs_fonts.js')
    .addEntry('js/dataTables.fixedColumns', './assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedColumns-3.2.3/js/dataTables.fixedColumns.js')
    .addEntry('js/dataTables.fixedHeader', './assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedHeader-3.1.3/js/dataTables.fixedHeader.js')
    .addEntry('js/dataTables.colReorder', './assets/css/portoadmin/vendor/datatables/extras/TableTools/ColReorder-1.4.1/js/dataTables.colReorder.js')

    .addEntry('js/highmaps', './assets/js/Highcharts-Maps/code/highmaps.js')
    .addEntry('js/highmaps-exporting', './assets/js/Highcharts-Maps/code/modules/exporting.js')
    .addEntry('js/highmaps-data', './assets/js/Highcharts-Maps/code/modules/data.js')
    .addEntry('js/highmaps-drilldown', './assets/js/Highcharts-Maps/code/modules/drilldown.js')
    .addEntry('js/highmaps-gt', './assets/js/highcharts/mapdata/countries/gt-all.js')
    .addEntry('js/highmaps-sv', './assets/js/highcharts/mapdata/countries/sv-all.js')

    .addEntry('js/highcharts', './assets/js/Highcharts82/code/highcharts.js')
    .addEntry('js/highcharts-more', './assets/js/Highcharts82/code/highcharts-more.js')
    .addEntry('js/highcharts-exporting', './assets/js/Highcharts82/code/modules/exporting.js')
    .addEntry('js/highcharts-export-data', './assets/js/Highcharts82/code/modules/export-data.js')
    .addEntry('js/highcharts-offline-exporting', './assets/js/Highcharts82/code/modules/offline-exporting.js')
    .addEntry('js/highcharts-accessibility', './assets/js/Highcharts82/code/modules/accessibility.js')
    .addEntry('js/highcharts-series-label', './assets/js/Highcharts82/code/modules/series-label.js')

    .addEntry('js/morris', './assets/css/portoadmin/vendor/morris/morris.js')
    .addEntry('js/jquery-schedule', './assets/js/dws_jquery_schedule/dist/jquery.schedule.min.js')
    .addEntry('js/password-validation', './assets/js/PasswordValidation/password-validation.js')

    // Styles (each creates its own CSS file)
    .addStyleEntry('css/app', './assets/css/app.css')
    .addStyleEntry('css/bootstrap', './assets/css/portoadmin/vendor/bootstrap/css/bootstrap.css')
    .addStyleEntry('css/animate', './assets/css/portoadmin/vendor/animate/animate.css')
    .addStyleEntry('css/all.min', './assets/css/portoadmin/vendor/font-awesome/css/all.min.css')
    .addStyleEntry('css/magnific-popup', './assets/css/portoadmin/vendor/magnific-popup/magnific-popup.css')
    .addStyleEntry('css/bootstrap-datepicker3', './assets/css/portoadmin/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css')
    .addStyleEntry('css/jquery-ui', './assets/css/portoadmin/vendor/jquery-ui/jquery-ui.css')
    .addStyleEntry('css/jquery-ui.theme', './assets/css/portoadmin/vendor/jquery-ui/jquery-ui.theme.css')
    .addStyleEntry('css/select2', './assets/css/portoadmin/vendor/select2/css/select2.css')
    .addStyleEntry('css/select2-bootstrap.min', './assets/css/portoadmin/vendor/select2-bootstrap-theme/select2-bootstrap.min.css')
    .addStyleEntry('css/bootstrap-multiselect', './assets/css/portoadmin/vendor/bootstrap-multiselect/css/bootstrap-multiselect.css')
    .addStyleEntry('css/bootstrap-colorpicker', './assets/css/portoadmin/vendor/bootstrap-colorpicker/css/bootstrap-colorpicker.css')
    .addStyleEntry('css/theme', './assets/css/portoadmin/theme.css')
    .addStyleEntry('css/default', './assets/css/portoadmin/skins/default.css')
    .addStyleEntry('css/custom', './assets/css/portoadmin/custom.css')
    .addStyleEntry('css/dataTables.bootstrap4', './assets/css/portoadmin/vendor/datatables/media/css/dataTables.bootstrap4.css')
    .addStyleEntry('css/morris', './assets/css/portoadmin/vendor/morris/morris.css')
    .addStyleEntry('css/buttons.bootstrap4', './assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/css/buttons.bootstrap4.css')
    .addStyleEntry('css/fixedHeader.dataTables', './assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedHeader-3.1.3/css/fixedHeader.dataTables.css')
    .addStyleEntry('css/fixedColumns.dataTables', './assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedColumns-3.2.3/css/fixedColumns.dataTables.css')
    .addStyleEntry('css/colReorder.dataTables', './assets/css/portoadmin/vendor/datatables/extras/TableTools/ColReorder-1.4.1/css/colReorder.dataTables.css')

    /* =======================
     * FEATURES / OPTIMIZATION
     * ======================= */
    .splitEntryChunks()
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    // requires "webpack-notifier" as a devDependency; comment if you don't want OS notifications
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // If you add PostCSS (autoprefixer), uncomment next line and add postcss.config.js
    // .enablePostCssLoader()

    // jQuery for legacy plugins (keeps $, jQuery global)
    .autoProvidejQuery()

    // Better cache-busting names for assets handled by asset modules
    .configureFilenames({
        js: 'js/[name].[contenthash:8].js',
        css: 'css/[name].[contenthash:8].css',
        assets: 'assets/[name].[hash:8][ext]',
    })

    .configureImageRule(options => { options.filename = 'images/[name].[hash:8][ext]'; })
    .configureFontRule(options  => { options.filename = 'fonts/[name].[hash:8][ext]'; })

    // Copy static images folder as-is (keeps your pattern)
    .addPlugin(new CopyWebpackPlugin({
        patterns: [
            { from: './assets/images', to: 'images' },
            // { from: './assets/fonts', to: 'fonts' },
        ]
    }))
;

module.exports = Encore.getWebpackConfig();
