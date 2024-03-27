import { ReactNode, ReactElement, Children, cloneElement, Component } from 'react';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';

export interface ContextSelectorMenuListProps {
  /** Content rendered inside the context selector menu */
  children?: ReactNode;
  /** Classess applied to root element of context selector menu */
  className?: string;
  /** Flag to indicate if context selector menu is opened */
  isOpen?: boolean;
  /** Adds an accessible label to the context selector menu. */
  'aria-label'?: string;
}

class ContextSelectorMenuList extends Component<ContextSelectorMenuListProps> {
  static displayName = 'ContextSelectorMenuList';
  static defaultProps: ContextSelectorMenuListProps = {
    children: null as ReactNode,
    className: '',
    isOpen: true
  };

  refsCollection = [] as any;

  sendRef = (index: number, ref: any) => {
    this.refsCollection[index] = ref;
  };

  extendChildren() {
    return Children.map(this.props.children, (child, index) =>
      cloneElement(child as ReactElement<any>, {
        sendRef: this.sendRef,
        index,
        role: 'menuitem'
      })
    );
  }

  render = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, isOpen, children, ...props } = this.props;
    return (
      <ul className={css(styles.contextSelectorMenuList, className)} hidden={!isOpen} role="menu" {...props}>
        {this.extendChildren()}
      </ul>
    );
  };
}

export { ContextSelectorMenuList };
