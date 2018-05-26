<template lang="pug">
  .modal(:class="{'is-active': active}")
    .modal-background
    .modal-card.is-success
      header.modal-card-head
        p.modal-card-title Agendar Cita
        button.delete(aria-label="close", @click="close")
      section.modal-card-body
        h1.title Hola
        p Puede llamar al número: 55-55555555
        p Mandarnos un correo a: citas@tuli.com
        hr
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore veniam quas dolores nulla facere necessitatibus vitae quasi nihil, voluptas placeat voluptates natus hic dolorem quia ea tenetur odio unde?
      footer.modal-card-foot
        button.button.is-success Save changes
        button.button(@click="close") Cancel
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

