import React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import { CopyIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import { Tooltip, TooltipPosition } from '../Tooltip';

const CopyButton = ({
  className,
  onClick,
  exitDelay,
  entryDelay,
  maxWidth,
  position,
  children,
  'aria-label': ariaLabel,
  id,
  textId,
  ...props
}) => (
  <Tooltip
    trigger={'mouseenter focus click'}
    exitDelay={exitDelay}
    entryDelay={entryDelay}
    maxWidth={maxWidth}
    position={position}
    content={<div>{children}</div>}
  >
    <button
      onClick={onClick}
      className={css(styles.clipboardCopyGroupCopy, className)}
      aria-label={ariaLabel}
      id={id}
      aria-labelledby={`${id} ${textId}`}
      {...props}
    >
      <CopyIcon />
    </button>
  </Tooltip>
);

CopyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  className: PropTypes.string,
  exitDelay: PropTypes.number,
  entryDelay: PropTypes.number,
  maxWidth: PropTypes.string,
  position: PropTypes.oneOf(Object.keys(TooltipPosition)),
  'aria-label': PropTypes.string
};

CopyButton.defaultProps = {
  className: '',
  exitDelay: 100,
  entryDelay: 100,
  maxWidth: '100px',
  position: 'top',
  'aria-label': 'Copyable input'
};

export default CopyButton;
