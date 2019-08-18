<template>
  <div class="main-container">
    <PageTitle underline>
      Memo App
    </PageTitle>
    <IconButton size="large" iconName="plus-square">
      新規作成
    </IconButton>
    <MemoItem v-for="(item, index) in items" :key="index" :memo="item" />
  </div>
</template>

<script>
import PageTitle from '@/components/atoms/PageTitle'
import IconButton from '@/components/molecules/IconButton'
import MemoItem from '@/components/molecules/MemoItem'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Memo',

  components: {
    PageTitle,
    IconButton,
    MemoItem,
  },

  computed: {
    ...mapState('item', 'items'),
  },

  methods: {
    ...mapActions('item', ['fetch']),
  },

  created() {
    this.fetch()
  },
}
</script>

<style lang="scss" scoped>

</style>