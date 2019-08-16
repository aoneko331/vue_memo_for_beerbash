<template>
  <Button class="icon-button" :size="size" :color="color">
    <!-- いいかんじにアイコン指定 -->
    <slot />
  </Button>
</template>

<script>
import Button from '@/components/atom/Button'

export default {
  name: 'IconButton',

  components: {
    Button,
  },

  props: {
    size: {
      type: String,
      default: 'medium',
      validator() {
        // Buttonとおなじやつ
      },
    },
    color: {
      type: String,
      default: 'black',
      validator() {
        // Buttonとおなじ
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