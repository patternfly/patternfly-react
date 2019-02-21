import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '../../helpers/util';

const propTypes = {
  /** the index of the active tab */
  activeKey: PropTypes.number,
  /** content rendered inside the tab content area. */
  child: PropTypes.node,
  /** id passed from parent to identify the content section */
  id: PropTypes.string
};

const defaultProps = {
  activeKey: 0,
  child: null
};

const TabContent = ({ id, activeKey, child, ...props }) => (
  <section
    hidden={child.props.eventKey !== activeKey}
    className={css('pf-c-tab-content', child.props.className)}
    id={`pf-tab-section-${child.props.eventKey}-${id}`}
    aria-labelledby={`pf-tab-${child.props.eventKey}-${id}`}
    role="tabpanel"
    tabIndex="0"
    {...props}
  >
    {child.props.children}
  </section>
);

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

export default TabContent;
