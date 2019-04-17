import * as React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** content rendered inside the tab content area if used outside Tabs component */
  children: PropTypes.any,
  /** class of tab content area if used outside Tabs component */
  className: PropTypes.string,
  /** uniquely identifies the controlling Tab if used outside Tabs component */
  eventKey: PropTypes.number,
  /** id passed from parent to identify the content section */
  id: PropTypes.string.isRequired,
  /** title of controlling Tab if used outside Tabs component */
  'aria-label': PropTypes.string
}

const defaultProps = {
  children: null,
  className: null,
  'aria-label': null
};

class TabContent extends React.Component {
  render() {
    const { id, activeKey, 'aria-label': ariaLabel, child, children, className, eventKey, innerRef, ...props } = this.props;
    if (children || child) {
      return <section
        ref={ innerRef }
        index={ eventKey }
        hidden={ children ? null : child.props.eventKey !== activeKey }
        className={ children ? css('pf-c-tab-content', className) : css('pf-c-tab-content', child.props.className) }
        id={ children ? id : `pf-tab-section-${child.props.eventKey}-${id}` }
        aria-label={ ariaLabel }
        aria-labelledby={ ariaLabel ? null : children ? `pf-tab-${eventKey}-${id}` : `pf-tab-${child.props.eventKey}-${id}` }
        role="tabpanel"
        tabIndex="0"
        {...props}
       >
         {children ? children : child.props.children}
       </section>;
    } else {
      return null;
    }
  }
}

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => <TabContent innerRef={ref} {...props}/>);
