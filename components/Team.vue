<template lang="pug">
  #team
    .hero.is-primary
      .hero-body
        .container
          h2.subtitle.is-size-3.has-text-white Nuestro equipo
    .columns
      .column
        .hero
          .hero-body
            .container
              .columns
                .column
                  .columns
                    .column
                      p Nuestro equipo cuenta con varios años de experiencia tratando con éxito los más difíciles casos de conducta.
                      p Son egresadas de la Universidad Nacional Autónoma de México.
                  hr
                  .columns
                    .column
                      h2.subtitle.has-text-psico.has-text-weight-bold Lic. Alejandra Estefanía Mendoza Rodríguez.
                      .content
                        p Especialista en:
                        ul
                          li Especialidad 1
                          li Especialidad 2
                          li Especialidad 3
                      hr
                      h2.subtitle.has-text-psico.has-text-weight-bold Lic. Karen Pedraza Zavala
                      .content
                        p Especialista en:
                        ul
                          li Especialidad 1
                          li Especialidad 2
                          li Especialidad 3

                .column.is-one-fifth
                  figure.image.unam
                    img(src='~/static/unam.jpg', alt="UNAM")
</template>

<style lang="scss" scoped>
  .unam img{
    width: 100%;
    max-width: 250px;
  }
</style>

