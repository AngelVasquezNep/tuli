<template lang="pug">
  div
    myHeader
    nuxt
    myContacto
</template>

<script>
import myHeader from '~/components/Header.vue'
import myContacto from '~/components/Contacto.vue'

export default {
  components: { myHeader, myContacto }
}
</script>


<style lang="scss">
@import '~assets/variables.scss';
</style>
