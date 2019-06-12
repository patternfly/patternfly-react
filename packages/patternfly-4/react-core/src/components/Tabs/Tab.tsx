/* eslint-disable react/no-multi-comp */
import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface TabProps extends Omit<React.HTMLProps<HTMLDivElement>, 'id'> {
  /** content rendered inside the Tab content area. */
  children?: React.ReactNode; 
  /** additional classes added to the Tab */
  className?: string; 
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs variant="nav"> should have an href. */
  href?: string; 
  /** Tab title */
  title: string; 
  /** uniquely identifies the tab */
  eventKey: number; 
  /** child id for case in which a TabContent section is defined outside of a Tabs component */
  tabContentId?: string | number; 
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef?: any; 
  // tabContentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any }), PropTypes.string])
}

const withForwardedRef = Component => {
  class TabContainer extends React.Component {
    forwardRef = React.createRef<HTMLDivElement>();
    render() {
      const { forwardRef, ...rest } = this.props; // eslint-disable-line react/prop-types
      return <Component ref={forwardRef} {...rest} />;
    }
  }
  return React.forwardRef((props, tabContentRef) => <TabContainer {...props} forwardRef={tabContentRef} />);
};

export class Tab extends React.Component<TabProps>{
  constructor(props: TabProps) {
    super(props); 
  }

  static defaultProps = {
    children: null,
    className: '',
    href: null,
    tabContentId: null,
    tabContentRef: null
  };

  render() {
    // destructuring to prevent console warnings for applying eventKey, and tabContentId to a DOM element and remove title from the DOM element
    const { children, eventKey, tabContentId, tabContentRef, title, ...props } = this.props;
    const Component = props.href ? 'a' : 'button';
    return (
      <Component {...props} ref={tabContentRef}>
        {children}
      </Component>
    );
  }
}

// export default withForwardedRef(Tab);
