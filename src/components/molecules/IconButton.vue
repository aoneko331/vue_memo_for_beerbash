<template>
  <Button class="icon-button" :size="size" :color="color" v-on="$listeners">
    <font-awesome-icon :icon="icon" class="button-icon" />
    <slot />
  </Button>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {
  name: 'IconButton',

  components: {
    Button,
  },

  props: {
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
        return ['primary', 'dark', 'light', 'accent'].includes(val)
      },
    },
    iconName: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      return [`far`, `${this.iconName}`]
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-button {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

.button-icon {
  margin-right: 10px;
}
</style>
