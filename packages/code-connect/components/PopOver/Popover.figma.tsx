import figma from '@figma/code-connect';
import { Popover } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

// TODO: DESIGN: Add buttons boolean to footerContent
// TODO: REACT: Add icon support
// Documentation for Popover can be found at https://www.patternfly.org/components/popover

figma.connect(
  Popover,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5857-2066',
  {
    // enum
    props: {
      // boolean
      footerContent: figma.boolean('Has footer', {
        true: 'Popover footer',
        false: undefined
      }),
      headerIcon: figma.boolean('Show header icon', {
        true: <BullhornIcon />,
        false: undefined
      }),

      // string
      bodyContent: figma.string('Popover description'),
      headerContent: figma.string('Popover Heading'),

      // enum
      position: figma.enum('Position', {
        'Top-left': 'top-start',
        'Top-middle': 'top',
        'Top-right': 'top-end',
        'Bottom-left': 'bottom-start',
        'Bottom-middle': 'bottom',
        'Bottom-right': 'bottom-end'
      }),
      status: figma.enum('Status', {
        Default: {
          state: undefined,
          icon: undefined
        },
        Success: {
          state: 'success',
          icon: <CheckCircleIcon />
        },
        Info: {
          state: 'info',
          icon: <InfoCircleIcon />
        },
        Warning: {
          state: 'warning',
          icon: <ExclamationTriangleIcon />
        },
        Danger: {
          state: 'danger',
          icon: <ExclamationCircleIcon />
        }
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Popover
        alertSeverityVariant={props.status.state}
        aria-label="Clickable popover"
        bodyContent={props.bodyContent}
        footerContent={props.footerContent}
        headerContent={props.headerContent}
        headerIcon={props.headerIcon}
        position={props.position}
      />
    )
  }
);
