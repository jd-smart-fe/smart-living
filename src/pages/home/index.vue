<template>
  <div>
    <v-header></v-header>
    <v-content></v-content>
  </div>
</template>

<script>
import VHeader from '@/components/Header'
import VContent from '@/components/Content'

export default {
  // name: 'Home',
  components: {
    VHeader,
    VContent
  },
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
