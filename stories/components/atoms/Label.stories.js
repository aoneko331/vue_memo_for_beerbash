import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import Label from '@/components/atoms/Label.vue'

storiesOf('components/atoms/Label', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { Label },
      template: `
        <Label>
          SAMPLE
        </Label>
      `,
    }),
    {
      info: {
        summary: 'ラベル',
      },
    }
  )
