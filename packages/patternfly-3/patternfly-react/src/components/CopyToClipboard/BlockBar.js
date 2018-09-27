import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { Form, Icon, Button } from '../../index';
import { noop } from '../../common/helpers';

const BlockBar = ({ children, toggleBlock, show, text }) => (
  <Form.FormGroup>
    <Form.InputGroup>
      <Form.InputGroup.Button>
        <Button
          style={{ height: '24px', width: '24px' }}
          className="copytoclipboard-pf-button"
          onClick={toggleBlock}
          aria-label={show ? 'collapse text block' : 'expand text block'}
        >
          <Icon type="fa" name={show ? 'angle-down' : 'angle-right'} />
        </Button>
      </Form.InputGroup.Button>
      {children}
    </Form.InputGroup>
    {show && (
      <Form.FormGroup>
        <Form.InputGroup>
          <Panel>
            <Panel.Body style={{ padding: '4px' }} className="copytoclipboard-pf-block">
              {text}
            </Panel.Body>
          </Panel>
        </Form.InputGroup>
      </Form.FormGroup>
    )}
  </Form.FormGroup>
);

BlockBar.propTypes = {
  /** Content to render inside the block bar */
  children: PropTypes.node.isRequired,
  /** Text to render inside the block panel */
  text: PropTypes.string.isRequired,
  /** Toggle block panel function */
  toggleBlock: PropTypes.func,
  /** Flag to determine whether to show the block panel */
  show: PropTypes.bool
};

BlockBar.defaultProps = {
  toggleBlock: noop,
  show: false
};

export default BlockBar;
