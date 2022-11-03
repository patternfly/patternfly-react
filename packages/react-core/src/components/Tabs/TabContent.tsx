import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TabContent/tab-content';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps } from '../../helpers';
import { TabsContextConsumer, TabsContextProps } from './TabsContext';

export interface TabContentProps extends Omit<React.HTMLProps<HTMLElement>, 'ref'>, OUIAProps {
  /** content rendered inside the tab content area if used outside Tabs component */
  children?: any;
  /** Child to show in the content area */
  child?: React.ReactElement<any>;
  /** class of tab content area if used outside Tabs component */
  className?: string;
  /** Identifies the active Tab  */
  activeKey?: number | string;
  /** uniquely identifies the controlling Tab if used outside Tabs component */
  eventKey?: number | string;
  /** Callback for the section ref */
  innerRef?: React.Ref<any>;
  /** id passed from parent to identify the content section */
  id: string;
  /** title of controlling Tab if used outside Tabs component */
  'aria-label'?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

const variantStyle = {
  default: '',
  light300: styles.modifiers.light_300
};

const TabContentBase: React.FunctionComponent<TabContentProps> = ({
  id,
  activeKey,
  'aria-label': ariaLabel,
  child,
  children,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  eventKey,
  innerRef,
  ouiaId,
  ouiaSafe,
  ...props
}: TabContentProps) => {
  if (children || child) {
    let labelledBy: string;
    if (ariaLabel) {
      labelledBy = null;
    } else {
      labelledBy = children ? `${id}` : `pf-tab-${child.props.eventKey}-${id}`;
    }

    return (
      <TabsContextConsumer>
        {({ variant }: TabsContextProps) => (
          <section
            ref={innerRef}
            hidden={children ? null : child.props.eventKey !== activeKey}
            className={
              children
                ? css('pf-c-tab-content', className, variantStyle[variant])
                : css('pf-c-tab-content', child.props.className, variantStyle[variant])
            }
            id={children ? id : `pf-tab-section-${child.props.eventKey}-${id}`}
            aria-label={ariaLabel}
            aria-labelledby={labelledBy}
            role="tabpanel"
            tabIndex={0}
            {...getOUIAProps('TabContent', ouiaId, ouiaSafe)}
            {...props}
          >
            {children || child.props.children}
          </section>
        )}
      </TabsContextConsumer>
    );
  }
  return null;
};

export const TabContent = React.forwardRef((props: TabContentProps, ref: React.Ref<HTMLElement>) => (
  <TabContentBase {...props} innerRef={ref} />
));
