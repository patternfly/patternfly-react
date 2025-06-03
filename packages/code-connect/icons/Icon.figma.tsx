import figma from '@figma/code-connect';
import { Icon } from '@patternfly/react-core';

figma.connect(
  Icon,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/9QzcMKMR7FX7HXlc0sRUSp/PatternFly-6--Components?node-id=198-1573&t=dP3Et2mI3FtI6IEP-11',
  {
    props: {
      // Comprehensive icon size mapping
      size: figma.enum('Icon Size', {
        'Body - Small': 'bodySm',
        'Body - Default': 'bodyDefault',
        'Body - Large': 'bodyLg',

        // Heading Sizes
        'Heading - H1': 'heading_3xl',
        'Heading - H2': 'heading_2xl',
        'Heading - H3': 'headingXl',
        'Heading - H4': 'headingLg',
        'Heading - H5': 'headingMd',
        'Heading - H6': 'headingSm'
      }),
      children: figma.instance('*')
    },

    example: (props) => <Icon size={props.size}>{props.children}</Icon>
  }
);
