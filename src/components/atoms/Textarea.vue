<template>
  <textarea class="atom-textarea" :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: 'Input',

  props: {
    value: {
      type: String || null,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'テキスト入力欄',
    },
  },
}
</script>

<style lang="scss" scoped>
.atom-textarea {
  border: 1px solid $devider;
  min-height: 150px;
  font-size: 14px;
  padding: 10px 15px;
  box-sizing: border-box;
}
</style>
