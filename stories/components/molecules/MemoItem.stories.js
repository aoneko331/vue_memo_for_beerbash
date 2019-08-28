import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import MemoItem from '@/components/molecules/MemoItem.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'

library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VModal)

storiesOf('components/molecules/MemoItem', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      data() {
        return {
          memo: {
            title: 'サンプルメモ',
            content: 'これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。',
          },
        }
      },
      components: { MemoItem },
      template: `
          <MemoItem :memo="memo" />
        `,
    }),
    {
      info: {
        summary: 'メモ表示',
      },
    }
  )
  .add(
    '編集時',
    () => ({
      data() {
        return {
          memo: {
            title: 'サンプルメモ',
            content: 'これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。これはサンプルです。',
          },
        }
      },
      components: { MemoItem },
      template: `
        <MemoItem :memo="memo" ref="index" />
      `,
      mounted() {
        this.$refs.index.openEditModal()
      },
    }),
    {
      info: {
        summary: 'メモ編集モーダル',
      },
    }
  )
