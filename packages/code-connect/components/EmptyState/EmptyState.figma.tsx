import figma from '@figma/code-connect';
import { EmptyState, EmptyStateBody, EmptyStateFooter, EmptyStateActions } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

// TODO: DESIGN: Add Empty state footer
// TODO: DESIGN: Consolodate empty state examples
// TODO: DESIGN: Add empty state footer
// TODO: DESIGN: Add empty state actions
// TODO: DESIGN: Add empty state icon
// TODO: DESIGN: Add empty state title
// TODO: DESIGN: Add empty state body
// TODO: DESIGN: Add empty state variant
// TODO: DESIGN: Add empty state status
// Based on Code Connect's limitations, this component needs to be overhauled. Using the base component approach present in
// other components would significantly reduce complexity.

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7896-37441',
  {
    props: {
      // string
      body: figma.string('Body text'),
      title: figma.string('Header text'),

      // enum
      status: figma.enum('Type', {
        Custom: 'custom',
        Warning: 'warning',
        Success: 'success',
        Danger: 'danger',
        Info: 'info'
      }),
      variant: figma.enum('Size', {
        Basic: undefined,
        'Extra small': 'xs',
        Small: 'sm',
        Large: 'lg',
        'Extra large': 'xl'
      }),

      actions: figma.children('Empty state footer')
    },
    example: (props) => (
      <EmptyState
        // this may need to be updated for accessibility
        headingLevel="h4"
        icon={<PlusCircleIcon />}
        variant={props.variant}
        status={props.status}
        titleText={props.title}
      >
        <EmptyStateBody>{props.body}</EmptyStateBody>
        <EmptyStateFooter>
          <EmptyStateActions>{props.actions}</EmptyStateActions>
        </EmptyStateFooter>
      </EmptyState>
    )
  }
);
