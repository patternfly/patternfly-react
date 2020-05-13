import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import { css } from '@patternfly/react-styles';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { getUniqueId } from '../../helpers/util';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface SwitchProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  /** id for the label. */
  id?: string;
  /** Additional classes added to the Switch */
  className?: string;
  /** Text value for the label when on */
  label?: React.ReactNode;
  /** Text value for the label when off */
  labelOff?: React.ReactNode;
  /** Flag to show if the Switch is checked. */
  isChecked?: boolean;
  /** Flag to show if the Switch is disabled. */
  isDisabled?: boolean;
  /** A callback for when the Switch selection changes. (isChecked, event) => {} */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Adds accessible text to the Switch, and should describe the isChecked="true" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true. */
  'aria-label'?: string;
}

export class Switch extends React.Component<SwitchProps & OUIAProps> {
  id: string;

  static defaultProps: SwitchProps = {
    isChecked: true,
    isDisabled: false,
    'aria-label': '',
    onChange: () => undefined as any
  };

  constructor(props: SwitchProps & OUIAProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // eslint-disable-next-line no-console
      console.error('Switch: Switch requires either an id or aria-label to be specified');
    }
    this.id = props.id || getUniqueId();
  }

  render() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      className,
      label,
      labelOff,
      isChecked,
      isDisabled,
      onChange,
      ouiaId,
      ...props
    } = this.props;

    const isAriaLabelledBy = props['aria-label'] === '';
    return (
      <label className={css(styles.switch, className)} htmlFor={this.id} {...getOUIAProps('Switch', ouiaId)}>
        <input
          id={this.id}
          className={css(styles.switchInput)}
          type="checkbox"
          onChange={event => onChange(event.target.checked, event)}
          checked={isChecked}
          disabled={isDisabled}
          aria-labelledby={isAriaLabelledBy ? `${this.id}-on` : null}
          {...props}
        />
        {label !== undefined ? (
          <React.Fragment>
            <span className={css(styles.switchToggle)} />
            <span
              className={css(styles.switchLabel, styles.modifiers.on)}
              id={isAriaLabelledBy ? `${this.id}-on` : null}
              aria-hidden="true"
            >
              {label}
            </span>
            <span
              className={css(styles.switchLabel, styles.modifiers.off)}
              id={isAriaLabelledBy ? `${this.id}-off` : null}
              aria-hidden="true"
            >
              {labelOff !== undefined ? labelOff : label}
            </span>
          </React.Fragment>
        ) : (
          <span className={css(styles.switchToggle)}>
            <div className={css(styles.switchToggleIcon)} aria-hidden="true">
              <CheckIcon noVerticalAlign />
            </div>
          </span>
        )}
      </label>
    );
  }
}
