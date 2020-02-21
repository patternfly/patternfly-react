import * as React from 'react';
import { TooltipProps } from '../Tooltip/Tooltip';
import styles from '@patternfly/react-styles/css/components/Radio/radio';
import { css } from '@patternfly/react-styles';
import { Omit, PickOptional } from '../../helpers/typeUtils';

export interface RadioProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'disabled' | 'label' | 'onChange' | 'type'> {
  /** Additional classes added to the radio. */
  className?: string;
  /** Id of the radio. */
  id: string;
  /** Flag to show if the radio label is wrapped on small screen. */
  isLabelWrapped?: boolean;
  /** Flag to show if the radio label is shown before the radio button. */
  isLabelBeforeButton?: boolean;
  /** Flag to show if the radio is checked. */
  checked?: boolean;
  /** Flag to show if the radio is checked. */
  isChecked?: boolean;
  /** Flag to show if the radio is disabled. */
  isDisabled?: boolean;
  /** Sets radio in an inoperable state, as alternative to isDisabled, to allow for setting tooltips */
  isInoperable?: boolean;
  /** Tooltip configuration to set for the input */
  tooltip?: { component: React.ComponentType; props: TooltipProps };
  /** Flag to show if the radio selection is valid or invalid. */
  isValid?: boolean;
  /** Label text of the radio. */
  label?: React.ReactNode;
  /** Name for group of radios */
  name: string;
  /** A callback for when the radio selection changes. */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Aria-label for the radio. */
  'aria-label'?: string;
  /** Description text of the radio. */
  description?: React.ReactNode;
}

export class Radio extends React.Component<RadioProps> {
  static defaultProps: PickOptional<RadioProps> = {
    className: '',
    isDisabled: false,
    isInoperable: null,
    isValid: true,
    onChange: () => {}
  };

  constructor(props: RadioProps) {
    super(props);
    if (!props.label && !props['aria-label']) {
      // eslint-disable-next-line no-console
      console.error('Radio:', 'Radio requires an aria-label to be specified');
    }
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const {
      'aria-label': ariaLabel,
      checked,
      className,
      defaultChecked,
      isLabelWrapped,
      isLabelBeforeButton,
      isChecked,
      isDisabled,
      isInoperable,
      isValid,
      label,
      tabIndex = null,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      description,
      tooltip,
      ...props
    } = this.props;

    const preventDefaultActions = {
      onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
      },
      onClick: (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
      },
      onChange: (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
      }
    };

    const inputRendered = (
      <input
        {...props}
        tabIndex={isInoperable && !tooltip ? -1 : tabIndex}
        aria-disabled={isInoperable}
        className={css(styles.radioInput, isInoperable && 'pf-m-inoperable')}
        type="radio"
        onChange={this.handleChange}
        {...(isInoperable ? preventDefaultActions : null)}
        aria-invalid={!isValid}
        disabled={isDisabled}
        checked={checked || isChecked}
        {...(checked === undefined && { defaultChecked })}
        {...(!label && { 'aria-label': ariaLabel })}
      />
    );
    const labelRendered = !label ? null : isLabelWrapped ? (
      <span
        className={css(styles.radioLabel, isDisabled && styles.modifiers.disabled, isInoperable && 'pf-m-inoperable')}
      >
        {label}
      </span>
    ) : (
      <label
        className={css(styles.radioLabel, isDisabled && styles.modifiers.disabled, isInoperable && 'pf-m-inoperable')}
        htmlFor={props.id}
      >
        {label}
      </label>
    );

    const descRender = description ? <div className={css(styles.radioDescription)}>{description}</div> : null;
    const childrenRendered = isLabelBeforeButton ? (
      <>
        {labelRendered}
        {tooltip ? <tooltip.component {...tooltip.props}>{inputRendered}</tooltip.component> : inputRendered}
        {descRender}
      </>
    ) : (
      <>
        {tooltip ? <tooltip.component {...tooltip.props}>{inputRendered}</tooltip.component> : inputRendered}
        {labelRendered}
        {descRender}
      </>
    );

    return isLabelWrapped ? (
      <label
        tabIndex={isInoperable && !tooltip ? tabIndex || 0 : null}
        className={css(styles.radio, isInoperable && 'pf-m-inoperable', className)}
        htmlFor={props.id}
      >
        {childrenRendered}
      </label>
    ) : (
      <div
        tabIndex={isInoperable && !tooltip ? tabIndex || 0 : null}
        className={css(styles.radio, isInoperable && 'pf-m-inoperable', className)}
      >
        {childrenRendered}
      </div>
    );
  }
}
