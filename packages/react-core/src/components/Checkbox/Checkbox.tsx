import { Component } from 'react';
import styles from '@patternfly/react-styles/css/components/Check/check';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import { getOUIAProps, OUIAProps } from '../../helpers';
import { SSRSafeIds } from '../../helpers/SSRSafeIds/SSRSafeIds';
import { ASTERISK } from '../../helpers/htmlConstants';

export interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'>, OUIAProps {
  /** Additional classes added to the checkbox wrapper. This wrapper will be div element by default. It will be a label element if
   * isLabelWrapped is true, or it can be overridden by any element specified in the component prop.
   */
  className?: string;
  /** Additional classes added to the checkbox input. */
  inputClassName?: string;
  /** Flag to indicate whether the checkbox wrapper element is a <label> element for the checkbox input. Will not apply if a component prop (with a value other than a "label") is specified. */
  isLabelWrapped?: boolean;
  /** Flag to show if the checkbox selection is valid or invalid. */
  isValid?: boolean;
  /** Flag to show if the checkbox is disabled. */
  isDisabled?: boolean;
  /** Flag to show if the checkbox is required. */
  isRequired?: boolean;
  /** Flag to show if the checkbox is checked. If null, the checkbox will be indeterminate (partially checked). */
  isChecked?: boolean | null;
  checked?: boolean;
  /** A callback for when the checkbox selection changes. */
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
  /** Label text of the checkbox. */
  label?: React.ReactNode;
  /** Sets the position of the label. Defaults to 'end' (after the checkbox input). */
  labelPosition?: 'start' | 'end';
  /** Id of the checkbox. */
  id: string;
  /** Aria-label of the checkbox. */
  'aria-label'?: string;
  /** Description text of the checkbox. */
  description?: React.ReactNode;
  /** Body text of the checkbox */
  body?: React.ReactNode;
  /** Custom aria-describedby value for the checkbox input. If not provided and description is set, a unique ID will be generated automatically. */
  'aria-describedby'?: string;
  /** Sets the checkbox wrapper component to render. Defaults to "div". If set to "label", behaves the same as if isLabelWrapped prop was specified. */
  component?: React.ElementType;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

// tslint:disable-next-line:no-empty
const defaultOnChange = () => {};

class Checkbox extends Component<CheckboxProps> {
  static displayName = 'Checkbox';
  static defaultProps: PickOptional<CheckboxProps> = {
    className: '',
    isLabelWrapped: false,
    isValid: true,
    isDisabled: false,
    isRequired: false,
    isChecked: false,
    onChange: defaultOnChange,
    ouiaSafe: true
  };

  private handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.props.onChange(event, event.currentTarget.checked);
  };

  render() {
    const {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      className,
      inputClassName,
      onChange,
      isLabelWrapped,
      labelPosition = 'end',
      isValid,
      isDisabled,
      isRequired,
      isChecked,
      label,
      checked,
      defaultChecked,
      description,
      body,
      ouiaId,
      ouiaSafe,
      component,
      ...props
    } = this.props;
    if (!props.id) {
      // eslint-disable-next-line no-console
      console.error('Checkbox:', 'id is required to make input accessible');
    }
    const checkedProps: { checked?: boolean; defaultChecked?: boolean } = {};
    if ([true, false].includes(checked) || isChecked === true) {
      checkedProps.checked = checked || isChecked;
    }
    if (onChange !== defaultOnChange) {
      checkedProps.checked = isChecked;
    }
    if ([false, true].includes(defaultChecked)) {
      checkedProps.defaultChecked = defaultChecked;
    }

    return (
      <SSRSafeIds prefix="pf-checkbox-description-" ouiaComponentType="Checkbox">
        {(descriptionId, generatedOuiaId) => {
          let ariaDescribedByValue: string | undefined;
          if (ariaDescribedBy !== undefined) {
            ariaDescribedByValue = ariaDescribedBy === '' ? undefined : ariaDescribedBy;
          } else if (description) {
            ariaDescribedByValue = descriptionId;
          }

          const inputRendered = (
            <input
              {...props}
              className={css(styles.checkInput, inputClassName)}
              type="checkbox"
              onChange={this.handleChange}
              aria-invalid={!isValid}
              aria-label={ariaLabel}
              aria-describedby={ariaDescribedByValue}
              disabled={isDisabled}
              required={isRequired}
              ref={(elem) => {
                elem && (elem.indeterminate = isChecked === null);
              }}
              {...checkedProps}
              {...getOUIAProps(Checkbox.displayName, ouiaId !== undefined ? ouiaId : generatedOuiaId, ouiaSafe)}
            />
          );

          const wrapWithLabel = (isLabelWrapped && !component) || component === 'label';

          const Label = wrapWithLabel ? 'span' : 'label';
          const labelRendered = label ? (
            <Label
              className={css(styles.checkLabel, isDisabled && styles.modifiers.disabled)}
              htmlFor={!wrapWithLabel ? props.id : undefined}
            >
              {label}
              {isRequired && (
                <span className={css(styles.checkLabelRequired)} aria-hidden="true">
                  {ASTERISK}
                </span>
              )}
            </Label>
          ) : null;

          const WrapperComponent = component ?? (wrapWithLabel ? 'label' : 'div');

          checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
          return (
            <WrapperComponent
              className={css(styles.check, !label && styles.modifiers.standalone, className)}
              htmlFor={wrapWithLabel ? props.id : undefined}
            >
              {labelPosition === 'start' ? (
                <>
                  {labelRendered}
                  {inputRendered}
                </>
              ) : (
                <>
                  {inputRendered}
                  {labelRendered}
                </>
              )}
              {description && (
                <span id={descriptionId} className={css(styles.checkDescription)}>
                  {description}
                </span>
              )}
              {body && <span className={css(styles.checkBody)}>{body}</span>}
            </WrapperComponent>
          );
        }}
      </SSRSafeIds>
    );
  }
}

export { Checkbox };
