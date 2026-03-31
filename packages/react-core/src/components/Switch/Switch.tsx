import { Component, Fragment } from 'react';
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import { css } from '@patternfly/react-styles';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import { getOUIAProps, OUIAProps } from '../../helpers';
import { SSRSafeIds } from '../../helpers/SSRSafeIds/SSRSafeIds';

export interface SwitchProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'>, OUIAProps {
  /** id for the label. */
  id?: string;
  /** Additional classes added to the switch */
  className?: string;
  /** Text value for the visible label */
  label?: React.ReactNode;
  /** Adds an accessible name to the switch when the label prop is not passed, and must describe the isChecked="true" state. */
  'aria-label'?: string;
  /** Adds an accessible name to the switch via one or more referenced id(s). The computed accessible name must describe the isChecked="true" state. */
  'aria-labelledby'?: string;
  /** Flag to show if the switch is checked when it is controlled by React state.
   * To make the switch uncontrolled instead use the defaultChecked prop, but do not use both.
   */
  isChecked?: boolean;
  /** Flag to set the default checked value of the switch when it is uncontrolled by React state.
   * To make the switch controlled instead use the isChecked prop, but do not use both.
   */
  defaultChecked?: boolean;
  /** Flag to show if the switch has a check icon. */
  hasCheckIcon?: boolean;
  /** Flag to show if the switch is disabled. */
  isDisabled?: boolean;
  /** A callback for when the switch selection changes. (event, isChecked) => {} */
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
  /** Flag to reverse the layout of toggle and label (label at start, toggle at end). */
  isReversed?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

class Switch extends Component<SwitchProps & OUIAProps> {
  static displayName = 'Switch';

  static defaultProps: SwitchProps = {
    isChecked: true,
    isDisabled: false,
    isReversed: false,
    'aria-label': undefined,
    'aria-labelledby': undefined,
    onChange: () => undefined as any
  };

  constructor(props: SwitchProps & OUIAProps) {
    super(props);
    if (!props.label && !props['aria-label'] && !props['aria-labelledby']) {
      // eslint-disable-next-line no-console
      console.error(
        'Switch: Switch requires at least one of label, aria-labelledby, or aria-label props to be specified'
      );
    }
  }

  render() {
    const {
      id: idProp,
      className,
      label,
      isChecked,
      defaultChecked,
      hasCheckIcon,
      isDisabled,
      onChange,
      isReversed,
      ouiaId,
      ouiaSafe,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    } = this.props;

    return (
      <SSRSafeIds prefix="pf-switch-" ouiaComponentType="Switch">
        {(generatedId, generatedOuiaId) => {
          const id = idProp || generatedId;
          const hasAccessibleName = label || ariaLabel || ariaLabelledBy;
          const isAriaLabelledBy = hasAccessibleName && (!ariaLabel || ariaLabelledBy);
          const useDefaultAriaLabelledBy = !ariaLabelledBy && !ariaLabel;
          const ariaLabelledByIds = ariaLabelledBy ?? `${id}-label`;

          return (
            <label
              className={css(styles.switch, isReversed && styles.modifiers.reverse, className)}
              htmlFor={id}
              {...getOUIAProps(Switch.displayName, ouiaId !== undefined ? ouiaId : generatedOuiaId, ouiaSafe)}
            >
              <input
                id={id}
                className={css(styles.switchInput)}
                type="checkbox"
                role="switch"
                onChange={(event) => onChange(event, event.target.checked)}
                {...(defaultChecked !== undefined ? { defaultChecked } : { checked: isChecked })}
                disabled={isDisabled}
                aria-labelledby={isAriaLabelledBy ? ariaLabelledByIds : null}
                aria-label={ariaLabel}
                {...props}
              />
              {label !== undefined ? (
                <Fragment>
                  <span className={css(styles.switchToggle)}>
                    {hasCheckIcon && (
                      <span className={css(styles.switchToggleIcon)}>
                        <CheckIcon />
                      </span>
                    )}
                  </span>
                  <span
                    className={css(styles.switchLabel)}
                    id={isAriaLabelledBy && useDefaultAriaLabelledBy ? `${id}-label` : null}
                    aria-hidden="true"
                  >
                    {label}
                  </span>
                </Fragment>
              ) : (
                <span className={css(styles.switchToggle)}>
                  <div className={css(styles.switchToggleIcon)}>
                    <CheckIcon />
                  </div>
                </span>
              )}
            </label>
          );
        }}
      </SSRSafeIds>
    );
  }
}

export { Switch };
