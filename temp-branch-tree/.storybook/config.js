import { configure } from '@storybook/react';
import '@patternfly/react-core/dist/styles/base.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
