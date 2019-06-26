import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { Omit } from '../../helpers/typeUtils';

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
}

interface DataListActionState {
  isOpen: boolean;
}

export class DataListAction extends React.Component<DataListActionProps, DataListActionState> {
  static defaultProps = {
    className: '',
  }

  constructor(props: DataListActionProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = (isOpen: boolean) => {
    this.setState({ isOpen });
  };

  onSelect = (event: MouseEvent) => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const {
      children,
      className,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    } = this.props;

    return (
      <div className={css(styles.dataListItemAction, className)}>
        <div className={css(styles.dataListAction, className)} {...props}>
          {children}
        </div>
      </div>
    );
  }
}
