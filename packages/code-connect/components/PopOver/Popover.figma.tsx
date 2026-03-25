import figma from '@figma/code-connect';
import { Popover } from '@patternfly/react-core';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

// TODO: DESIGN: Add buttons boolean to footerContent
// TODO: REACT: Add icon support
// Documentation for Popover can be found at https://www.patternfly.org/components/popover

figma.connect(
  Popover,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=5857-2066',
  {
    // enum
    props: {
      // boolean
      footerContent: figma.boolean('Has footer', {
        true: figma.string('Popover footer'),
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
          icon: <RhUiCheckCircleFillIcon />
        },
        Info: {
          state: 'info',
          icon: <RhUiInformationFillIcon />
        },
        Warning: {
          state: 'warning',
          icon: <RhUiWarningFillIcon />
        },
        Danger: {
          state: 'danger',
          icon: <RhUiErrorFillIcon />
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
