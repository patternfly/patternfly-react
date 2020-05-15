import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import styles from '@patternfly/react-styles/css/components/Chip/chip';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the chip text */
  children?: React.ReactNode;
  /** Aria Label for close button */
  closeBtnAriaLabel?: string;
  /** Additional classes added to the chip item */
  className?: string;
  /** Flag indicating if the chip is an overflow chip */
  isOverflowChip?: boolean;
  /** Flag indicating if chip is read only */
  isReadOnly?: boolean;
  /** Function that is called when clicking on the chip close button */
  onClick?: (event: React.MouseEvent) => void;
  /** Component that will be used for chip. It is recommended that <button> or <li>  are used when the chip is an overflow chip. */
  component?: React.ReactNode;
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}

interface ChipState {
  isTooltipVisible: boolean;
}

export class Chip extends React.Component<ChipProps & OUIAProps, ChipState> {
  constructor(props: ChipProps & OUIAProps) {
    super(props);
    this.state = {
      isTooltipVisible: false
    };
  }
  span = React.createRef<HTMLSpanElement>();

  static defaultProps: ChipProps = {
    closeBtnAriaLabel: 'close',
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top' as 'auto' | 'top' | 'bottom' | 'left' | 'right',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (_e: React.MouseEvent) => undefined as any,
    component: 'div' as React.ReactNode
  };

  componentDidMount() {
    this.setState({
      isTooltipVisible: Boolean(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
    });
  }

  renderOverflowChip = () => {
    const { children, className, onClick, ouiaId } = this.props;
    const Component = this.props.component as any;
    return (
      <Component
        onClick={onClick}
        className={css(styles.chip, styles.modifiers.overflow, className)}
        {...getOUIAProps('OverflowChip', ouiaId)}
      >
        <span className={css(styles.chipText)}>{children}</span>
      </Component>
    );
  };

  renderInnerChip(id: string) {
    const { children, className, onClick, closeBtnAriaLabel, isReadOnly, component, ouiaId } = this.props;
    const Component = component as any;
    return (
      <Component
        className={css(styles.chip, className)}
        {...(this.state.isTooltipVisible && { tabIndex: 0 })}
        {...getOUIAProps('Chip', ouiaId)}
      >
        <span ref={this.span} className={css(styles.chipText)} id={id}>
          {children}
        </span>
        {!isReadOnly && (
          <Button
            onClick={onClick}
            variant="plain"
            aria-label={closeBtnAriaLabel}
            id={`remove_${id}`}
            aria-labelledby={`remove_${id} ${id}`}
          >
            <TimesIcon aria-hidden="true" />
          </Button>
        )}
      </Component>
    );
  }

  renderChip = (randomId: string) => {
    const { children, tooltipPosition } = this.props;
    if (this.state.isTooltipVisible) {
      return (
        <Tooltip position={tooltipPosition} content={children}>
          {this.renderInnerChip(randomId)}
        </Tooltip>
      );
    }
    return this.renderInnerChip(randomId);
  };

  render() {
    const { isOverflowChip } = this.props;
    return (
      <GenerateId>
        {randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(this.props.id || randomId))}
      </GenerateId>
    );
  }
}
