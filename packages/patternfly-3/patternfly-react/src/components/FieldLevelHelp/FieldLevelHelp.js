import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
const FieldLevelHelp = ({ children, content, close, rootClose, placement, buttonClass, ...props }) => {
  // backwards compatibility of the existing `close` prop - use that prop if it exists
  const closeProp = typeof close !== 'undefined' ? close : rootClose;
  const overlay = <Popover id="popover">{content}</Popover>;
  const buttonClasses = classNames('popover-pf-info', buttonClass);

  return (
    <OverlayTrigger overlay={overlay} placement={placement} trigger={['click']} rootClose={closeProp}>
      <Button bsStyle="link" className={buttonClasses}>
        <Icon type="pf" name="info" />
      </Button>
    </OverlayTrigger>
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: PropTypes.node,
  /** close prop */
  close: PropTypes.bool,
  /** leave popover/tooltip open  */
  rootClose: PropTypes.bool,
  /** overlay placement */
  placement: PropTypes.string,
  /** button class */
  buttonClass: PropTypes.string,
  /** children nodes  */
  children: PropTypes.node
};
FieldLevelHelp.defaultProps = {
  content: null,
  close: undefined,
  rootClose: true,
  placement: 'top',
  buttonClass: '',
  children: null
};

export default FieldLevelHelp;
