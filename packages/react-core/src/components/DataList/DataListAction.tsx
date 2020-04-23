import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { PickOptional } from '../../helpers/typeUtils';
import { DataListActionBreakpointMod } from './DataListActionBreakpoints';
import { formatBreakpointMods } from '../../helpers/util';

const visibilityModifiers = [
  'hidden',
  'hiddenOnSm',
  'hiddenOnMd',
  'hiddenOnLg',
  'hiddenOnXl',
  'hiddenOn_2xl',
  'visibleOnSm',
  'visibleOnMd',
  'visibleOnLg',
  'visibleOnXl',
  'visibleOn_2xl'
] as (keyof typeof styles.modifiers)[];

interface DataListActionVisibility {
  hidden?: string;
  hiddenOnSm?: string;
  hiddenOnMd?: string;
  hiddenOnLg?: string;
  hiddenOnXl?: string;
  hiddenOn2Xl?: string;
  visibleOnSm?: string;
  visibleOnMd?: string;
  visibleOnLg?: string;
  visibleOnXl?: string;
  visibleOn2Xl?: string;
}

export const DataListActionVisibility: DataListActionVisibility = visibilityModifiers
  .filter(key => styles.modifiers[key])
  .reduce(
    (acc, curr) => {
      const key2 = curr.replace('_2xl', '2Xl') as keyof typeof DataListActionVisibility;
      acc[key2] = styles.modifiers[curr];
      return acc;
    },
    {} as DataListActionVisibility
  );

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
  breakpointMods?: DataListActionBreakpointMod[];
}

interface DataListActionState {
  isOpen: boolean;
}

export class DataListAction extends React.Component<DataListActionProps, DataListActionState> {
  static defaultProps: PickOptional<DataListActionProps> = {
    className: '',
    breakpointMods: [] as DataListActionBreakpointMod[]
  };

  constructor(props: DataListActionProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

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
