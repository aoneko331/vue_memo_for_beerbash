<template>
  <div class="main-container">
    <modal :name="`create-modal`" width="90%" height="70%" class="create-modal">
      <div class="content">
        <font-awesome-icon :icon="['far', 'window-close']" size="2x" class="close-button" @click="closeCreateModal" />
        <Label class="title-label">
          タイトル
        </Label>
        <Input v-model="title" class="title-input" placeholder="タイトル" />
        <Label class="content-label">
          本文
        </Label>
        <Textarea v-model="content" class="content-input" placeholder="本文"/>
        <IconButton class="save-button" color="primary" iconName="save" @click="createMemo">
          保存
        </IconButton>
      </div>
    </modal>
    <PageTitle underline class="page-title">
      Memo App
    </PageTitle>
    <IconButton size="large" iconName="plus-square" @click="openCreateModal">
      新規作成
    </IconButton>
    <MemoItem v-for="(item, index) in items" :key="index" :memo="item" :index="index" @save-memo="saveMemo" @delete-memo="deleteMemo" />
  </div>
</template>

<script>
import PageTitle from '@/components/atoms/PageTitle'
import IconButton from '@/components/molecules/IconButton'
import MemoItem from '@/components/molecules/MemoItem'
import Label from '@/components/atoms/Label'
import Input from '@/components/atoms/Input'
import Textarea from '@/components/atoms/Textarea'

export default {
  name: 'Memo',

  data() {
    return {
      title: '',
      content: '',
      isModalOpen: false,
    }
  },

  components: {
    PageTitle,
    IconButton,
    MemoItem,
    Label,
    Input,
    Textarea,
  },

  computed: {
    items() {
      return this.$store.state.memoItems
    },
  },

  methods: {
    openCreateModal() {
      this.$modal.show(`create-modal`)
    },
    closeCreateModal() {
      this.$modal.hide(`create-modal`)
    },
    saveMemo(memo, index) {
      this.$store.dispatch('save', { memo, index })
    },
    createMemo() {
      this.$store.dispatch('create', { title: this.title, content: this.content })
      this.closeCreateModal()
      this.title = ''
      this.content = ''
    },
    deleteMemo(memo, index) {
      this.$store.dispatch('delete', { memo, index })
    }
  },

  created() {
    this.$store.dispatch('fetch')
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  padding: 15px;
}

.title {
  margin: 0 0 15px;
  width: 100%;
  text-align: left;
}

.content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  margin: 30px 15px;
  position: relative;
}

.close-button {
  color: $darkPrimary;
}

.title-label, .content-label {
  width: 100%;
}

.title-input, .content-input {
  width: 100%;
}

.save-button {
  margin: 20px auto 0 auto;
}

.page-title {
  padding: 15px 0;
}

.create-modal /deep/.v--modal-box {
  overflow: auto;
}
</style>
