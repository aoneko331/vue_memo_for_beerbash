import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import Input from '@/components/atoms/Input.vue'

storiesOf('components/atoms/Input', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { Input },
      template: `
        <Input :value="null"/>
      `,
    }),
    {
      info: {
        summary: 'テキスト入力',
      },
    }
  )
  .add(
    '値あり',
    () => ({
      components: { Input },
      template: `
        <Input value="TEST"/>
      `,
    }),
    {
      info: {
        summary: 'テキスト入力',
      },
    }
  )
  .add(
    'プレースホルダーあり',
    () => ({
      components: { Input },
      template: `
        <Input :value="null" placeholder="てすと"/>
      `,
    }),
    {
      info: {
        summary: 'テキスト入力',
      },
    }
  )
