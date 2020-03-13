import * as React from 'react';
import { SelectedRowsAmount } from './Table';

export interface SelectColumnProps {
  name?: string;
  'data-selectedrowsamount'?: SelectedRowsAmount;
  children?: React.ReactNode;
  className?: string;
  onSelect?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export class SelectColumn extends React.Component<SelectColumnProps> {
  static displayName = 'SelectColumn';
  static defaultProps: SelectColumnProps = {
    children: null as React.ReactNode,
    onSelect: null as (event: React.FormEvent<HTMLInputElement>) => void
  };

  ref: React.RefObject<HTMLInputElement> = React.createRef();

  setCheckStatus() {
    if (this.props.name === 'check-all') {
      this.ref.current.indeterminate = this.props['data-selectedrowsamount'] === SelectedRowsAmount.some;
      this.ref.current.checked = this.props['data-selectedrowsamount'] === SelectedRowsAmount.all;
    }
  }

  componentDidMount() {
    this.setCheckStatus();
  }

  componentDidUpdate() {
    this.setCheckStatus();
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, onSelect, className, ...props } = this.props;
    return (
      <React.Fragment>
        <input {...props} type="checkbox" onChange={onSelect} ref={this.ref} />
        {children}
      </React.Fragment>
    );
  }
}
