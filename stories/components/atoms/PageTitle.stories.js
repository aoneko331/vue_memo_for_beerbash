import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import PageTitle from '@/components/atoms/PageTitle.vue'

storiesOf('components/atoms/PageTitle', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { PageTitle },
      template: `
        <PageTitle>
          SAMPLE TITLE
        </PageTitle>
        `,
    }),
    {
      info: {
        summary: 'ページタイトル',
      },
    }
  )
