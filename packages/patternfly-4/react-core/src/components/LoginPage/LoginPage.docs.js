import { LoginPage, LoginForm } from '@patternfly/react-core';
import SimpleLoginPage from './examples/SimpleLoginPage';
import OneHandlerLoginPage from './examples/OneHandlerLoginPage';

export default {
  title: 'LoginPage',
  components: {
    LoginPage,
    LoginForm
  },
  variablesRoot: 'pf-c-login',
  examples: [
    { component: SimpleLoginPage, title: 'Simple LoginPage' },
    { component: OneHandlerLoginPage, title: 'One Handler for Username and Password' }
  ],
  fullPageOnly: true
};
