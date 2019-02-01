import React from 'react';
import { StyleSheet, css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

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

const propTypes = {
  /** Anything that can be rendered as toolbar section */
  children: PropTypes.node,
  /** Classes applied to toolbar section */
  className: PropTypes.string,
  /** Aria label applied to toolbar section */
  'aria-label': props => {
    if (!props['aria-label']) {
      return new Error('ToolbarSection requires aria-label to be specified');
    }
    return null;
  },
  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: null,
  'aria-label': null
};

const ToolbarSection = ({ children, className, ...props }) => (
  <section {...props} className={css('pf-l-toolbar__section', className)}>
    {children}
  </section>
);

ToolbarSection.propTypes = propTypes;
ToolbarSection.defaultProps = defaultProps;

export default ToolbarSection;
