<template>
  <div class="page-title">
    <slot />
  </div>
</template>

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
.page-title {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: $darkPrimary;
}

</style>
