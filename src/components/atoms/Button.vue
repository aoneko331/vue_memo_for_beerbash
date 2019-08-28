<template>
  <div class="atom-button" v-on="$listeners" :class="classes">
    <slot />
  </div>
</template>>

<script>
export default {
  name: 'Button',

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
  },

  computed: {
    classes() {
      return [`btn-s-${this.size}`, `btn-c-${this.color}`]
    },
  },
}
</script>>

<style lang="scss" scoped>
.atom-button {
  border: none;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
}

$height: (
  large: 45px,
  medium: 40px,
  small: 30px,
);

$minWidth: (
  large: 240px,
  medium: 240px,
  small: 200px,
);

$bgcolors: (
  primary: $primary,
  dark: $darkPrimary,
  light: $rightPrimary,
  accent: $accent,
);

$fontcolors: (
  primary: $lightText,
  dark: $lightText,
  light: $text,
  accent: $text,
);

@each $key, $value in $height {
  .btn-s-#{$key} {
    height: #{$value};
    min-width: map-get($minWidth, #{$key})
  }
}

@each $key, $value in $bgcolors {
  .btn-c-#{$key} {
    background-color: #{$value};
    color: map-get($fontcolors, #{$key})
  }
}
</style>
