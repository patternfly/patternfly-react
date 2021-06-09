import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import formStyles from '@patternfly/react-styles/css/components/Form/form';
import { css } from '@patternfly/react-styles';
import { SelectOptionObject, SelectOption } from './SelectOption';
import { SelectConsumer, SelectVariant, SelectContextInterface } from './selectConstants';
import { PickOptional } from '../../helpers/typeUtils';

import { SelectGroup } from './SelectGroup';
import { Divider } from '../Divider/Divider';

export interface SelectMenuProps extends Omit<React.HTMLProps<HTMLElement>, 'checked' | 'selected' | 'ref'> {
  /** Content rendered inside the SelectMenu */
  children: React.ReactElement[] | React.ReactNode;
  /** Flag indicating that the children is custom content to render inside the SelectMenu.  If true, variant prop is ignored. */
  isCustomContent?: boolean;
  /** Additional classes added to the SelectMenu control */
  className?: string;
  /** Flag indicating the Select is expanded */
  isExpanded?: boolean;
  /** Flag indicating the Select options are grouped */
  isGrouped?: boolean;
  /** Currently selected option (for single, typeahead variants) */
  selected?: string | SelectOptionObject | (string | SelectOptionObject)[];
  /** Currently checked options (for checkbox variant) */
  checked?: (string | SelectOptionObject)[];
  /** @hide Internal flag for specifiying how the menu was opened */
  openedOnEnter?: boolean;
  /** Flag to specify the  maximum height of the menu, as a string percentage or number of pixels */
  maxHeight?: string | number;
  /** Inner prop passed from parent */
  noResultsFoundText?: string;
  /** Inner prop passed from parent */
  createText?: string;
  /** @hide Internal callback for ref tracking */
  sendRef?: (ref: React.ReactNode, favoriteRef: React.ReactNode, index: number) => void;
  /** @hide Internal callback for keyboard navigation */
  keyHandler?: (index: number, innerIndex: number, position: string) => void;
  /** Flag indicating select has an inline text input for filtering */
  hasInlineFilter?: boolean;
  innerRef?: any;
  /** Content rendered in the footer of the select menu */
  footer?: React.ReactNode;
  /** The menu footer element */
  footerRef?: React.RefObject<HTMLDivElement>;
}

class SelectMenuWithRef extends React.Component<SelectMenuProps> {
  static displayName = 'SelectMenu';
  static defaultProps: PickOptional<SelectMenuProps> = {
    className: '',
    isExpanded: false,
    isGrouped: false,
    openedOnEnter: false,
    selected: '',
    maxHeight: '',
    sendRef: () => {},
    keyHandler: () => {},
    isCustomContent: false,
    hasInlineFilter: false
  };

  extendChildren(randomId: string) {
    const { children, hasInlineFilter, isGrouped } = this.props;
    const childrenArray: React.ReactElement[] = children as React.ReactElement[];
    let index = hasInlineFilter ? 1 : 0;
    if (isGrouped) {
      return React.Children.map(childrenArray, (group: React.ReactElement) => {
        if (group.type === SelectGroup) {
          return React.cloneElement(group, {
            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
            children: React.Children.map(group.props.children, (option: React.ReactElement) =>
              this.cloneOption(option, index++, randomId)
            )
          });
        } else {
          return this.cloneOption(group, index++, randomId);
        }
      });
    }
    return React.Children.map(childrenArray, (child: React.ReactElement) => this.cloneOption(child, index++, randomId));
  }

  cloneOption(child: React.ReactElement, index: number, randomId: string) {
    const { selected, sendRef, keyHandler } = this.props;
    const isSelected = this.checkForValue(child.props.value, selected);
    if (child.type === Divider) {
      return child;
    }
    return React.cloneElement(child, {
      inputId: `${randomId}-${index}`,
      isSelected,
      sendRef,
      keyHandler,
      index
    });
  }

