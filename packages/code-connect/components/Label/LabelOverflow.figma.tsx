import figma from '@figma/code-connect';

// Documentation for Label can be found at https://www.patternfly.org/components/label

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1042', {
  props: {
    // string
    text: figma.string('Text'),

    children: figma.children('*')
  },
  example: (props) => <>{props.children}</>
});
