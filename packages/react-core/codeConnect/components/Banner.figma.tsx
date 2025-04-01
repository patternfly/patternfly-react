import { Banner } from '@patternfly/react-core/dist/js/components/Banner';
import figma from '@figma/code-connect';

/** Status banner example */
figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-937&m=dev',
  {
    props: {
      className: figma.className([
        // automate size class application
        figma.enum('Status', {
          Success: 'success',
          Warning: 'warning',
          Danger: 'danger',
          Info: 'info',
          Custom: 'custom'
        })
      ])
    },
    example: (props) => {
      <Banner className={props.className} />;
    }
  }
);

/** Non-Status banner example */
figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-1443&m=dev',
  {
    props: {
      className: figma.className([
        // automate size class application
        figma.enum('Color', {
          Red: 'red',
          Orangered: 'orangered',
          Orange: 'orange',
          Gold: 'gold',
          Green: 'green',
          Cyan: 'cyan',
          Blue: 'blue',
          Purple: 'purple',
          Gray: 'gray'
        })
      ])
    },
    example: (props) => {
      <Banner className={props.className} />;
    }
  }
);