  checkForValue(
    valueToCheck: string | SelectOptionObject,
    options: string | SelectOptionObject | (string | SelectOptionObject)[]
  ) {
    if (!options || !valueToCheck) {
      return false;
    }

    const isSelectOptionObject =
      typeof valueToCheck !== 'string' &&
      (valueToCheck as SelectOptionObject).toString &&
      (valueToCheck as SelectOptionObject).compareTo;

    if (Array.isArray(options)) {
      if (isSelectOptionObject) {
        return options.some(option => (option as SelectOptionObject).compareTo(valueToCheck));
      } else {
        return options.includes(valueToCheck);
      }
    } else {
      if (isSelectOptionObject) {
        return (options as SelectOptionObject).compareTo(valueToCheck);
      } else {
        return options === valueToCheck;
      }
    }
  }

  extendCheckboxChildren(children: React.ReactElement[]) {
    const { isGrouped, checked, sendRef, keyHandler, hasInlineFilter } = this.props;
    let index = hasInlineFilter ? 1 : 0;
    if (isGrouped) {
      return React.Children.map(children, (group: React.ReactElement) => {
        if (group.type === SelectOption || group.type === Divider) {
          return group;
        }
        return React.cloneElement(group, {
          titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
          children: group.props.children ? (
            <fieldset
              aria-labelledby={group.props.label && group.props.label.replace(/\W/g, '-')}
              className={css(styles.selectMenuFieldset)}
            >
              {React.Children.map(group.props.children, (option: React.ReactElement) =>
                option.type === Divider
                  ? option
                  : React.cloneElement(option, {
                      isChecked: this.checkForValue(option.props.value, checked),
                      sendRef,
                      keyHandler,
                      index: index++
                    })
              )}
            </fieldset>
          ) : null
        });
      });
    }
    return React.Children.map(children, (child: React.ReactElement) =>
      child.type === Divider
        ? child
        : React.cloneElement(child, {
            isChecked: this.checkForValue(child.props.value, checked),
            sendRef,
            keyHandler,
            index: index++
          })
    );
  }

  renderSelectMenu({ variant, inputIdPrefix }: SelectContextInterface) {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      children,
      isCustomContent,
      className,
      isExpanded,
      openedOnEnter,
      selected,
      checked,
      isGrouped,
      sendRef,
      keyHandler,
      maxHeight,
      noResultsFoundText,
      createText,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      hasInlineFilter,
      innerRef,
      footer,
      footerRef,
      ...props
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    let Component = 'div';
    const variantProps = {
      ref: innerRef,
      className: css(!footer ? styles.selectMenu : 'pf-c-select__menu-list', className),
      ...(maxHeight && { style: { maxHeight, overflow: 'auto' } })
    } as React.HTMLAttributes<HTMLElement>;
    const extendedChildren = () =>
      variant === SelectVariant.checkbox
        ? this.extendCheckboxChildren(children as React.ReactElement[])
        : this.extendChildren(inputIdPrefix);

    if (isCustomContent) {
      variantProps.children = children;
    } else if (hasInlineFilter) {
      if (React.Children.count(children) === 0) {
        variantProps.children = <fieldset className={css(styles.selectMenuFieldset)} />;
      } else {
        variantProps.children = (
          <fieldset
            aria-label={ariaLabel}
            aria-labelledby={(!ariaLabel && ariaLabelledBy) || null}
            className={css(formStyles.formFieldset)}
          >
            {(children as React.ReactElement[]).shift()}
            {extendedChildren()}
          </fieldset>
        );
      }
    } else {
      variantProps.children = extendedChildren();
      if (!isGrouped) {
        Component = 'ul';
        variantProps.role = 'listbox';
        variantProps['aria-label'] = ariaLabel;
        variantProps['aria-labelledby'] = (!ariaLabel && ariaLabelledBy) || null;
      }
    }

    return (
      <React.Fragment>
        <Component {...variantProps} {...props} />
        {footer && (
          <div className={css(styles.selectMenuFooter)} ref={footerRef}>
            {footer}
          </div>
        )}
      </React.Fragment>
    );
  }

  render() {
    return <SelectConsumer>{context => this.renderSelectMenu(context)}</SelectConsumer>;
  }
}

export const SelectMenu = React.forwardRef((props, ref) => (
  <SelectMenuWithRef innerRef={ref} {...props}>
    {props.children}
  </SelectMenuWithRef>
));
