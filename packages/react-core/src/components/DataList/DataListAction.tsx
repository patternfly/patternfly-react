import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { formatBreakpointMods } from '../../helpers/util';

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
  /** What breakpoints to hide/show the data list action */
  visibility?: {
    default?: 'hidden' | 'visible';
    sm?: 'hidden' | 'visible';
    md?: 'hidden' | 'visible';
    lg?: 'hidden' | 'visible';
    xl?: 'hidden' | 'visible';
    '2xl'?: 'hidden' | 'visible';
  };
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
      visibility,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;

    return (
      <div className={css(styles.dataListItemAction, formatBreakpointMods(visibility, styles), className)} {...props}>
        {children}
      </div>
    );
  }
}
