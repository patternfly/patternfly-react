import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import EmptyState from './EmptyState';
import EmptyStateIcon from './EmptyStateIcon';
import EmptyStateTitle from './EmptyStateTitle';
import EmptyStateInfo from './EmptyStateInfo';
import EmptyStateHelp from './EmptyStateHelp';
import EmptyStateAction from './EmptyStateAction';

const EmptyStatePattern = ({
  className,
  title,
  info,
  help,
  mainAction,
  actions,
  ...props
}) => (
  <EmptyState className={className} {...props}>
    <EmptyStateIcon />
    {title && <EmptyStateTitle>{title}</EmptyStateTitle>}
    {info && <EmptyStateInfo>{info}</EmptyStateInfo>}
    {help && <EmptyStateHelp>{help}</EmptyStateHelp>}
    {mainAction && (
      <EmptyStateAction>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={mainAction.onClick}
          title={mainAction.title}
        >
          {mainAction.children}
        </Button>
      </EmptyStateAction>
    )}
    {actions &&
      actions.length > 0 && (
        <EmptyStateAction secondary>
          {actions.map((action, index) => (
            <Button onClick={action.onClick} title={action.title} key={index}>
              {action.children}
            </Button>
          ))}
        </EmptyStateAction>
      )}
  </EmptyState>
);
const actionShape = PropTypes.shape({
  /** onClick callback */
  onClick: PropTypes.func,
  /** button title (title attribute) */
  title: PropTypes.string,
  /** button content */
  children: PropTypes.node
});

EmptyStatePattern.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** story title */
  title: PropTypes.node,
  /** story info */
  info: PropTypes.node,
  /** story help */
  help: PropTypes.node,
  /** story main-action */
  mainAction: actionShape,
  /** story secondary-actions */
  actions: PropTypes.arrayOf(actionShape)
};
EmptyStatePattern.defaultProps = {
  className: '',
  title: null,
  info: null,
  help: null,
  mainAction: null,
  actions: null
};
export default EmptyStatePattern;
