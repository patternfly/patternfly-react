import * as React from 'react';
import { StyleSheet, css } from '@patternfly/react-styles';

export interface ToolbarGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered as one toolbar group */
  children?: React.ReactNode;
  /** Classes applied to toolbar group */
  className?: string; 
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

export const ToolbarGroup: React.FunctionComponent<ToolbarGroupProps> = ({
  children = null,
  className = null,
  ...props
}: ToolbarGroupProps) => (
  <div {...props} className={css('pf-l-toolbar__group', className)}>
    {children}
  </div>
);