module.exports = {
    mode: 'universal',
    head: {
        title: 'Центрофинанс',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Центрофинанс' }
        ]
    },
    css: [
        './assets/css/normalize.css',
        './assets/css/main.css'
    ],
    build: {
        postcss: {
            'postcss-import': {},
            'autoprefixer': {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'android 4']
            },
            'cssnano': {
                preset: 'default'
            }
        }
    }
}