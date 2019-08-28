import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import IconButton from '@/components/molecules/IconButton.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

storiesOf('components/molecules/IconButton', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { IconButton },
      template: `
        <div class="grid"">
          <IconButton iconName="plus-square">
            サンプルボタン
          </IconButton>
          <IconButton iconName="save">
            サンプルボタン
          </IconButton>
          <IconButton iconName="edit">
            サンプルボタン
          </IconButton>
         </div> 
        `,
    }),
    {
      info: {
        summary: 'ボタン',
      },
    }
  )
