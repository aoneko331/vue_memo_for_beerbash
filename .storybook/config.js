import { configure } from '@storybook/vue';

import { addParameters } from '@storybook/vue'
addParameters({ viewport: { defaultViewport: 'iphonex' } })

function loadStories() {
    const req = require.context('../stories', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);