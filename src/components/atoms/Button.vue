<template>
  <div class="atom-button" v-on="$listener" :class="classes">
    <slot />
  </div>
</template>>

<script>
export default {
  name: 'Button',

  porps: {
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return ['large', 'medium', 'small'].includes(val)
      },
    },
    color: {
      type: String,
      default: 'primary',
      validator(val) {
        ['primary', 'dark', 'light', 'accent'].includes(val)
      },
    },
  },

  computed: {
    classes() {
      return [`btn-s-${this.size}`, `btn-c-${this.color}`]
    },
  },
}
</script>>

<style lang="scss" scoped>

</style>
