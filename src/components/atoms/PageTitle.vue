<template>
  <div class="page-title">
    <slot />
  </div>
</template>>

<script>
export default {
  name: 'PageTitle',

  props: {
    underline: {
      type: Boolean,
      default: false,
    },
  },
}
</script>>

<style lang="scss" scoped>

</style>
