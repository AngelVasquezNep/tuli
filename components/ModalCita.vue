<template lang="pug">
  .modal(:class="{'is-active': active}")
    .modal-background(@click="close")
    .modal-card
      header.modal-card-head
        p.modal-card-title Agendar Cita
        button.delete(aria-label="close", @click="close")
      section.modal-card-body
        h1.title ¡Excelente decisión!
        div Puede llamar al número: &nbsp;
          a.button.is-psico1(href="tel:+5591889299")
            .media
              .media-left
                p.image.is-24x24
                  img(src="~/assets/phone.png", alt="Phone")
              .media-content
                .content
                  p +5591889299
        br

        div Mandarnos un correo a: &nbsp;
          a.button(href="mailto:citas@tuli.com", target="_blank")
            .media
              .media-left
                p.image.is-24x24
                  img(src="~/assets/mail.png", alt="Mail")
              .media-content
                .content
                  p citas@tuli.com
        
        hr
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore veniam quas dolores nulla facere necessitatibus vitae quasi nihil, voluptas placeat voluptates natus hic dolorem quia ea tenetur odio unde?
      footer.modal-card-foot
        a.button.is-psico1(href="tel:+5591889299")
          .media
            .media-left
              p.image.is-24x24
                img(src="~/assets/phone.png", alt="Phone")
            .media-content
              .content
                p Llamar ahora
        a.button(href="mailto:citas@tuli.com", target="_blank")
          .media
            .media-left
              p.image.is-24x24
                img(src="~/assets/mail.png", alt="Mail")
            .media-content
              .content
                p Enviar correo
</template>

<script>
export default {
  props: ['active'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

