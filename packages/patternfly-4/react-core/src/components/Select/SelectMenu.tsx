import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import { default as formStyles } from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';
import { SelectConsumer, SelectVariant } from './selectConstants';
import { Omit } from '../../helpers/typeUtils';

// tslint:disable-next-line
const FocusTrap: any = require('focus-trap-react');

export interface SelectMenuProps extends Omit<React.HTMLProps<HTMLElement>, 'checked' | 'selected' | 'ref'> {
  /** Content rendered inside the SelectMenu */
  children: React.ReactElement[];
  /** Additional classes added to the SelectMenu control */
  className?: string;
  /** Flag indicating the Select is expanded */
  isExpanded: boolean;
  /** Flag indicating the Select options are grouped */
  isGrouped?: boolean;
  /** Currently selected option (for single, typeahead variants) */
  selected?: string | string[];
  /** Currently checked options (for checkbox variant) */
  checked?: string[];
  /** Internal flag for specifiying how the menu was opened */
  openedOnEnter?: boolean;
  /** Internal callback for ref tracking */
  sendRef?: (ref: React.ReactNode, index: number) => void;
  /** Internal callback for keyboard navigation */
  keyHandler?: (index: number, position: string) => void;
}

export class SelectMenu extends React.Component<SelectMenuProps> {
  static defaultProps = {
    className: '',
    isExpanded: false,
    isGrouped: false,
    openedOnEnter: false,
    selected: '',
    sendRef: Function.prototype,
    keyHandler: Function.prototype
  };

  extendChildren() {
    const { children, isGrouped } = this.props;
    if (isGrouped) {
      let index = 0;
      return React.Children.map(children, (group: React.ReactElement) =>
        React.cloneElement(group, {
          titleId: group.props.label.replace(/\W/g, '-'),
          children: group.props.children.map((option: React.ReactElement) => this.cloneOption(option, index++))
        })
      );
    }
    return React.Children.map(this.props.children, (child: React.ReactElement, index: number) =>
      this.cloneOption(child, index)
    );
  }

  cloneOption(child: React.ReactElement, index: number) {
    const { selected, sendRef, keyHandler } = this.props;
    const isSelected =
      selected && selected.constructor === Array
        ? selected && selected.includes(child.props.value)
        : selected === child.props.value;
    return React.cloneElement(child, {
      id: `${child.props.value}-${index}`,
      isSelected,
      sendRef,
      keyHandler,
      index
    });
  }

  extendCheckboxChildren(props: any) {
    const { children, isGrouped, checked, sendRef, keyHandler } = this.props;
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = props;
    if (isGrouped) {
      let index = 0;
      return React.Children.map(children, (group: React.ReactElement) =>
        React.cloneElement(group, {
          titleId: group.props.label.replace(/\W/g, '-'),
          children: (
            <fieldset aria-labelledby={group.props.label.replace(/\W/g, '-')} className={css(formStyles.formFieldset)}>
              {group.props.children.map((option: React.ReactElement) =>
                React.cloneElement(option, {
                  isChecked: checked && checked.includes(option.props.value),
                  sendRef,
                  keyHandler,
                  index: index++
                })
              )}
            </fieldset>
          )
        })
      );
    }
    return (
      <fieldset
        {...props}
        aria-label={ariaLabel}
        aria-labelledby={(!ariaLabel && ariaLabelledBy) || null}
        className={css(formStyles.formFieldset)}
      >
        {React.Children.map(children, (child: React.ReactElement, index: number) =>
          React.cloneElement(child, {
            isChecked: checked && checked.includes(child.props.value),
            sendRef,
            keyHandler,
            index
          })
        )}
      </fieldset>
    );
  }

  render() {
    const {
      children,
      className,
      isExpanded,
      openedOnEnter,
      selected,
      checked,
      isGrouped,
      sendRef,
      keyHandler,
      ...props
    } = this.props;

    return (
      <SelectConsumer>
        {({ variant }) => (
          <React.Fragment>
            {variant !== SelectVariant.checkbox && (
              <ul {...props} className={css(styles.selectMenu, className)} role="listbox">
                {this.extendChildren()}
              </ul>
            )}
            {variant === SelectVariant.checkbox && (
              <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
                <div className={css(styles.selectMenu, className)}>
                  <form noValidate className={css(formStyles.form)}>
                    <div className={css(formStyles.formGroup)}>{this.extendCheckboxChildren(props)}</div>
                  </form>
                </div>
              </FocusTrap>
            )}
          </React.Fragment>
        )}
      </SelectConsumer>
    );
  }
}
