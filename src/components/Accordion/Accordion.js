import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from 'react-bootstrap';

const Accordion = ({ accordionId, children, expandedKey, height }) => {
  const accordionStyle = height ? { height } : {};
  return (
    <PanelGroup
      accordion
      style={accordionStyle}
      id={accordionId}
      defaultActiveKey={expandedKey}
    >
      {children}
    </PanelGroup>
  );
};

Accordion.propTypes = {
  /** Unique id for accordion */
  accordionId: PropTypes.string.isRequired,
  /** Children nodes */
  children: PropTypes.node,
  /** Optional - This is the key to the panel element that can be open by
   * default when accordion renders */
  expandedKey: PropTypes.string,
  /** Optional - Height for Accordion */
  height: PropTypes.number
};
Accordion.defaultProps = {
  children: null,
  expandedKey: null,
  height: null
};
export default Accordion;
