import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import { css } from '@patternfly/react-styles';
import { CheckIcon } from '@patternfly/react-icons';
import { getUniqueId } from '../../helpers/util';
import { Omit } from '../../helpers/typeUtils';
import { InjectedOuiaProps, withOuiaContext } from '../withOuia';

export interface SwitchProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  /** id for the label. */
  id?: string,
  /** Additional classes added to the Switch */
  className?: string,
  /** Text value for the label */
  label?: string,
  /** Flag to show if the Switch is checked. */
  isChecked?: boolean,
  /** Flag to show if the Switch is disabled. */
  isDisabled?: boolean,
  /** A callback for when the Switch selection changes. (isChecked, event) => {} */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Adds accessible text to the Switch, and should describe the isChecked="true" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true. */
  'aria-label'?: string
};

class Switch extends React.Component<SwitchProps & InjectedOuiaProps> {
  id = '';

  static defaultProps = {
    id: '',
    className: '',
    label: '',
    isChecked: true,
    isDisabled: false,
    'aria-label': '',
    onChange: () => undefined as any
  };

  constructor(props: SwitchProps & InjectedOuiaProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // tslint:disable-next-line:no-console
      console.error('Switch: Switch requires either an id or aria-label to be specified');
    }
    this.id =props.id || getUniqueId();
  }

  render() {
    const { className, label, isChecked, isDisabled, onChange, ouiaContext, ouiaId, ...props } = this.props;
    return (
      <label
        className={css(styles.switch, className)}
        htmlFor={this.id}
        {...ouiaContext.isOuia && {
          'data-ouia-component-type': 'Switch',
          'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
        }}
      >
        <input
          {...props}
          id={this.id}
          className={css(styles.switchInput)}
          type="checkbox"
          onChange={event => onChange(event.currentTarget.checked, event)}
          checked={isChecked}
          disabled={isDisabled}
        />
        {label !== '' ? (
          <React.Fragment>
            <span className={css(styles.switchToggle)} />
            <span className={css(styles.switchLabel, styles.modifiers.on)} aria-hidden="true">
              {label}
            </span>
            <span className={css(styles.switchLabel, styles.modifiers.off)} aria-hidden="true">
              {label}
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

const SwitchWithOuiaContext = withOuiaContext(Switch);

export { SwitchWithOuiaContext as Switch };