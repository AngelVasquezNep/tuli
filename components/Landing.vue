<template lang="pug">
  #Langin
    .hero.is-grey-light
      .hero-body
        .container
          .content
            h2.subtitle.has-text-centered.is-size-2 Bienvenidos
          hr
          .columns
            .column
              .content.has-text-centered
                p.subtitle.is-4 Sabemos los difícil que puede llegar a ser la vida y estamos para ayudarte, a partir de hoy tus problemas empezarán a mejorar.
          br
          .columns
            .column
              .box.has-text-centered
                .content
                  p.title.is-4 Atendemos los problemas más frecuentes como lo son:
          br

          .columns
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/004.png", alt="Cutting")
                  .column
                    .content.has-text-justified
                      p.title Conductas autolesivas (Cutting).
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae. Saepe voluptates nihil doloribus. Expedita.
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/012.png", alt="Deserción escolar")
                  .column
                    .content.has-text-justified
                      p.title Deserción escolar.
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae. Saepe voluptates nihil doloribus. Expedita.

          .columns
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/010.png", alt="rendimiento académico")
                  .column
                    .content.has-text-justified
                      p.title Bajo rendimiento académico.
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae. Saepe voluptates nihil doloribus. Expedita.
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/006.png", alt="Consumo")
                  .column
                    .content.has-text-justified
                      p.title Conductas de riesgo (como consumo de sustancias).
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae. 

          .columns
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/008.png", alt="Sexo")
                  .column
                    .content.has-text-justified
                      p.title Actividad sexual sin protección.
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae.
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/003.png", alt="Suicidio")
                  .column
                    .content.has-text-justified
                      p.title Intento de suicidio.
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae. 

          .columns
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/002.png", alt="Divorcio de los padres")
                  .column
                    .content.has-text-justified
                      p.title Divorcio de los padres.
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum dolores tempore ad aliquam, eveniet pariatur totam laboriosam minima magni unde optio quas illum beatae. Saepe voluptates nihil doloribus. Expedita.
            .column
              .box
                .columns
                  .column.is-4
                    figure.is-max
                      img(src="~/assets/icons/020.png", alt="Ayuda")
                  .column
                    .content.has-text-justified
                      p.title Y muchos más...
                      p Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nihil cumque harum at consequuntur porro corrupti voluptate, laborum qui, dolorum odit cum consectetur quaerat reprehenderit maxime sapiente? Ipsa, impedit cumque. 

          .columns
            .column
              .box.has-text-centered
                h2.title.is-1 Somos lo que necesitas
                .media
                  .media-content
                    .content.has-text-centered
                      p Llamanos justo ahora para agendar una cita, con gusto te ayudaremos a recobrar tu tranquilidad y bienestar.
                      p Regalate la oportunidad de sentirte bien nuevamente y de que tu familia sea feliz de nuevo.
                  .media-right
                      figure.image.is-128x128
                        img(src="~/assets/icons/017.png", alt="Ayuda")
                br
                button.button.is-large.is-psico Agendar Cita
          br
          .columns
            .column
              .box
                .content.has-text-centered
                  br
                  p.is-size-4 
                    strong Con un módelo terapéutico de Terapia Estratégica (Terapia Breve) para obtener los mejores 
                      | 
                      u resultados en el MENOR TIEMPO POSIBLE.
                  br
          br
</template>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.title.is-1 {
  color: $psico !important;
}

.is-max img{
  width: 100%;
  max-width: 256px;
  height: inherit;
}

</style>

