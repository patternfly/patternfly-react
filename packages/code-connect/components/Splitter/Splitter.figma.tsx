import figma from '@figma/code-connect';

// Documentation for Spinner can be found at https://www.patternfly.org/components/spinner

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-8230', {
  props: {
    // enum
    type: figma.enum('Type', {
      Overlay: 'overlay',
      Vertical: 'vertical'
    })
  },
  example: (props) => <>{props.type}</>
});
