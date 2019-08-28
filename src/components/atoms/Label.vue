<template>
  <p class="atom-label">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'Label',
}
</script>

<style lang="scss" scoped>
.atom-label {
  font-size: 16px;
  font-weight: bold;
}
</style>
