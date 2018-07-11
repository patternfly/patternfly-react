module.exports = {
  Button: {
    package: '@patternfly/react-core',
    props: {
      bsStyle: {
        name: 'variant',
        values: {
          primary: 'primary',
          link: 'link',
          danger: 'danger'
        },
        defaultValue: 'secondary',
        fallbackValue: 'secondary'
      },
      active: 'isActive',
      componentClass: 'component',
      disabled: 'isDisabled',
      block: 'isBlock',
      bsClass: { remove: true }
    },
    unsupportedProps: ['bsSize']
  }
};
