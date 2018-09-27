import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Button, OverlayTrigger, Tooltip } from '../../index';
import { noop } from '../../common/helpers';

const CopyButton = ({ onCopy, copied, tooltipText, id }) => {
  const tooltip = <Tooltip id={`tooltip-copy-to-clipboard-${id}`}>{tooltipText}</Tooltip>;
  return (
    <Form.InputGroup.Button>
      <OverlayTrigger placement="top" overlay={tooltip}>
        <Button
          style={{ width: '24px', height: '24px' }}
          className="copytoclipboard-pf-button"
          onClick={onCopy}
          aria-label={`${id} copy to clipboard button`}
        >
          <Icon type="fa" name={copied ? 'check' : 'paste'} />
        </Button>
      </OverlayTrigger>
    </Form.InputGroup.Button>
  );
};

CopyButton.propTypes = {
  /** Short aria description of the copy to clipboard text */
  id: PropTypes.string.isRequired,
  /** Function that is triggered on copy */
  onCopy: PropTypes.func,
  /** Text message to display in tooltip */
  tooltipText: PropTypes.string,
  /** Flag to determine whether text was copied */
  copied: PropTypes.bool
};

CopyButton.defaultProps = {
  onCopy: noop,
  copied: false,
  tooltipText: 'Copy to clipboard'
};

export default CopyButton;
