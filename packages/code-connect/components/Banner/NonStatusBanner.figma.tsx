import figma from '@figma/code-connect';
import { Banner } from '@patternfly/react-core';

// Documentation for Banner can be found at https://www.patternfly.org/components/banner

figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-1443',
  {
    props: {
      // string
      text: figma.string('✏️ Center text'),

      // enum
      color: figma.enum('Color', {
        Red: 'red',
        Orangered: 'orangered',
        Orange: 'orange',
        Yellow: 'yellow',
        Green: 'green',
        Teal: 'teal',
        Blue: 'blue',
        Purple: 'purple'
      })
    },
    example: (props) => <Banner color={props.color}>{props.text}</Banner>
  }
);
