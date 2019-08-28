<template>
  <div>
    <div class="modal-overlay" v-if="isModalOpen">
      <div class="edit-modal">
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
      </div>
    </div>
    <div class="memo-item" @click="openEditModal">
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
      isModalOpen: false,
    }
  },

  props: {
    memo: {
      type: Object,
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
    openEditModal() {
      this.isModalOpen = true
    },

    closeEditModal() {
      this.isModalOpen = false
    },

    save() {
      this.$emit('save-memo', this.memoItem)
      this.closeEditModal()
    },
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
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}

.edit-modal {
  background-color: #FFF;
  z-index: 150;
  width: 90%;
  position: absolute;
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
</style>
