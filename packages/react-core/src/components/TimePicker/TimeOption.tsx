import * as React from 'react';
import { css } from '@patternfly/react-styles';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import styles from '@patternfly/react-styles/css/components/Select/select';

export interface TimeOptionProps extends Omit<React.HTMLProps<HTMLElement>, 'onSelect' | 'ref' | 'value'> {
  /** Optional alternate display for the option */
  children?: React.ReactNode;
  /** Internal index of the option */
  index?: number;
  /** The value for the option */
  value: string;
  /** Internal flag indicating if the option is selected */
  isSelected?: boolean;
  /** Flag forcing the focused state */
  isFocused?: boolean;
  /** Internal callback for ref tracking */
  sendRef?: (ref: React.ReactNode, index: number) => void;
  /** Internal callback for keyboard navigation */
  keyHandler?: (index: number, position: string) => void;
  /** Optional callback for click event */
  onSelect?: (value: string, index: number) => void;
  /** ID of the item. Required for tracking favorites */
  id?: string;
}

export class TimeOption extends React.Component<TimeOptionProps> {
  static displayName = 'TimeOption';
  private ref = React.createRef<any>();
  static defaultProps: TimeOptionProps = {
    className: '',
    value: '',
    index: 0,
    isSelected: false,
    onSelect: () => {},
    sendRef: () => {},
    keyHandler: () => {}
  };

  componentDidMount() {
    this.props.sendRef(this.ref.current, this.props.index);
  }

  componentDidUpdate() {
    this.props.sendRef(this.ref.current, this.props.index);
  }

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      children,
      className,
      id,
      value,
      onClick,
      onSelect,
      isSelected,
      isFocused,
      sendRef,
      keyHandler,
      index,
      ...props
    } = this.props;

    return (
      <li role="presentation" className={css(styles.selectMenuWrapper, isFocused && styles.modifiers.focus)}>
        <button
          {...props}
          className={css(styles.selectMenuItem, isSelected && styles.modifiers.selected, className)}
          onClick={(event: any) => {
            onSelect(value, index);
          }}
          role="option"
          aria-selected={isSelected || null}
          ref={this.ref}
          type="button"
          id={id}
        >
          {children || value.toString()}
          {isSelected && (
            <span className={css(styles.selectMenuItemIcon)}>
              <CheckIcon aria-hidden />
            </span>
          )}
        </button>
      </li>
    );
  }
}
