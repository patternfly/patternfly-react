import { Banner } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-1443&m=dev',
  {
    props: {
      text: figma.string('✏️ Center text'),
      // enums
      color: figma.enum('Color', {
        Red: 'red',
        Orangered: 'orangered',
        Orange: 'orange',
        Gold: 'gold',
        Green: 'green',
        Cyan: 'cyan',
        Blue: 'blue',
        Purple: 'purple',
        Gray: 'gray'
      }),
      icon: figma.boolean('Icon', {
        true: figma.instance('Icon Swap'),
        false: undefined
      })
    },
    example: (props) => <Banner color={props.color}>{props.icon}{props.text}</Banner>
  }
);
