import Vue from 'vue'
import Vuex from 'vuex'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import Memo from '@/components/Memo.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'

library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VModal)
Vue.use(Vuex)

const storeProps = {
  state: {
    memoItems: [
      {
        title: 'sample1',
        content: 'さんぷるめもさんぷるめもさんぷるめもさんぷるめもさんぷるめも',
      },
      {
        title: 'sample2',
        content: 'サンプルメモサンプルメモサンプルメモサンプルメモサンプルメモ',
      },
      {
        title: 'sample3',
        content: 'さんぷるめもさんぷるめもさんぷるめもさんぷるめもさんぷるめも',
      },
    ],
  },
}

storiesOf('components/Memo', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      store: new Vuex.Store(storeProps),
      components: { Memo },
      template: `
          <Memo />
        `,
    }),
    {
      info: {
        summary: 'メモ表示',
      },
    }
  )
