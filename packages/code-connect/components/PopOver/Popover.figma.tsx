import figma from '@figma/code-connect';
import { Popover } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

// TODO: FIGMA: Add buttons boolean to footerContent
// TODO: REACT: Add iconWrapper support

figma.connect(
  Popover,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5857-2066',
  {
    props: {
      // hasFooter: figma.boolean('Has footer', {}),
      bodyContent: figma.string('Popover description'),
      headerContent: figma.string('Popover Heading'),
      footerContent: figma.boolean('Has footer', {
        true: figma.string('Popover footer'),
        false: undefined
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
      position: figma.enum('Position', {
        'Top-left': 'top-start',
        'Top-middle': 'top',
        'Top-right': 'top-end',
        'Bottom-left': 'bottom-start',
        'Bottom-middle': 'bottom',
        'Bottom-right': 'bottom-end'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Popover can be found at https://www.patternfly.org/components/popover
      <Popover
        aria-label="Clickable popover"
        headerContent={props.headerContent}
        bodyContent={props.bodyContent}
        footerContent={props.footerContent}
        position={props.position}
        headerIcon={props.status.icon}
        alertSeverityVariant={props.status.state}
      />
    )
  }
);
