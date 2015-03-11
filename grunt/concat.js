module.exports = {
    js: {
        src: [
            'lib/jquery/jquery.js',
            'lib/dmf/dmf.js',
            'js/config/**/*.js',
            'js/templates/**/*.js',
            'js/classes/**/*.js',
            'js/modules/**/*.js',
            'js/functions/**/*.js',
        ],
        dest: 'dist/js/production.js',
    },
    ie: {
        src: ['js/ie/**/*.js'],
        dest: 'dist/js/shiv.js'
    }
}
