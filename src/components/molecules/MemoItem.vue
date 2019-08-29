<template>
  <div>
    <modal :name="`edit-${index}`" width="90%" height="70%" class="edit-modal">
      <div class="content">
        <font-awesome-icon :icon="['far', 'window-close']" size="2x" class="close-button" @click="closeEditModal" />
        <Label class="title-label">
          タイトル
        </Label>
        <Input v-model="title" class="title-input" placeholder="タイトル" />
        <Label class="content-label">
          本文
        </Label>
        <Textarea v-model="content" class="content-input" placeholder="本文"/>
        <IconButton class="save-button" color="primary" iconName="save" @click="save">
          保存
        </IconButton>
      </div>
    </modal>
    <div class="memo-item" @click="openSetting">
      <div class="overlay" v-if="isSettingOpen" @click.stop="closeSetting">
        <IconButton color="primary" iconName="save" @click="openEditModal">
          編集
        </IconButton>
        <IconButton color="accent" iconName="save" @click="deleteMemo" class="delete-button">
          削除
        </IconButton>
      </div>
      <Label class="title">
        {{ title }}
      </Label>
      <p class="contet">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
import Label from '@/components/atoms/Label'
import Input from '@/components/atoms/Input'
import Textarea from '@/components/atoms/Textarea'
import IconButton from '@/components/molecules/IconButton'

export default {
  name: 'MemoItem',

  components: {
    Label,
    Input,
    Textarea,
    IconButton,
  },

  data() {
    return {
      title: null,
      content: null,
      isSettingOpen: false,
    }
  },

  props: {
    memo: {
      type: Object,
      required: false,
    },
    index: {
      type: Number,
      required: false,
    },
  },

  computed: {
    memoItem() {
      return {
        title: this.title,
        content: this.content,
      }
    },
  },

  methods: {
    openSetting() {
      this.isSettingOpen = true
    },

    closeSetting() {
      this.isSettingOpen = false
    },

    openEditModal() {
      this.$modal.show(`edit-${this.index}`)
      this.isSettingOpen = false
    },

    closeEditModal() {
      this.$modal.hide(`edit-${this.index}`)
    },

    save() {
      this.$emit('save-memo', this.memoItem, this.index)
      this.closeEditModal()
    },

    deleteMemo() {
      this.$emit('delete-memo', this.memoItem, this.index)
      this.closeEditModal()
    }
  },

  created() {
    if (this.memo) {
      this.title = this.memo.title
      this.content = this.memo.content
    }
  },

  watch: {
    memo() {
      this.title = this.memo.title
      this.content = this.memo.content
    },
  },
}
</script>

<style lang="scss" scoped>
.memo-item {
  border: 1px solid $devider;
  padding: 15px;
  margin: 10px 0;
  position: relative;
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
  overflow: auto;
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.delete-button {
  margin-top: 15px; 
}

.edit-modal /deep/.v--modal-box {
  overflow: auto;
}
</style>
