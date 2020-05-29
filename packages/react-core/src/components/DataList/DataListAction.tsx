import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { formatBreakpointMods } from '../../helpers/util';

export interface DataListActionBreakpointMod {
  /** The attribute to modify  */
  modifier: 'hidden' | 'visible';
  /** The breakpoint at which to apply the modifier */
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface DataListActionProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
  /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
  children: React.ReactNode;
  /** Additional classes added to the DataList Action */
  className?: string;
  /** Identify the DataList toggle number */
  id: string;
  /** Adds accessible text to the DataList Action */
  'aria-labelledby': string;
  /** Adds accessible text to the DataList Action */
  'aria-label': string;
  /** An array of objects representing the various modifiers to apply to the data list action at various breakpoints */
  breakpointMods?: (
    | {
        modifier: 'hidden' | 'visible';
        breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
      }
    | DataListActionBreakpointMod)[];
}

interface DataListActionState {
  isOpen: boolean;
}

export class DataListAction extends React.Component<DataListActionProps, DataListActionState> {
  state = {
    isOpen: false
  };

  onToggle = (isOpen: boolean) => {
    this.setState({ isOpen });
  };

  onSelect = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const {
      children,
      className,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      breakpointMods,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;

    return (
      <div
        className={css(styles.dataListItemAction, formatBreakpointMods(breakpointMods, styles), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
}
