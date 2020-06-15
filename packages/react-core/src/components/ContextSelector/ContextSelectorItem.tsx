import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';
import { ContextSelectorContext } from './contextSelectorConstants';

export interface ContextSelectorItemProps {
  /** Anything which can be rendered as Context Selector item */
  children?: React.ReactNode;
  /** Classes applied to root element of the Context Selector item */
  className?: string;
  /** Render Context  Selector item as disabled */
  isDisabled?: boolean;
  /** Callback for click event */
  onClick: (event: React.MouseEvent) => void;
  /** internal index of the item */
  index: number;
  /** Internal callback for ref tracking */
  sendRef: (index: number, current: any) => void;
}

export class ContextSelectorItem extends React.Component<ContextSelectorItemProps> {
  static displayName = 'ContextSelectorItem';
  static defaultProps: ContextSelectorItemProps = {
    children: null as React.ReactNode,
    className: '',
    isDisabled: false,
    onClick: (): any => undefined,
    index: undefined as number,
    sendRef: () => {}
  };

  ref: React.RefObject<HTMLButtonElement> = React.createRef();

  componentDidMount() {
    /* eslint-disable-next-line */
    this.props.sendRef(this.props.index, this.ref.current);
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, children, onClick, isDisabled, index, sendRef, ...props } = this.props;
    return (
      <ContextSelectorContext.Consumer>
        {({ onSelect }) => (
          <li role="none">
            <button
              className={css(styles.contextSelectorMenuListItem, className)}
              ref={this.ref}
              onClick={event => {
                if (!isDisabled) {
                  onClick(event);
                  onSelect(event, children);
                }
              }}
              disabled={isDisabled}
              {...props}
            >
              {children}
            </button>
          </li>
        )}
      </ContextSelectorContext.Consumer>
    );
  }
}
