import * as React from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { TooltipPosition } from '../Tooltip';

export interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  closeBtnAriaLabel?: string;
  className?: string;
  isOverflowChip?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  tooltipPosition?: OneOf<typeof TooltipPosition, keyof typeof TooltipPosition>;
}

const defaultProps = {
  children: null,
  closeBtnAriaLabel: 'close',
  className: '',
  isOverflowChip: false,
  tooltipPosition: 'top',
  onClick: () => {}
};

export class Chip extends React.Component<ChipProps> {
  constructor(props) {
    super(props);
    this.state = { isTooltipVisible: false };
  }

  componentDidMount() {
    this.setState({
      isTooltipVisible: this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth
    });
  }
}
