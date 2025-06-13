import figma from '@figma/code-connect';
import { EmptyState, EmptyStateBody, Spinner } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import LockIcon from '@patternfly/react-icons/dist/esm/icons/lock-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

// TODO: FIGMA: Add Empty state footer
// TODO: FIGMA: Consolodate empty state examples

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7896-37441',
  {
    props: {
      // string
      title: figma.string('Header text'),
      body: figma.string('Body text'),

      // enum
      variant: figma.enum('Size', {
        Basic: undefined,
        'Extra small': 'xs',
        Small: 'sm',
        Large: 'lg',
        'Extra large': 'xl'
      }),
      // "custom" | "warning" | "success" | "danger" | "info"
      status: figma.enum('Type', {
        Basic: {
          icon: CubesIcon,
          type: undefined
        },
        Create: {
          icon: PlusCircleIcon,
          type: 'custom'
        },
        'No results': {
          icon: SearchIcon,
          type: 'custom'
        },
        Success: {
          icon: CheckCircleIcon,
          type: 'success'
        },
        Error: {
          icon: ExclamationCircleIcon,
          type: 'danger'
        },
        Permissions: {
          icon: LockIcon,
          type: undefined
        },
        Danger: {
          icon: Spinner,
          type: undefined
        }
      }),
      isLoading: figma.enum('Type', { Loading: 'Spinner' })
    },
    example: (props) => (
      // Documentation for EmptyState can be found at https://www.patternfly.org/components/empty-state
      <EmptyState
        status={props.status.type}
        titleText={props.title}
        variant={props.variant}
        headingLevel="h4"
        icon={props.status.icon}
      >
        <EmptyStateBody>{props.body}</EmptyStateBody>
        {/* <EmptyStateFooter>{props.children}</EmptyStateFooter> */}
      </EmptyState>
    )
  }
);
