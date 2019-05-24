import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';

const HeaderCell = ({
  'data-label': dataLabel,
  className,
  component: Component,
  isVisible,
  scope,
  textCenter,
  ...props
}) => {
  const mappedProps = {
    ...(scope ? { scope } : {}),
    ...props
  };
  return <Component {...mappedProps} className={css(className, textCenter && styles.modifiers.center)} />;
};

HeaderCell.propTypes = {
  'data-label': PropTypes.string,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
  isVisible: PropTypes.bool,
  scope: PropTypes.string,
  textCenter: PropTypes.bool
};

HeaderCell.defaultProps = {
  'data-label': '',
  className: undefined,
  component: 'th',
  isVisible: undefined,
  scope: '',
  textCenter: false
};

export default HeaderCell;
