import figma from '@figma/code-connect';
import { EmptyState, EmptyStateBody, EmptyStateFooter, EmptyStateActions } from '@patternfly/react-core';

// TODO: FIGMA: Add Empty state footer
// TODO: FIGMA: Consolodate empty state examples
// TODO: FIGMA: Add empty state footer
// TODO: FIGMA: Add empty state actions
// TODO: FIGMA: Add empty state icon
// TODO: FIGMA: Add empty state title
// TODO: FIGMA: Add empty state body
// TODO: FIGMA: Add empty state variant
// TODO: FIGMA: Add empty state status
// TODO: FIGMA: Add empty state isLoading
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
      icon: figma.enum('Type', {
        Default: 'CubesIcon', // placeholder icon
        Loading: 'Spinner'
      }),
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

      // children
      actions: figma.children(['Button', 'Link Button'])
    },
    example: (props) => (
      // Documentation for EmptyState can be found at https://www.patternfly.org/components/empty-state
      <EmptyState
        headingLevel="h4"
        icon={props.icon as any}
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
