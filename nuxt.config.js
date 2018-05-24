module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tuli',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Tuli | Consultoria para Adolescentes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo1.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
 loading: { color: '#3B8070' },
 /*
 ** Customize the progress bar color
 */
  css: [
    'assets/main.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
