import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Radio/radio';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface RadioProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'disabled' | 'label' | 'onChange' | 'type'>,
    OUIAProps {
  /** Additional classes added to the radio wrapper. This wrapper will be div element by default. It will be a label element if
   * isLabelWrapped is true, or it can be overridden by any element specified in the component prop.
   */
  className?: string;
  /** Additional classes added to the radio input. */
  inputClassName?: string;
  /** Id of the radio. */
  id: string;
  /** Flag to indicate whether the radio wrapper element is a native label element for the radio input. Will not apply if a component prop (with a value other than a "label") is specified. */
  isLabelWrapped?: boolean;
  /** Flag to show if the radio is checked. */
  checked?: boolean;
  /** Flag to show if the radio is checked. */
  isChecked?: boolean;
  /** Flag to show if the radio is disabled. */
  isDisabled?: boolean;
  /** Flag to show if the radio selection is valid or invalid. */
  isValid?: boolean;
  /** Label text of the radio. */
  label?: React.ReactNode;
  /** Sets the position of the label. Defaults to 'end' (after the radio input). */
  labelPosition?: 'start' | 'end';
  /** Name for group of radios */
  name: string;
  /** A callback for when the radio selection changes. */
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
  /** Aria label for the radio. */
  'aria-label'?: string;
  /** Description text of the radio. */
  description?: React.ReactNode;
  /** Body of the radio. */
  body?: React.ReactNode;
  /** Sets the radio wrapper component to render. Defaults to "div". If set to "label", behaves the same as if isLabelWrapped prop was specified. */
  component?: React.ElementType;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

class Radio extends React.Component<RadioProps, { ouiaStateId: string }> {
  static displayName = 'Radio';
  static defaultProps: PickOptional<RadioProps> = {
    className: '',
    isDisabled: false,
    isValid: true,
    onChange: () => {}
  };

  constructor(props: RadioProps) {
    super(props);
    if (!props.label && !props['aria-label']) {
      // eslint-disable-next-line no-console
      console.error('Radio:', 'Radio requires an aria-label to be specified');
    }
    this.state = {
      ouiaStateId: getDefaultOUIAId(Radio.displayName)
    };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange(event, event.currentTarget.checked);
  };

  render() {
    const {
      'aria-label': ariaLabel,
      checked,
      className,
      inputClassName,
      defaultChecked,
      isLabelWrapped,
      labelPosition = 'end',
      isChecked,
      isDisabled,
      isValid,
      label,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      description,
      body,
      ouiaId,
      ouiaSafe = true,
      component,
      ...props
    } = this.props;
    if (!props.id) {
      // eslint-disable-next-line no-console
      console.error('Radio:', 'id is required to make input accessible');
    }

    const inputRendered = (
      <input
        {...props}
        className={css(styles.radioInput, inputClassName)}
        type="radio"
        onChange={this.handleChange}
        aria-invalid={!isValid}
        disabled={isDisabled}
        checked={checked || isChecked}
        {...(checked === undefined && { defaultChecked })}
        {...(!label && { 'aria-label': ariaLabel })}
        {...getOUIAProps(Radio.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
      />
    );

    const wrapWithLabel = (isLabelWrapped && !component) || component === 'label';

    const Label = wrapWithLabel ? 'span' : 'label';
    const labelRendered = label ? (
      <Label
        className={css(styles.radioLabel, isDisabled && styles.modifiers.disabled)}
        htmlFor={!wrapWithLabel ? props.id : undefined}
      >
        {label}
      </Label>
    ) : null;

    const Component = component ?? (wrapWithLabel ? 'label' : 'div');

    return (
      <Component
        className={css(styles.radio, !label && styles.modifiers.standalone, className)}
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
        {description && <span className={css(styles.radioDescription)}>{description}</span>}
        {body && <span className={css(styles.radioBody)}>{body}</span>}
      </Component>
    );
  }
}

export { Radio };
