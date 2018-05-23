<template lang="pug">
  main
    myLanding
    myTeam

</template>

<script>

import myLanding from '~/components/Landing.vue'
import myTeam from '~/components/Team.vue'

export default {
  components: { myLanding, myTeam }
}
</script>

<style lang="scss">

</style>
