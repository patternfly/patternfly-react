import * as React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** the index of the active tab (not needed if used outside Tabs component) */
  activeKey: PropTypes.number,
  /** content rendered inside the tab content area if used inside Tabs component */
  child: PropTypes.node,
  /** content rendered inside the tab content area if used outside Tabs component */
  children: PropTypes.any,
  /** class of tab content area if used outside Tabs component */
  className: PropTypes.string,
  /** id passed from parent to identify the content section */
  id: PropTypes.string.isRequired
};

const defaultProps = {
  activeKey: 0,
  child: null,
  children: null,
  className: null,
};

class TabContent extends React.Component {
  render() {
    const { id, activeKey, child, children, className, eventKey, innerRef, ...props } = this.props;
    return <section
      ref={innerRef}
      index={eventKey}
      hidden={children ? null : child.props.eventKey !== activeKey}
      className={children ? css('pf-c-tab-content', className) : css('pf-c-tab-content', child.props.className)}
      id={children ? id : `pf-tab-section-${child.props.eventKey}-${id}`}
      aria-labelledby={children ? `pf-tab-${eventKey}-${id}` : `pf-tab-${child.props.eventKey}-${id}`}
      role="tabpanel"
      tabIndex="0"
      {...props}
    >
      {children ? children : child.props.children}
    </section>;
  }
}

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => <TabContent innerRef={ref} {...props}/>);
