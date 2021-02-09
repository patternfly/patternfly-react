import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';
import { css } from '@patternfly/react-styles';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { SelectConsumer, SelectVariant, KeyTypes } from './selectConstants';
import StarIcon from '@patternfly/react-icons/dist/js/icons/star-icon';
import { getUniqueId } from '../../helpers/util';

export interface SelectOptionObject {
  /** Function returns a string to represent the select option object */
  toString(): string;
  /** Function returns a true if the passed in select option is equal to this select option object, false otherwise */
  compareTo?(selectOption: any): boolean;
}
export interface SelectOptionProps extends Omit<React.HTMLProps<HTMLElement>, 'type' | 'ref' | 'value'> {
  /** Optional alternate display for the option */
  children?: React.ReactNode;
  /** Additional classes added to the Select Option */
  className?: string;
  /** Description of the item for single and both typeahead select variants */
  description?: React.ReactNode;
  /** Internal index of the option */
  index?: number;
  /** Indicates which component will be used as select item */
  component?: React.ReactNode;
  /** The value for the option, can be a string or select option object */
  value: string | SelectOptionObject;
  /** Flag indicating if the option is disabled */
  isDisabled?: boolean;
  /** Flag indicating if the option acts as a placeholder */
  isPlaceholder?: boolean;
  /** Flag indicating if the option acts as a "no results" indicator */
  isNoResultsOption?: boolean;
  /** Internal flag indicating if the option is selected */
  isSelected?: boolean;
  /** Internal flag indicating if the option is checked */
  isChecked?: boolean;
  /** Flag forcing the focused state */
  isFocused?: boolean;
  /** Internal callback for ref tracking */
  sendRef?: (
    ref: React.ReactNode,
    favoriteRef: React.ReactNode,
    optionContainerRef: React.ReactNode,
    index: number
  ) => void;
  /** Internal callback for keyboard navigation */
  keyHandler?: (index: number, innerIndex: number, position: string) => void;
  /** Optional callback for click event */
  onClick?: (event: React.MouseEvent | React.ChangeEvent) => void;
  /** Id of the checkbox input */
  inputId?: string;
  /** Internal Flag indicating if the option is favorited */
  isFavorite?: boolean;
  /** Aria label text for favoritable button when favorited */
  ariaIsFavoriteLabel?: string;
  /** Aria label text for favoritable button when not favorited */
  ariaIsNotFavoriteLabel?: string;
  /** ID of the item. Required for tracking favorites */
  id?: string;
}

export class SelectOption extends React.Component<SelectOptionProps> {
  static displayName = 'SelectOption';
  private ref = React.createRef<any>();
  private liRef = React.createRef<any>();
  private favoriteRef = React.createRef<any>();
  static defaultProps: SelectOptionProps = {
    className: '',
    value: '',
    index: 0,
    isDisabled: false,
    isPlaceholder: false,
    isSelected: false,
    isChecked: false,
    isNoResultsOption: false,
    component: 'button',
    onClick: () => {},
    sendRef: () => {},
    keyHandler: () => {},
    inputId: '',
    isFavorite: null
  };

  componentDidMount() {
    this.props.sendRef(
      this.props.isDisabled ? null : this.ref.current,
      this.props.isDisabled ? null : this.favoriteRef.current,
      this.props.isDisabled ? null : this.liRef.current,
      this.props.index
    );
  }

  componentDidUpdate() {
    this.props.sendRef(
      this.props.isDisabled ? null : this.ref.current,
      this.props.isDisabled ? null : this.favoriteRef.current,
      this.props.isDisabled ? null : this.liRef.current,
      this.props.index
    );
  }

  onKeyDown = (event: React.KeyboardEvent, innerIndex: number, onEnter?: any, isCheckbox?: boolean) => {
    const { index, keyHandler } = this.props;
    if (event.key === KeyTypes.Tab) {
      // More modal-like experience for checkboxes
      if (isCheckbox) {
        if (event.shiftKey) {
          keyHandler(index, innerIndex, 'up');
        } else {
          keyHandler(index, innerIndex, 'down');
        }
        event.stopPropagation();
      } else {
        keyHandler(index, innerIndex, 'tab');
      }
    }
    event.preventDefault();
    if (event.key === KeyTypes.ArrowUp) {
      keyHandler(index, innerIndex, 'up');
    } else if (event.key === KeyTypes.ArrowDown) {
      keyHandler(index, innerIndex, 'down');
    } else if (event.key === KeyTypes.ArrowLeft) {
      keyHandler(index, innerIndex, 'left');
    } else if (event.key === KeyTypes.ArrowRight) {
      keyHandler(index, innerIndex, 'right');
    } else if (event.key === KeyTypes.Enter) {
      if (onEnter !== undefined) {
        onEnter();
      } else {
        this.ref.current.click();
      }
    }
  };

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      children,
      className,
      id,
      description,
      value,
      onClick,
      isDisabled,
      isPlaceholder,
      isNoResultsOption,
      isSelected,
      isChecked,
      isFocused,
      sendRef,
      keyHandler,
      index,
      component,
      inputId,
      isFavorite,
      ariaIsFavoriteLabel = 'starred',
      ariaIsNotFavoriteLabel = 'not starred',
      ...props
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const Component = component as any;

