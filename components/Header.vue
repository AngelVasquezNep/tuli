<template lang="pug">
  section.hero.is-psico
    .hero-head
      nav.navbar
        .container
          .navbar-brand
            .navbar-item
              figure.image.logo.is-48x48
                img(src='~static/logo1.png', alt='Tuli')
            .navbar-item
              h1.subtitle.is-size-3 Tuli

    .hero-body
      .container.has-text-centered
        h1.title.is-size-1.is-psico El mejor equipo de psicólogas
        h2.subtitle Especialistas en problemas de adolescentes, niños y adultos jóvenes

    .hero-foot
      nav.navbar
        .navbar-end
          nuxt-link.navbar-item(to='/' ) Home
          nuxt-link.navbar-item(to='/preguntas') Preguntas frecuentes
          nuxt-link.navbar-item(to='/contacto') Contacto
</template>

<style lang="scss" scoped>
.logo {
  margin: 10px;
  img {
    max-height: initial;
  }
}
</style>
