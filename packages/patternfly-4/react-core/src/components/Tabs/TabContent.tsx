import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface TabContentProps extends React.HTMLProps<HTMLDivElement> {
   /** content rendered inside the tab content area if used outside Tabs component */
   children?: any;
   /** Child to show in the content area */
   child?: React.ReactNode; 
   /** class of tab content area if used outside Tabs component */
   className?: string; 
   /** Identifies the active Tab  */
   activeKey?: number; 
   /** uniquely identifies the controlling Tab if used outside Tabs component */
   eventKey?: number; 
   /** Callback for the section ref */
   innerRef?: any;
  //  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any }), PropTypes.string])
   /** id passed from parent to identify the content section */
   id: string; 
   /** title of controlling Tab if used outside Tabs component */
   'aria-label'?: string; 
}

export class TabContent extends React.Component<TabContentProps> {
  innerRef = React.createRef<HTMLDivElement>(); 
  constructor(props: TabContentProps){
    super(props); 
  }

  static defaultProps = {
    children: null,
    child: null,
    className: null,
    activeKey: null,
    eventKey: null,
    innerRef: (): any => undefined,
    'aria-label': null
  };

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
      let labelledBy: string;
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
          tabIndex={0}
          {...props}
        >
          {children || child.props.children}
        </section>
      );
    }
    return null;
  }
}

// eslint-disable-next-line react/no-multi-comp
// export default React.forwardRef((props, ref) => <TabContent innerRef={ref} {...props} />);
