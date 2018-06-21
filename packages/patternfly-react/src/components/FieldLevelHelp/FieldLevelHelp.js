import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { OverlayTrigger } from '../OverlayTrigger';

/**
 * FieldLevelHelp Component for Patternfly React
 */
const FieldLevelHelp = ({
  children,
  content,
  rootClose,
  placement,
  buttonClass,
  ...props
}) => {
  const overlay = <Popover id="popover">{content}</Popover>;

  return (
    <OverlayTrigger
      overlay={overlay}
      placement={placement}
      trigger={['click']}
      rootClose={rootClose}
    >
      <Button bsStyle="link" className={buttonClass}>
        <Icon type="pf" name="info" />
      </Button>
    </OverlayTrigger>
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: PropTypes.node,
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
  rootClose: true,
  placement: 'top',
  buttonClass: 'popover-pf-info',
  children: null
};

export default FieldLevelHelp;
