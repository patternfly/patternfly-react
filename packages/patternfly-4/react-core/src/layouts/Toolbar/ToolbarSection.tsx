import * as React from 'react';
import { StyleSheet, css } from '@patternfly/react-styles';

export interface ToolbarSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered as toolbar section */
  children?: React.ReactNode; 
  /** Classes applied to toolbar section */
  className?: string; 
  /** Aria label applied to toolbar section */
  'aria-label'?: string; 
}

// toolbar css
const toolbarCss = StyleSheet.parse(`
  .pf-l-toolbar {
  --pf-l-toolbar__section--MarginTop: var(--pf-global--spacer--md);
  --pf-l-toolbar__group--MarginRight: var(--pf-global--spacer--xl);
  --pf-l-toolbar__group--MarginLeft: var(--pf-global--spacer--xl);
  --pf-l-toolbar__item--MarginRight: var(--pf-global--spacer--md);
  --pf-l-toolbar__item--MarginLeft: var(--pf-global--spacer--md); }

.pf-l-toolbar,
.pf-l-toolbar__section,
.pf-l-toolbar__group {
  display: flex;
  flex-wrap: wrap;
  align-items: center; }

.pf-l-toolbar__section {
  flex-basis: 100%; }
.pf-l-toolbar__section:not(:first-child) {
  margin-top: var(--pf-l-toolbar__section--MarginTop); }

.pf-l-toolbar__group:not(:last-child) {
  margin-right: var(--pf-l-toolbar__group--MarginRight); }

.pf-l-toolbar__item .pf-l-toolbar:not(:last-child) {
  margin-right: var(--pf-l-toolbar__item--MarginRight); }
`);

toolbarCss.inject();

export const ToolbarSection: React.FunctionComponent<ToolbarSectionProps> = ({
  children = null,
  className = null,
  'aria-label': ariaLabel,
  ...props
}: ToolbarSectionProps) => {
  if (!ariaLabel) {
    throw new Error('ToolbarSection requires aria-label to be specified');
  }

  return (
    <section {...props} className={css('pf-l-toolbar__section', className)}>
      {children}
    </section>
  );
}