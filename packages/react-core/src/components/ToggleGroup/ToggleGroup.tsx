import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import ToggleGroupContext from './ToggleGroupContext';
import { Divider } from '../Divider';

export enum ToggleGroupVariant {
  default = 'default',
  light = 'light'
}

export interface ToggleGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the toggle group */
  children?: React.ReactNode;
  /** Additional classes added to the toggle group */
  className?: string;
  /** Adds toggle group variant styles */
  variant?: ToggleGroupVariant | 'light' | 'default';
}

export class ToggleGroup extends React.Component<ToggleGroupProps> {
  static displayName = 'ToggleGroup';
  static defaultProps = {
    className: '',
    children: '',
    variant: ToggleGroupVariant.default
  };

  render() {
    const { className, children, variant } = this.props;

    const toggleGroupItemList = [] as any[];
    const length = React.Children.count(children);
    React.Children.forEach(children, (child, index) => {
      toggleGroupItemList.push(child);
      if (index !== length - 1) {
        toggleGroupItemList.push(<Divider isVertical component="div" />);
      }
    });

    return (
      <ToggleGroupContext.Provider value={{ variant }}>
        <div className={css(styles.toggleGroup, className)}>{toggleGroupItemList}</div>
      </ToggleGroupContext.Provider>
    );
  }
}