    if (!id && isFavorite !== null) {
      // eslint-disable-next-line no-console
      console.error('Please provide an id to use the favorites feature.');
    }

    const generatedId = id || getUniqueId('select-option');
    const favoriteButton = (onFavorite: any) => (
      <button
        className={css(styles.selectMenuItem, styles.modifiers.action, styles.modifiers.favoriteAction)}
        aria-label={isFavorite ? ariaIsFavoriteLabel : ariaIsNotFavoriteLabel}
        onClick={() => {
          onFavorite(generatedId.replace('favorite-', ''), isFavorite);
        }}
        onKeyDown={event => {
          this.onKeyDown(event, 1, () => onFavorite(generatedId.replace('favorite-', '')));
        }}
        ref={this.favoriteRef}
      >
        <span className={css(styles.selectMenuItemActionIcon)}>
          <StarIcon />
        </span>
      </button>
    );

    return (
      <SelectConsumer>
        {({ onSelect, onClose, variant, inputIdPrefix, onFavorite }) => (
          <React.Fragment>
            {variant !== SelectVariant.checkbox && (
              <li
                id={generatedId}
                role="presentation"
                className={css(
                  styles.selectMenuWrapper,
                  isFavorite && styles.modifiers.favorite,
                  isFocused && styles.modifiers.focus
                )}
                ref={this.liRef}
              >
                <Component
                  {...props}
                  className={css(
                    styles.selectMenuItem,
                    isSelected && styles.modifiers.selected,
                    isDisabled && styles.modifiers.disabled,
                    description && styles.modifiers.description,
                    isFavorite !== null && styles.modifiers.link,
                    className
                  )}
                  onClick={(event: any) => {
                    if (!isDisabled) {
                      onClick(event);
                      onSelect(event, value, isPlaceholder);
                      onClose();
                    }
                  }}
                  role="option"
                  aria-selected={isSelected || null}
                  ref={this.ref}
                  onKeyDown={(event: React.KeyboardEvent) => {
                    this.onKeyDown(event, 0);
                  }}
                  type="button"
                >
                  {description && (
                    <React.Fragment>
                      <span className={css(styles.selectMenuItemMain)}>
                        {children || value.toString()}
                        {isSelected && (
                          <span className={css(styles.selectMenuItemIcon)}>
                            <CheckIcon aria-hidden />
                          </span>
                        )}
                      </span>
                      <span className={css(styles.selectMenuItemDescription)}>{description}</span>
                    </React.Fragment>
                  )}
                  {!description && (
                    <React.Fragment>
                      {children || value.toString()}
                      {isSelected && (
                        <span className={css(styles.selectMenuItemIcon)}>
                          <CheckIcon aria-hidden />
                        </span>
                      )}
                    </React.Fragment>
                  )}
                </Component>
                {isFavorite !== null && id && favoriteButton(onFavorite)}
              </li>
            )}
            {variant === SelectVariant.checkbox && !isNoResultsOption && (
              <label
                {...props}
                className={css(
                  checkStyles.check,
                  styles.selectMenuItem,
                  isDisabled && styles.modifiers.disabled,
                  description && styles.modifiers.description,
                  className
                )}
                onKeyDown={(event: React.KeyboardEvent) => {
                  this.onKeyDown(event, 0, undefined, true);
                }}
              >
                <input
                  id={inputId || `${inputIdPrefix}-${value.toString()}`}
                  className={css(checkStyles.checkInput)}
                  type="checkbox"
                  onChange={event => {
                    if (!isDisabled) {
                      onClick(event);
                      onSelect(event, value);
                    }
                  }}
                  ref={this.ref}
                  checked={isChecked || false}
                  disabled={isDisabled}
                />
                <span className={css(checkStyles.checkLabel, isDisabled && styles.modifiers.disabled)}>
                  {children || value.toString()}
                </span>
                {description && <div className={css(checkStyles.checkDescription)}>{description}</div>}
              </label>
            )}
            {variant === SelectVariant.checkbox && isNoResultsOption && (
              <div>
                <Component
                  {...props}
                  className={css(
                    styles.selectMenuItem,
                    isSelected && styles.modifiers.selected,
                    isDisabled && styles.modifiers.disabled,
                    className
                  )}
                  role="option"
                  aria-selected={isSelected || null}
                  ref={this.ref}
                  onKeyDown={(event: React.KeyboardEvent) => {
                    this.onKeyDown(event, 0, undefined, true);
                  }}
                  type="button"
                >
                  {children || value.toString()}
                </Component>
              </div>
            )}
          </React.Fragment>
        )}
      </SelectConsumer>
    );
  }
}
