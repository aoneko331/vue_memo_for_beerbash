import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import Button from '@/components/atoms/Button.vue'

storiesOf('components/atoms/Button', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { Button },
      template: `
        <Button>
          サンプルボタン
        </BUtton>
        `,
    }),
    {
      info: {
        summary: 'ボタン',
      },
    }
  )
  .add(
    'サイズ',
    () => ({
      components: { Button },
      template: `
        <div class="grid">
          <Button size="large">
            サンプルボタン
          </BUtton>
          <Button size="medium">
            サンプルボタン
          </BUtton>
          <Button size="small">
            サンプルボタン
          </BUtton>
         </div> 
        `,
    }),
    {
      info: {
        summary: 'ボタン',
      },
    }
  )
  .add(
    '色',
    () => ({
      components: { Button },
      template: `
        <div class="grid">
          <Button color="primary">
            サンプルボタン
          </BUtton>
          <Button color="dark">
            サンプルボタン
          </BUtton>
          <Button color="light">
            サンプルボタン
          </BUtton>
          <Button color="accent">
            サンプルボタン
          </BUtton>
         </div> 
        `,
    }),
    {
      info: {
        summary: 'ボタン',
      },
    }
  )
