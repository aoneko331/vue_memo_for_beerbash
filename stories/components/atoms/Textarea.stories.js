import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import Textarea from '@/components/atoms/Textarea.vue'

storiesOf('components/atoms/Textarea', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { Textarea },
      template: `
        <Textarea :value="null"/>
      `,
    }),
    {
      info: {
        summary: 'テキスト入力(複数行)',
      },
    }
  )
  .add(
    '値あり',
    () => ({
      components: { Textarea },
      template: `
        <Textarea value="TEST"/>
      `,
    }),
    {
      info: {
        summary: 'テキスト入力(複数行)',
      },
    }
  )
  .add(
    'プレースホルダーあり',
    () => ({
      components: { Textarea },
      template: `
        <Textarea :value="null" placeholder="てすとにゅうりょく"/>
      `,
    }),
    {
      info: {
        summary: 'テキスト入力(複数行)',
      },
    }
  )
