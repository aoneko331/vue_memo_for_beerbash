<template>
  <Button class="icon-button" :size="size" :color="color">
    <!-- いいかんじにアイコン指定 -->
    <font-awesome-icon :icon="iconName" />
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
        ['primary', 'dark', 'light', 'accent'].includes(val)
      },
    },
    iconName: {
      type: String,
      required: true,
    },
  },

  computed: {
    icon() {
      // いいかんじにアイコン指定できるようにする
      return ''
    },
  },
}
</script>
