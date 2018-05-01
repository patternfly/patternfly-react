import { SFC } from 'react';

export interface UtilizationBarProps {
  /** Minimal value */
  min?: number;
  /** Maximal value */
  max?: number;
  /** Current value */
  now?: number;
  /** Threshold value. Bar will change value to orange if it's surpassed. */
  thresholdWarning?: number;
  /** Function that renders tooltip for available part of bar. Takes params max and now. */
  thresholdError?: number;
  /** Function that renders tooltip for available part of bar. Takes params max and now. */
  availableTooltipFunction?(max: number, now: number): React.ReactNode;
  /** Function that renders tooltip for used part of bar. Takes params max and now. */
  usedTooltipFunction?(max: number, now: number): React.ReactNode;
  /** Description that is displayed on the right side */
  description?: React.ReactNode;
  /** Units */
  label?: React.ReactNode;
  /** If set labels will be placed above utilization bar */
  descriptionPlacementTop?: boolean;
  /** User's custom classes */
  className?: string;
}

declare const UtilizationBar: SFC<UtilizationBarProps>;

export default UtilizationBar;
