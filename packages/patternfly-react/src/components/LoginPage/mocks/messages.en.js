const pageHeader = {
  alert:
    'Patternfly will be updated to 2.13.5 at 00:00 AM, 23th Sep 2018 (UTC). This Update will last for 8-12 hours, please plan in advance for this outage.',
  logo: 'Patternfly',
  caption: `This is placeholder text, only. Use this area to place any information or
    introductory message about your application that may be relevant for
    users.`
};

const footerLinks = [
  { children: 'Terms of Use', href: '#' },
  { children: 'Help', href: '#' },
  { children: 'Privacy Policy', href: '#' }
];

const cardHeader = {
  title: 'Log In to Your Account',
  selectedLanguage: { value: 'en', text: 'English' },
  availableLanguages: [{ value: 'en', text: 'English' }, { value: 'fr', text: 'French' }]
};

const signUp = {
  label: 'Need an account?',
  link: {
    label: 'Sign up'
  }
};

const rememberMe = 'Keep me logged in for 30 days';

const forgotPassword = 'Forgot password?';

const form = {
  error: 'Your account has been blocked. Contact your administrator to unblock it.',
  submitText: 'Log In'
};

const passwordField = {
  placeholder: 'Password',
  errors: {
    empty: 'Please enter your password.',
    short: 'Password too short, minimum length is 8 characters'
  },
  warnings: {
    capsLock: 'Caps lock is currently on.'
  }
};

const usernameField = {
  placeholder: 'Email address',
  errors: {
    empty: 'Please enter your email.',
    invalid: 'Your email is invalid'
  }
};

const card = {
  header: cardHeader,
  form,
  passwordField,
  usernameField,
  rememberMe,
  forgotPassword,
  signUp
};

export default {
  header: pageHeader,
  footerLinks,
  card
};
