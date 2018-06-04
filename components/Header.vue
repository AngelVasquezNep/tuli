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
              h1.subtitle.is-size-1.title-logo Tuli

    .hero-body
      .container.has-text-centered
        h1.title.is-size-1.is-psico El mejor equipo de psicólogas
        h2.subtitle Especialistas en problemas de adolescentes, niños y adultos jóvenes

    .hero-foot
      nav.navbar(role='navigation', aria-label='main navigation')
        .navbar-brand
          a.navbar-burger(
              @click="showMenu"
              :class="{'is-active': isShowMenu}",
              role='button',
              aria-label='menu',
              aria-expanded='false'
            )
            span(aria-hidden='true')
            span(aria-hidden='true')
            span(aria-hidden='true')
        .navbar-menu( :class="{'is-active': isShowMenu}")
          .navbar-end(@click="closeMenu")
            nuxt-link.navbar-item(to='/') Home
            nuxt-link.navbar-item(to='/preguntas') Preguntas frecuentes
            nuxt-link.navbar-item(to='/contacto') Contacto
</template>

<script>
export default {
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu
    },
    closeMenu() {
      this.isShowMenu = false
    }
  }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Salsa');
.logo {
  margin: 10px;
  img {
    max-height: initial;
  }
}

.title-logo {
  font-family: 'Salsa', cursive;
}

</style>
