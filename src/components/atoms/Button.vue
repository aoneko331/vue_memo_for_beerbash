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
      validator: (val) => {
        //ふくむ
        return []
      },
    },
    color: {
      type: 'string',
      default: 'black',
      validator() { 
        // ふくむ
      },
    },
  },

  computed: {
    classes() {
      return [`btn-s-${size}`, `btn-c-${color}`]
    },
  },
}
</script>>

<style lang="scss" scoped>

</style>