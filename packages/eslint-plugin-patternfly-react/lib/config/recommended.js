module.exports = {
  plugins: ['patternfly-react'],
  rules: {
    'patternfly-react/import-default-name': [
      'error',
      {
        classnames: 'classNames',
        'prop-types': 'PropTypes'
      }
    ]
  }
};
