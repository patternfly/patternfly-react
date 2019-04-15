import * as React from 'react';
import { OneOf } from '../../helpers/typeUtils';
import ChipButton from './ChipButton';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/Chip/chip.css';
import { css } from '@patternfly/react-styles';
import GenerateId from '../../helpers/GenerateId/GenerateId';

export interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  closeBtnAriaLabel?: string;
  className?: string;
  isOverflowChip?: boolean;
  onClick?(event: React.MouseEvent): void;
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

export class Chip extends React.Component<ChipProps, StateProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      isTooltipVisible: false,
      span: React.createRef()
    };
  }

  componentDidMount() {
    this.setState({
      isTooltipVisible:
        this.state.span.current && this.state.span.current.offsetWidth < this.state.span.current.scrollWidth
    });
  }

  renderOverflowChip = () => {
    const { children, className, onClick } = this.props;
    return (
      <div className={css(styles.chip, styles.modifiers.overflow, className)}>
        <ChipButton onClick={onClick}>
          <span className={css(styles.chipText)}>{children}</span>
        </ChipButton>
      </div>
    );
  };

  renderChip = (randomId: any) => {
    const { children, closeBtnAriaLabel, tooltipPosition, className, onClick } = this.props;
    if (this.state.isTooltipVisible) {
      return (
        <Tooltip position={tooltipPosition} content={children}>
          <li className={css(styles.chip, className)}>
            <span ref={this.state.span} className={css(styles.chipText)} id={randomId}>
              {children}
            </span>
            <ChipButton
              onClick={onClick}
              ariaLabel={closeBtnAriaLabel}
              id={`remove_${randomId}`}
              aria-labelledby={`remove_${randomId} ${randomId}`}
            >
              <TimesCircleIcon aria-hidden="true" />
            </ChipButton>
          </li>
        </Tooltip>
      );
    }
    return (
      <li className={css(styles.chip, className)}>
        <span ref={this.state.span} className={css(styles.chipText)} id={randomId}>
          {children}
        </span>
        <ChipButton
          onClick={onClick}
          ariaLabel={closeBtnAriaLabel}
          id={`remove_${randomId}`}
          aria-labelledby={`remove_${randomId} ${randomId}`}
        >
          <TimesCircleIcon aria-hidden="true" />
        </ChipButton>
      </li>
    );
  };

  render() {
    const { isOverflowChip } = this.props;
    return (
      <GenerateId>{randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId))}</GenerateId>
    );
  }
}
