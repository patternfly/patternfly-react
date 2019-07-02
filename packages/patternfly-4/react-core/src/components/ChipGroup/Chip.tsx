import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { ChipButton } from './ChipButton';
import { OneOf } from '../../helpers/typeUtils';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Chip/chip';
import GenerateId from '../../helpers/GenerateId/GenerateId';

export interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the chip text */
  children?: React.ReactNode;
  /** Aria Label for close button */
  closeBtnAriaLabel?: string;
  /** Additional classes added to the chip item */
  className?: string; 
  /** Flag indicating if the chip has overflow */
  isOverflowChip?: boolean;
  /** Flag if chip is read only */
  isReadOnly?: boolean;
  /** Function that is called when clicking on the chip button */
  onClick?: (event: React.MouseEvent) => void
  /** Internal flag for which component will be used for chip */
  component?: React.ReactNode; 
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

interface ChipState {
  isTooltipVisible: boolean;
}

export class Chip extends React.Component<ChipProps, ChipState> {
  constructor(props: ChipProps){
    super(props); 
    this.state = {
      isTooltipVisible: false
    }
  }
  span = React.createRef<HTMLSpanElement>(); 

  static defaultProps = {
    closeBtnAriaLabel: 'close',
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top',
    onClick: () => undefined as any,
    component: 'div'
  }

  componentDidMount() {
    this.setState({
      isTooltipVisible: Boolean(this.span.current && 
        this.span.current.offsetWidth < this.span.current.scrollWidth)
    });
  }

  renderOverflowChip = () => {
    const { children, className, onClick } = this.props;
    const Component = this.props.component as any;
    return (
      <Component className={css(styles.chip, styles.modifiers.overflow, className)}>
        <ChipButton onClick={onClick}>
          <span className={css(styles.chipText)}>{children}</span>
        </ChipButton>
      </Component>
    );
  };

  renderChip = (randomId: string) => {
    const {
      children,
      closeBtnAriaLabel,
      tooltipPosition,
      className,
      onClick,
      isReadOnly
    } = this.props;
    const Component = this.props.component as any;
    if (this.state.isTooltipVisible) {
      return (
        <Tooltip position={tooltipPosition} content={children}>
          <Component className={css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)}>
            <span ref={this.span} className={css(styles.chipText)} id={randomId}>
              {children}
            </span>
            {!isReadOnly && (
              <ChipButton
                onClick={onClick}
                ariaLabel={closeBtnAriaLabel}
                id={`remove_${randomId}`}
                aria-labelledby={`remove_${randomId} ${randomId}`}
              >
                <TimesCircleIcon aria-hidden="true" />
              </ChipButton>
            )}
          </Component>
        </Tooltip>
      );
    }
    return (
      <Component className={css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)}>
        <span ref={this.span} className={css(styles.chipText)} id={randomId}>
          {children}
        </span>
        {!isReadOnly && (
          <ChipButton
            onClick={onClick}
            ariaLabel={closeBtnAriaLabel}
            id={`remove_${randomId}`}
            aria-labelledby={`remove_${randomId} ${randomId}`}
          >
            <TimesCircleIcon aria-hidden="true" />
          </ChipButton>
        )}
      </Component>
    );
  };
  
  render(){
    const { isOverflowChip } = this.props;
    return (
      <GenerateId>{randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId))}</GenerateId>
    );
  }
};
