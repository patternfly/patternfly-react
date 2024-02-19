import * as React from 'react';
import { LabelGroup, LabelGroupProps } from '../../../components/Label';
import { TooltipPosition } from '../../../components/Tooltip';
import { getOUIAProps, OUIAProps } from '../../../helpers';

export interface ChipGroupProps extends Omit<LabelGroupProps, 'ref'>, OUIAProps {
  /** Content rendered inside the chip group. Should be <Chip> elements. */
  children?: React.ReactNode;
  /** Additional classes added to the chip item */
  className?: string;
  /** Flag for having the chip group default to expanded */
  defaultIsOpen?: boolean;
  /** Customizable "Show Less" text string */
  expandedText?: string;
  /** Customizeable template string. Use variable "${remaining}" for the overflow chip count. */
  collapsedText?: string;
  /** Category name text for the chip group category.  If this prop is supplied the chip group with have a label and category styling applied */
  categoryName?: string;
  /** Aria label for chip group that does not have a category name */
  'aria-label'?: string;
  /** Set number of chips to show before overflow */
  numChips?: number;
  /** Flag if chip group can be closed*/
  isClosable?: boolean;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
  /** Function that is called when clicking on the chip group close button or on an overflow chip */
  onClick?: (event: React.MouseEvent) => void;
  /** @deprecated Function that is called when clicking on the overflow (expand/collapse) chip button */
  onOverflowChipClick?: (event: React.MouseEvent) => void;
  /** Position of the tooltip which is displayed if the category name text is longer */
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
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
}

class ChipGroup extends React.Component<ChipGroupProps> {
  static displayName = 'ChipGroup';
  constructor(props: ChipGroupProps) {
    super(props);
  }

  static defaultProps: ChipGroupProps = {
    expandedText: 'Show Less',
    collapsedText: '${remaining} more',
    categoryName: '',
    defaultIsOpen: false,
    numChips: 3,
    isClosable: false,
    closeBtnAriaLabel: 'Close chip group',
    tooltipPosition: 'top',
    'aria-label': 'Chip group category'
  };

  render() {
    const {
      categoryName,
      children,
      className,
      isClosable,
      closeBtnAriaLabel,
      'aria-label': ariaLabel,
      onClick,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onOverflowChipClick,
      numChips,
      expandedText,
      collapsedText,
      ouiaId,
      defaultIsOpen,
      tooltipPosition,
      ...props
    } = this.props;

    return (
      <LabelGroup
        className={className}
        categoryName={categoryName}
        numLabels={numChips}
        isClosable={isClosable}
        closeBtnAriaLabel={closeBtnAriaLabel}
        aria-label={ariaLabel}
        onClick={onClick}
        expandedText={expandedText}
        collapsedText={collapsedText}
        defaultIsOpen={defaultIsOpen}
        tooltipPosition={tooltipPosition}
        {...getOUIAProps(ChipGroup.displayName, ouiaId)}
        {...props}
      >
        {children}
      </LabelGroup>
    );
  }
}

export { ChipGroup };
