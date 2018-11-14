import { LoginPage, LoginForm } from '@patternfly/react-core';
import SimpleLoginPage from './examples/SimpleLoginPage';

export default {
  title: 'LoginPage',
  components: {
    LoginPage,
    LoginForm
  },
  examples: [{ component: SimpleLoginPage, title: 'Simple LoginPage' }],
  fullPageOnly: true
};
