import IconWrapper from 'src/components/Icon/IconWrapper.tsx';
import figma from '@figma/code-connect';

figma.connect(
  IconWrapper,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?node-id=198-1573&m=dev',
  {
    props: {
      // Icon instance from Figma
      icon: figma.instance('🖼️ Icon'),

      // Comprehensive icon size mapping
      iconSize: figma.enum('Icon Size', {
        // Standalone Sizes
        'Standalone - Small': 'sm',
        'Standalone - Medium': 'md',
        'Standalone - Large': 'lg',
        'Standalone - XL': 'xl',
        'Standalone - 2XL': '2xl',
        'Standalone - 3XL': '3xl',

        // Body Sizes
        'Body - Small': 'sm',
        'Body - Default': 'default',
        'Body - Large': 'lg',

        // Heading Sizes
        'Heading - H1': 'heading---h1',
        'Heading - H2': 'heading---h2',
        'Heading - H3': 'heading---h3',
        'Heading - H4': 'heading---h4',
        'Heading - H5': 'heading---h5',
        'Heading - H6': 'heading---h6',

        // Font Sizes
        'Font size - XS': 'font-size---xs',
        'Font size - Sm': 'font-size---sm',
        'Font size - Med': 'font-size---med',
        'Font size - Lg': 'font-size---lg',
        'Font size - XL': 'font-size---xl',
        'Font size - 2XL': 'font-size---2xl',
        'Font size - 3XL': 'font-size---3xl',
        'Font size - 4XL': 'font-size---4xl'
      })

      // // Add state support
      // states: figma.string('State', {
      //   default: '',
      //   empty: 'pf-m-empty'
      // })
    },

    // example: (props) => <IconWrapper iconSize={props.iconSize} icon={props.icon} className={props.states} />
    example: (props) => <IconWrapper iconSize={props.iconSize} icon={props.icon} />
  }
);

export default IconWrapper;
