import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';
import { css } from '@patternfly/react-styles';
import { canUseDOM } from 'exenv';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Omit } from '../../helpers/typeUtils';

export interface AlertGroupProps extends Omit<React.HTMLProps<HTMLUListElement>, 'className'> {
  /** Additional classes added to the AlertGroup */
  className?: string;
  /** Alerts to be rendered in the AlertGroup */
  children?: React.ReactNode;
  /** Toast notifications are positioned at the top right corner of the viewport */
  isToast?: boolean;
}

class AlertGroup extends React.Component<AlertGroupProps> {
  container?: HTMLDivElement = undefined;
  constructor(props: AlertGroupProps) {
    super(props);
  }
  componentDidMount() {
    if (this.container) {
      document.body.appendChild(this.container);
    }
  }
  componentWillUnmount() {
    if (this.container) {
      document.body.removeChild(this.container);
    }
  }
  render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.container) {
      this.container = document.createElement('div');
    }
    const { className, children, isToast, ...rest } = this.props;
    const alertGroup = (
      <ul
        className={css(styles.alertGroup, className, (isToast ? 'pf-m-toast' : ''))}
        {...rest}>
        {React.Children.toArray(children).map(
          (Alert: React.ReactNode, index: number) => <li className="pf-c-alert-group__item" key={index}>{Alert}</li>
        )}
      </ul>
    );
    return (isToast) ? ReactDOM.createPortal(alertGroup, this.container) : alertGroup;
  }
}

export { AlertGroup };