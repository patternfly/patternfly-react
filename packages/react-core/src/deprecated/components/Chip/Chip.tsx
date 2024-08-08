import * as React from 'react';
import { TooltipPosition } from '../../../components/Tooltip';
import { Label, LabelProps } from '../../../components/Label';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../../helpers';

export interface ChipProps extends LabelProps, OUIAProps {
  /** Badge to add to the chip. The badge will be rendered after the chip text. */
  badge?: React.ReactNode;
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
  /** @deprecated Component that will be used for chip. It is recommended that <button> or <li>  are used when the chip is an overflow chip. */
  component?: React.ReactNode;
  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';

  /** Css property expressed in percentage or any css unit that overrides the default value of the max-width of the chip's text */
  textMaxWidth?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
}

class Chip extends React.Component<ChipProps> {
  static displayName = 'Chip';
  constructor(props: ChipProps) {
    super(props);
  }

  static defaultProps: ChipProps = {
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top' as 'auto' | 'top' | 'bottom' | 'left' | 'right',

    onClick: (_e: React.MouseEvent) => undefined as any,
    textMaxWidth: '16ch'
  };

  render() {
    const {
      isOverflowChip,
      children,
      badge,
      onClick,
      className,
      textMaxWidth,
      isReadOnly,
      closeBtnAriaLabel,
      tooltipPosition,
      ouiaId,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      component,
      ...props
    } = this.props;

    return (
      <Label
        variant="outline"
        className={className}
        textMaxWidth={textMaxWidth}
        tooltipPosition={tooltipPosition}
        {...(!isReadOnly &&
          !isOverflowChip && {
            onClose: onClick,
            closeBtnAriaLabel: closeBtnAriaLabel ? closeBtnAriaLabel : `Close ${children}`
          })}
        {...(isOverflowChip && { onClick, variant: 'overflow' })}
        {...getOUIAProps(
          isOverflowChip ? 'OverflowChip' : Chip.displayName,
          ouiaId !== undefined ? ouiaId : getDefaultOUIAId(Chip.displayName)
        )}
        {...props}
      >
        {children}
        {badge && <React.Fragment> {badge}</React.Fragment>}
      </Label>
    );
  }
}

export { Chip };
