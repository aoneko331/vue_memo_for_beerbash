<template>
  <div class="home">
    <Memo />
  </div>
</template>

<script>
// @ is an alias to /src
import Memo from '@/components/Memo.vue'

export default {
  name: 'home',
  components: {
    Memo,
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 80vw;
  background-color: #FFF;
  margin: 40px auto;
}
</style>
