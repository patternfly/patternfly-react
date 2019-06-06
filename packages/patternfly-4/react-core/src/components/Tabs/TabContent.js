import * as React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** content rendered inside the tab content area if used outside Tabs component */
  children: PropTypes.any,
  /** Child to show in the content area */
  child: PropTypes.node,
  /** class of tab content area if used outside Tabs component */
  className: PropTypes.string,
  /** Identifies the active Tab  */
  activeKey: PropTypes.number,
  /** uniquely identifies the controlling Tab if used outside Tabs component */
  eventKey: PropTypes.number,
  /** Callback for the section ref */
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any }), PropTypes.string]),
  /** id passed from parent to identify the content section */
  id: PropTypes.string.isRequired,
  /** title of controlling Tab if used outside Tabs component */
  'aria-label': PropTypes.string
};

const defaultProps = {
  children: null,
  child: null,
  className: null,
  activeKey: null,
  eventKey: null,
  innerRef: Function.prototype,
  'aria-label': null
};

class TabContent extends React.Component {
  render() {
    const {
      id,
      activeKey,
      'aria-label': ariaLabel,
      child,
      children,
      className,
      eventKey,
      innerRef,
      ...props
    } = this.props;
    if (children || child) {
      let labelledBy;
      if (ariaLabel) {
        labelledBy = null;
      } else {
        labelledBy = children ? `pf-tab-${eventKey}-${id}` : `pf-tab-${child.props.eventKey}-${id}`;
      }

      return (
        <section
          ref={innerRef}
          index={eventKey}
          hidden={children ? null : child.props.eventKey !== activeKey}
          className={children ? css('pf-c-tab-content', className) : css('pf-c-tab-content', child.props.className)}
          id={children ? id : `pf-tab-section-${child.props.eventKey}-${id}`}
          aria-label={ariaLabel}
          aria-labelledby={labelledBy}
          role="tabpanel"
          tabIndex="0"
          {...props}
        >
          {children || child.props.children}
        </section>
      );
    }
    return null;
  }
}

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;

// eslint-disable-next-line react/no-multi-comp
export default React.forwardRef((props, ref) => <TabContent innerRef={ref} {...props} />);
